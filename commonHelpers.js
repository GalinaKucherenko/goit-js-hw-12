import{a as w,i as l,S as L}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();async function b(t,s,i){try{return(await w.get(`https://pixabay.com/api/?key=43779125-040e3030fad6a4afa34a77542&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=${i}`)).data}catch(r){throw console.error("Error fetching pictures:",r),r}}function S(t,s,i){const r=s.hits.map(e=>`<li class="gallery-item">
                    <a class="gallery-link" href="${e.largeImageURL}">
                        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
                    </a>
                    <ul class="info">
                        <li class="info-list">Likes: <span>${e.likes}</span></li>
                        <li class="info-list">Views: <span>${e.views}</span></li>
                        <li class="info-list">Comments: <span>${e.comments}</span></li>
                        <li class="info-list">Downloads: <span>${e.downloads}</span></li>
                    </ul>
                </li>`).join("");t.insertAdjacentHTML("beforeend",r),i.refresh()}const q=document.querySelector(".form"),$=document.querySelector('input[name="text"]'),m=document.querySelector(".gallery"),p=document.querySelector(".loader"),y=document.querySelector(".load-more");let d="",n=1;const c=15;let u=0;q.addEventListener("submit",async t=>{t.preventDefault(),d=$.value.trim(),d!==""&&(n=1,m.innerHTML="",f(),g(),await h())});y.addEventListener("click",async()=>{n+=1,g(),await h()});async function h(){try{const t=await b(d,n,c);u=t.totalHits,t.hits.length===0&&n===1?(l.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}),f()):(S(m,t,M),n*c<u?v():(f(),n*c>=u&&n>1&&l.error({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"})),O())}catch(t){console.log(t),l.error({message:"Sorry, there was an error processing your request.",position:"center"})}finally{P()}}function v(){y.style.display="block"}function f(){y.style.display="none"}function g(){p.style.display="block"}function P(){p.style.display="none"}const M=new L(".gallery a",{captionsData:"alt",captionDelay:250});function O(){const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
