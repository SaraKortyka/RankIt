

/* ================= TRANSLATIONS ================= */
const translations = {
  de:{Random:"Zufall",WestEast:"West-Ost",NorthSouth:"Nord-Süd",Population:"Bevölkerung",Area:"Fläche",Temperature:"Temperatur",Physical:"Digitale Version",Koop:"Koop-Modus"},
  en:{Random:"Random",WestEast:"West-East",NorthSouth:"North-South",Population:"Population",Area:"Area",Temperature:"Temperature",Physical:"Digital Version",Koop:"Koop Mode"},
  fr:{Random:"Aléatoire",WestEast:"Ouest-Est",NorthSouth:"Nord-Sud",Population:"Population",Area:"Superficie",Temperature:"Température",Physical:"Version numérique",Koop:"Mode coopératif"},
  es:{Random:"Aleatorio",WestEast:"Oeste-Este",NorthSouth:"Norte-Sur",Population:"Población",Area:"Área",Temperature:"Temperatura",Physical:"Versión digital",Koop:"Modo cooperativo"},
  cs:{Random:"Náhodné",WestEast:"Západ-Východ",NorthSouth:"Sever-Jih",Population:"Populace",Area:"Rozloha",Temperature:"Teplota",Physical:"Digitální verze",Koop:"Kooperativní režim"},
  sq:{Random:"Rastësor",WestEast:"Perëndim-Lindje",NorthSouth:"Veri-Jug",Population:"Popullsia",Area:"Sipërfaqe",Temperature:"Temperatura",Physical:"Version digjitale",Koop:"Modalitet bashkëpunues"}
};


let currentLang="de";

/* ================= FLAGS ================= */
const flags={
de:`<svg viewBox="0 0 3 2" class="flag"><rect width="3" height="2" fill="#000"/><rect width="3" height="1.33" y="0.67" fill="#dd0000"/><rect width="3" height="0.67" y="1.33" fill="#ffce00"/></svg>`,
en:`<svg viewBox="0 0 60 30" class="flag"><rect width="60" height="30" fill="#012169"/><polygon points="0,0 25,15 0,30" fill="white"/><polygon points="60,0 35,15 60,30" fill="white"/><rect x="25" width="10" height="30" fill="white"/><rect y="10" width="60" height="10" fill="white"/><rect x="27" width="6" height="30" fill="#C8102E"/><rect y="12" width="60" height="6" fill="#C8102E"/></svg>`,
fr:`<svg viewBox="0 0 3 2" class="flag"><rect width="1" height="2" fill="#0055A4"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#EF4135"/></svg>`,
es:`<svg viewBox="0 0 3 2" class="flag"><rect width="3" height="2" fill="#AA151B"/><rect y="0.5" width="3" height="1" fill="#F1BF00"/></svg>`,
cs:`<svg viewBox="0 0 3 2" class="flag"><rect width="3" height="1" fill="#fff"/><rect y="1" width="3" height="1" fill="#d7141a"/><polygon points="0,0 1.5,1 0,2" fill="#11457e"/></svg>`,
sq:`<svg viewBox="0 0 3 2" class="flag"><rect width="3" height="2" fill="#E41E20"/><circle cx="1.5" cy="1" r="0.4" fill="black"/></svg>`
};

/* ================= ICONS ================= */
const icons={
Random:`<svg viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9 9a3 3 0 1 1 4 3c-1 1-1 2-1 2"/><circle cx="12" cy="17" r="1"/></svg>`,
WestEast:`<svg viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12 Q12 4 22 12"/></svg>`,
NorthSouth:`<svg viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2 Q4 12 12 22"/></svg>`,
Population:`<svg viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2"><circle cx="7" cy="8" r="3"/><circle cx="17" cy="8" r="3"/><path d="M2 20c0-3 4-5 6-5s6 2 6 5"/><path d="M10 20c0-3 4-5 6-5s6 2 6 5"/></svg>`,
Area:`<svg viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2"><rect x="4" y="4" width="16" height="16"/></svg>`,
Temperature:`<svg viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2"><path d="M10 2v12a4 4 0 1 0 4 0V2"/><circle cx="12" cy="18" r="2"/></svg>`
};

/* ================= FUNCTIONS ================= */

function buildMenu(){
    const menu=document.getElementById("menu");
    menu.innerHTML="";
    Object.keys(icons).forEach((key,i)=>{
        const div=document.createElement("div");
        div.className="menu-item"+(i===0?" quick":"");
        div.innerHTML=icons[key]+`<div class="menu-text">${translations[currentLang][key]}</div>`;
        div.onclick=()=>goToGame(key);
        menu.appendChild(div);
    });
}

function updateToggles(){
    document.getElementById("physicalText").textContent = translations[currentLang].Physical;
    document.getElementById("koopText").textContent = translations[currentLang].Koop;
}


function buildLangMenu(){
    const dd=document.getElementById("langDropdown");
    dd.innerHTML="";
    Object.keys(flags).forEach(code=>{
        const row=document.createElement("div");
        row.innerHTML=flags[code]+code.toUpperCase();
        row.onclick=()=>{
            currentLang=code;
            document.getElementById("langBtn").innerHTML=flags[code];
            dd.style.display="none";
            buildMenu();
            updateToggles();
        };
        dd.appendChild(row);
    });
}

document.getElementById("langBtn").onclick=()=>{
    const dd=document.getElementById("langDropdown");
    dd.style.display=dd.style.display==="flex"?"none":"flex";
};

/* Toggle Klick */
const physicalToggle = document.getElementById("physicalToggle");
const koopToggle = document.getElementById("koopToggle");
physicalToggle.onclick = () => physicalToggle.classList.toggle("active");
koopToggle.onclick = () => koopToggle.classList.toggle("active");

function goToGame(key){
    const physical=document.getElementById("physicalToggle").classList.contains("active");
    const koop=document.getElementById("koopToggle").classList.contains("active");
    const paramText=key.replace(/\s+/g,'').replace(/[^\w]/g,'');
    const url=`game.html?lang=${currentLang}&mode=${paramText}&koop=${koop}&physical=${physical}`;
    window.location.href=url;
}

/* INIT */
document.getElementById("langBtn").innerHTML=flags[currentLang];
buildMenu();
buildLangMenu();
updateToggles();