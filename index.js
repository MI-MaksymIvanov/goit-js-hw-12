import{a as b,S as w,i}from"./assets/vendor-CSTHH2rc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const f=(s,t,a)=>{const o={params:{key:"48264895-d0a6c310440d31e1e67da8433",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:a}};return b.get("https://pixabay.com/api/",o)};function y(s){return`<li class="gallery-card">
        <a href="${s.largeImageURL}" class="gallery-link">
          <img class="img" src="${s.webformatURL}" alt="${s.tags}" width="360" />
          <div class="info-wrapper">
            <div class="img-info">
              <p class="label">Likes</p>
              <p class="value">${s.likes}</p>
            </div>
            <div class="img-info">
              <p class="label">Views</p>
              <p class="value">${s.views}</p>
            </div>
            <div class="img-info">
              <p class="label">Comments</p>
              <p class="value">${s.comments}</p>
            </div>
            <div class="img-info">
              <p class="label">Downloads</p>
              <p class="value">${s.downloads}</p>
            </div>
          </div>
        </a>
      </li>`}const h=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),u=document.querySelector(".js-loader"),n=document.querySelector(".js-load-more-btn"),m=15,v=new w(".js-gallery a",{captionsData:"alt",captionDelay:250});let c=1,l="",g=0;const E=async s=>{try{if(s.preventDefault(),l=s.currentTarget.elements.user_query.value.trim(),l===""){i.show({title:"Error:",message:"Поле має бути заповнено!!",position:"topRight"});return}c=1,n.classList.add("is-hidden"),u.classList.remove("hidden");const{data:t}=await f(l,c,m);if(u.classList.add("hidden"),t.hits.length===0){i.show({title:"Error:",message:"За вашим запитом нічого не знайдено!",position:"topRight"}),d.innerHTML="",h.reset();return}g=Math.ceil(t.totalHits/m),g>1?(n.classList.remove("is-hidden"),n.addEventListener("click",L)):i.info({message:`Нажаль це всі результати за Вашим запитом: ${l}`,position:"topRight"});const a=t.hits.map(o=>y(o)).join("");d.innerHTML=a,h.reset(),v.refresh()}catch(t){u.classList.add("hidden"),i.show({title:"Error",message:`Помилка: ${t.message}`,position:"topRight"})}};h.addEventListener("submit",E);const L=async s=>{try{c++;const{data:t}=await f(l,c,m),a=t.hits.map(r=>y(r)).join("");d.insertAdjacentHTML("beforeend",a),v.refresh();const e=d.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),c===g&&(n.classList.add("is-hidden"),n.removeEventListener("click",L),i.info({message:"We are sorry, but you have reached the end of search results.",position:"topRight"}))}catch(t){i.show({title:"Error",message:`Помилка: ${t.message}`,position:"topRight"})}};
//# sourceMappingURL=index.js.map
