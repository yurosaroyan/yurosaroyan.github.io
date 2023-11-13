const DEFAULT_LANGUAGE = 'en';
const STORAGE_KEY = 'language';

const translations = {
    'en': {
        language: 'En'
    },
    'ru': {
        language: 'Ru'
    }
};

let currentLanguage = getLanguagePreference();


function changeLanguage() {
    currentLanguage = (currentLanguage === 'en') ? 'ru' : 'en';
    updateContent();
    saveLanguagePreference();
}

function updateContent() {
    const contentElement = document.getElementById('languageButton lang');
    if (contentElement) {
        contentElement.textContent = translations[currentLanguage].language;
    }
}


function saveLanguagePreference() {
    localStorage.setItem(STORAGE_KEY, currentLanguage);
}

function getLanguagePreference() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;
}

function setupEventListeners() {
    const languageButton = document.getElementById('languageButton lang');
    if (languageButton) {
        languageButton.addEventListener('click', changeLanguage);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    updateContent();
    setupEventListeners();
});


$(document).ready(function () {


    let openMenu = false;
    $(".P-open-menu").click(function () {
        openMenu = true;
        if (openMenu) {
            $('body').css('overflow-y', 'hidden');
            console.log('asd')
            $(this).addClass("active");
            $(".P-close-menu").addClass("active");

            $(".P-menu-mobile").addClass("active");
        }


    });

    $(".P-close-menu").click(function () {
        openMenu = false;
        if (!openMenu) {
            $('body').css('overflow-y', 'auto');

            console.log('asd')
            $(this).removeClass("active");
            $(".P-open-menu").removeClass("active");
            $(".P-menu-mobile").removeClass("active");
        }


    });


});
