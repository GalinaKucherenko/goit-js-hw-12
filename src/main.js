import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { searchPictures } from './js/pixabay-api.js';
import { listPictures } from './js/render-functions.js';

const form = document.querySelector('.form');
const input = document.querySelector('input[name="text"]');
const gallery = document.querySelector(".gallery");
const loader = document.querySelector('.loader');

form.addEventListener('submit', (event) => { // Зміна обробника подій на сабміт форми
    event.preventDefault(); // Запобігання стандартній поведінці подання форми
    const searchTerm = input.value.trim(); // Отримання введеного користувачем пошукового терміна
    if (searchTerm !== "") { // Перевірка наявності пошукового терміна
        loader.style.display = 'block'; // Показати елемент завантаження
        gallery.innerHTML = ""; // Повністю очистити вміст галереї
        searchPictures(searchTerm) // Виклик функції пошуку зображень з переданим терміном
            .then((pictures) => {
                if (pictures.hits.length === 0) { // Перевірка, чи повернув сервер порожній масив зображень
                    iziToast.info({ message: 'Sorry, there are no images matching your search query. Please try again!', position: 'center' }); // Відображення повідомлення про помилку
                } else {
                    listPictures(gallery, pictures, lightbox); // Виклик функції для відображення зображень
                }
            })
            .catch((error) => { // Обробка помилки
                console.log(error); // Виведення помилки в консоль
                iziToast.error({ message: 'Sorry, there was an error processing your request.', position: 'center' }); // Відображення повідомлення про помилку
            })
            .finally(() => { // Після завершення пошуку, навіть у випадку помилки
                loader.style.display = 'none'; // Приховати елемент завантаження
            });
    } 
});


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
