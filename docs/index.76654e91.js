const t=document.getElementById("home-content-data"),e=async()=>{try{let t=await fetch("/topstories_home.json");return await t.json()}catch(t){return alert("An error occured",t),[]}},a=e=>{t.innerHTML="",(e.results||[]).forEach(e=>{let a=document.createElement("div");a.setAttribute("class","article");let r=e.multimedia&&e.multimedia.length>0?e.multimedia[0].url:"default-image-url.jpg";a.innerHTML=`
      <h2>${e?.title}</h2>
      ${e?.abstract}
      <a href="${e.url}" target="_blank">Read more</a>
      <img src="${r}" alt="${e.title}"> 
    `,t.appendChild(a)})};(async()=>{a(await e())})();
//# sourceMappingURL=index.76654e91.js.map
