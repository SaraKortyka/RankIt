/* ================= GAME PAGE SCRIPT ================= */

/* ================= URL PARAMETER ================= */
const params = new URLSearchParams(window.location.search);

const lang = params.get("lang") || "en";
const mode = params.get("mode") || "Random";
const koop = params.get("koop") === "true";
const physical = params.get("physical") === "true";
const continent = params.get("continent") || "World";

/* Sprache setzen (wichtig: kommt aus translations.js) */
if (typeof currentLang !== "undefined") {
    currentLang = lang;
}


/* ================= DOM READY ================= */
document.addEventListener("DOMContentLoaded", () => {

    // Seite übersetzen
    if (typeof translatePage === "function") {
        translatePage();
    }

    // Sprachmenü bauen
    if (typeof buildLangMenu === "function") {
        buildLangMenu();
    }

});


/* ================= INPUT LOGIK ================= */

function addInput() {

    const plusButton = document.querySelector(".plus-button");
    const menu = document.querySelector(".menu");

    if (!plusButton || !menu) return;

    const div = document.createElement("div");
    div.className = "menu-item input-card";
    div.innerHTML = `<input type="number" class="card-input">`;

    // Vor dem Plus-Button einfügen
    menu.insertBefore(div, plusButton);
}


/* ================= NEXT BUTTON ================= */

function nextStep() {

    const values = [...document.querySelectorAll(".card-input")]
        .map(input => input.value.trim())
        .filter(value => value !== "");

    console.log("Selected card numbers:", values);

    // Hier kommt später deine Spiellogik
}