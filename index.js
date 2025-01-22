import{i as l,S as u}from"./assets/vendor-B07T6_gy.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function p(t){const a=new URLSearchParams({key:"48264895-d0a6c310440d31e1e67da8433",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:21});return fetch(`https://pixabay.com/api/?${a}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function m(t){return`<li class="gallery-card">
        <a href="${t.largeImageURL}" class="gallery-link">
          <img class="img" src="${t.webformatURL}" alt="${t.tags}" width="360" />
          <div class="info-wrapper">
            <div class="img-info">
              <p class="label">Likes</p>
              <p class="value">${t.likes}</p>
            </div>
            <div class="img-info">
              <p class="label">Views</p>
              <p class="value">${t.views}</p>
            </div>
            <div class="img-info">
              <p class="label">Comments</p>
              <p class="value">${t.comments}</p>
            </div>
            <div class="img-info">
              <p class="label">Downloads</p>
              <p class="value">${t.downloads}</p>
            </div>
          </div>
        </a>
      </li>`}const n=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),c=document.querySelector(".js-loader"),h=t=>{t.preventDefault();const a=t.currentTarget.elements.user_query.value.trim();if(a===""){l.show({title:"Error:",message:"Поле має бути заповнено!!",position:"topRight"});return}c.classList.remove("hidden"),p(a).then(s=>{if(c.classList.add("hidden"),s.hits.length===0){l.show({title:"Error:",message:"За вашим запитом нічого не знайдено!",position:"topRight"}),d.innerHTML="",n.reset();return}const i=s.hits.map(r=>m(r)).join("");d.innerHTML=i,n.reset(),new u(".js-gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(s=>{c.classList.add("hidden"),l.show({title:"Error",message:`Помилка: ${s.message}`,position:"topRight"})})};n.addEventListener("submit",h);
//# sourceMappingURL=index.js.map
