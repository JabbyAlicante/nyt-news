function e(){let e=document.getElementById("curr-time"),t=new Date;e.innerHTML=t.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),e.setAttribute("datetime",t.toISOString())}e(),setInterval(e,1e3),document.querySelectorAll("header ul li a").forEach(e=>{e.addEventListener("click",()=>{document.getElementById("chk1").checked=!1})});const t=document.querySelector(".top-arts"),r=async()=>{try{let e=await fetch("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=nDxfsOEmrg52Bru3o9MXHqt6u9YShWgK");return await e.json()}catch(e){return alert("An error occurred",e),[]}},a=e=>{t.innerHTML="",(e.results||[]).forEach(e=>{let r=document.createElement("li");r.setAttribute("class","article");let a=e.multimedia&&e.multimedia.length>0?e.multimedia[0].url:"default-image-url.jpg";r.innerHTML=`
        <h2>${e.title}</h2>
        <img src="${a}" alt="${e.title}"/>
        <p>Author: ${e.byline||"Unknown"}</p>
        <p>Description: ${e.abstract||"No description available"}</p>
        <a href="${e.url}" target="_blank">About more</a>
      `,t.appendChild(r)})};(async()=>{let e=await r();console.log(e),a(e)})();const i=document.querySelector(".hard-cover-books"),n=async()=>{try{let e=await fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=nDxfsOEmrg52Bru3o9MXHqt6u9YShWgK");return await e.json()}catch(e){return alert("An error occurred",e),[]}},l=e=>{i.innerHTML="",(e.results?.books||[]).forEach(e=>{let t=document.createElement("li");t.setAttribute("class","article"),t.innerHTML=`
        <h2>${e.rank}</h2>
        <h2>${e.title}</h2>
        <img src="${e.book_image}">
        <p>Author: ${e.author}</p>
        <p>Publisher: ${e.publisher}</p>
        <p>Description: ${e.description}</p>
        <a href="${e.amazon_product_url}" target="_blank">About more</a>
      `,i.appendChild(t)})};(async()=>{let e=await n();console.log(e),l(e)})();const s=document.querySelector(".swiper-wrapper"),c=async()=>{try{let e=await fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=nDxfsOEmrg52Bru3o9MXHqt6u9YShWgK");return await e.json()}catch(e){return alert("An error occurred",e),[]}},o=e=>{s.innerHTML="",(e.results||[]).forEach(e=>{let t=document.createElement("li");t.setAttribute("class","card-item swiper-slide");let r=e.multimedia&&e.multimedia.length>0?e.multimedia[0].url:"default-image-url.jpg";t.innerHTML=`<a href="${e.url}" class="card-link" target="_blank">
          <img src="${r}" alt="${e.title}" class="card-image" />
          <p class="badge">${e?.section}</p>
          <h1 class="card-title">${e?.title}</h1>
          <p class="data">${e?.byline}</p>
          <p class="data">Published: ${e?.published_date}</p>
          
          <button class="card-button fa-solid fa-arrow-right"></button>
        </a>`,s.appendChild(t)})};(async()=>{o(await c()),new Swiper(".card-wrapper",{loop:!0,spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3}}})})();
//# sourceMappingURL=index.7a862e9c.js.map
