let currentLanguage = "en";

const translations = {
    en: {
        "Random": "Random",
        "West-East": "West-East",
        "North-South": "North-South",
        "Population": "Population",
        "Area": "Area",
        "Temperature": "Temperature"
    },
    de: {
        "Random": "Zufall",
        "West-East": "West-Ost",
        "North-South": "Nord-Süd",
        "Population": "Einwohner",
        "Area": "Fläche",
        "Temperature": "Temperatur"
    },
    fr: {
        "Random": "Aléatoire",
        "West-East": "Ouest-Est",
        "North-South": "Nord-Sud",
        "Population": "Population",
        "Area": "Surface",
        "Temperature": "Température"
    },
    es: {
        "Random": "Aleatorio",
        "West-East": "Oeste-Este",
        "North-South": "Norte-Sur",
        "Population": "Población",
        "Area": "Área",
        "Temperature": "Temperatura"
    },
    cs: {
        "Random": "Náhodne",
        "West-East": "Západ-Východ",
        "North-South": "Sever-Jih",
        "Population": "Pocet obyvatel",
        "Area": "Plocha",
        "Temperature": "Teplota"
    },
    sq: {
        "Random": "Random",
        "West-East": "Perëndim-Lindje",
        "North-South": "Veri-Jug",
        "Population": "Popullsia",
        "Area": "Sipërfaqe",
        "Temperature": "Temperatura"
    }
};

// Sprache wechseln + Flagge ändern
function setLanguage(lang, element) {
    currentLanguage = lang;

    const flag = element.querySelector("svg").outerHTML;
    document.getElementById("currentFlag").innerHTML = flag;

    document.getElementById("languageMenu").style.display = "none";

    updateMenuTexts();
}

// Menütexte aktualisieren
function updateMenuTexts() {
    document.querySelectorAll(".menu-button").forEach(button => {
        const key = button.getAttribute("data-key");
        button.querySelector("span").textContent = translations[currentLanguage][key];
    });
}

// Menü anzeigen/ausblenden
function toggleLanguageMenu() {
    const menu = document.getElementById("languageMenu");
    const style = window.getComputedStyle(menu).display;
    menu.style.display = style === "none" ? "flex" : "none";
}

// Button klick ? game.html
function goToGame(button) {
    const key = button.getAttribute("data-key");
    const mode = key; // immer Englisch
    const spiel = document.getElementById("spielToggle").checked;
    const koop = document.getElementById("koopToggle").checked;

    const url = `game.html?mode=${encodeURIComponent(mode)}&Spiel=${spiel}&Koop=${koop}&Lang=${currentLanguage}`;
    window.location.href = url;
}

// Klick außerhalb schließt Menü
window.addEventListener('click', function(e) {
    const menu = document.getElementById("languageMenu");
    const button = document.getElementById("currentFlag");
    if (!menu.contains(e.target) && !button.contains(e.target)) {
        menu.style.display = "none";
    }
});
