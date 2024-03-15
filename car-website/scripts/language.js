let language = localStorage.getItem('language') || 'English';
// let language = 'English';
// localStorage.setItem('English', language)
let languageId = 0;
let text;
function updateText() {
  const screenWidth = window.innerWidth;
  text = `${flagsSrc[languageId]}`;

  if (screenWidth >= 600) {
    text += `<div style="margin-left: 6px;">${language}</div>`;
  }
  console.log(screenWidth)
}
window.onload = updateText();
window.onresize = updateText();

languageId = setLanguageId();
translatePage(languageId);
languageSelectorUpdate();

document.querySelectorAll('.js-language-option').forEach(button => {
  button.addEventListener('click', () => {
    changeLanguage(button);
  })
})

function changeLanguage(button) {
  language = button.innerText.trim();
  localStorage.setItem('language', language);
  languageId = setLanguageId();
  translatePage(languageId);
  languageSelectorUpdate();
}


function languageSelectorUpdate() {
  updateText();
  document.querySelector('.js-language-button').innerHTML = 
  `${text}
  <div class="language-options-layout">
    <div class="language-option js-language-option">
      <img
      src="https://flagcdn.com/w20/gb-eng.png"
      srcset="https://flagcdn.com/w40/gb-eng.png 2x"
      width="20"
      alt="England">
      <div class="flag-text">English</div>
    </div>
    <div class="language-option js-language-option">
      <img
      src="https://flagcdn.com/w20/fr.png"
      srcset="https://flagcdn.com/w40/fr.png 2x"
      width="20"
      alt="France">
      <div class="flag-text">Français</div>
    </div>
    <div class="language-option js-language-option">
      <img
      src="https://flagcdn.com/w20/ru.png"
      srcset="https://flagcdn.com/w40/ru.png 2x"
      width="20"
      alt="Russia">
      <div class="flag-text">Русский</div>
    </div>
    <div class="language-option js-language-option">
      <img
      src="https://flagcdn.com/w20/pl.png"
      srcset="https://flagcdn.com/w40/pl.png 2x"
      width="20"
      alt="Poland">
      <div class="flag-text">Polski</div>
    </div>
  </div>`;
  console.log(document.querySelector('.js-language-button').innerHTML);
  document.querySelectorAll('.js-language-option').forEach(button => {
    button.addEventListener('click', () => {
      changeLanguage(button);
      localStorage.setItem('language', language);
    })
  })
}

function setLanguageId() {
  if (language === 'Français') {
    return 1
  } else if (language === 'English') {
    return 0
  } else if (language === 'Polski') {
    return 2
  } else if (language === 'Русский') {
    return 3
  }
}

function zamienNaMaleZaWyjatkiemPierwszej(text) {
  if (text.length === 0) return ''; // Zabezpieczenie przed pustym wejściem

  // Pobierz pierwszy znak i zamień na wielką literę
  let result = text.charAt(0).toUpperCase();

  // Iteruj po pozostałych znakach, zamieniając je na małe litery
  for (let i = 1; i < text.length; i++) {
      result += text.charAt(i).toLowerCase();
  }

  return result;
}

function translatePage(languageId) {
  document.getElementById('b-0006').innerText = language;
  //BUTTONS ON HEADER
  document.getElementById('b-0001').innerText = languages[languageId].fleet;
  document.getElementById('b-0002').innerText = languages[languageId].pricing;
  if (page === 'landingPage') {
    let elements;
    //TITLE
    document.getElementById('t-0001').innerText = languages[languageId].titleChooseACar;
    //FILTRES
    document.getElementById('b-0003').innerText = languages[languageId].all;
    document.getElementById('b-0004').innerText = languages[languageId].personal;
    document.getElementById('b-0005').innerText = languages[languageId].superCars;


    //CAR BOX LAYOUT INFO
    elements = document.querySelectorAll('#t-0010');
    elements.forEach(element => {
      var text = element.textContent;
      // Zastąp "Seats" na "Miejsca"
      text = text.replace(/[^:]+:/, `${languages[languageId].seats}:`);
      // Ustaw nowy tekst w elemencie
      element.textContent = text;
    });

    elements = document.querySelectorAll('#t-0011');
    elements.forEach(element => {
      var text = element.textContent;
      text = text.replace(/[^:]+:/, `${languages[languageId].doors}:`);
      element.innerText = text;
    });

    elements = document.querySelectorAll('#t-0012');
    elements.forEach(element => {
      element.innerText = languages[languageId].more;
    });

  } else if (page === 'pricingPage') {
    document.getElementById('t-0002').innerText = languages[languageId].titlePricing;
    document.getElementById('b-0007').innerText = zamienNaMaleZaWyjatkiemPierwszej(languages[languageId].personal);
    document.getElementById('b-0008').innerText = zamienNaMaleZaWyjatkiemPierwszej(languages[languageId].superCars);
    document.getElementById('t-0003').innerText = languages[languageId].tableH1;
    document.getElementById('t-0004').innerText = languages[languageId].tableH2;
    document.getElementById('t-0005').innerText = languages[languageId].tableH3;
    //
    document.getElementById('t-0007').innerText = languages[languageId].startingFee;
    document.getElementById('t-0008').innerText = languages[languageId].oneMinuteStopoverOrReservation;
    document.getElementById('t-0009').innerText = languages[languageId].returningTheCarInDifferentZone;
    
  } else if (page === 'carPage') {
    document.getElementById('t-0015').innerText = languages[languageId].titleOurCars;
    document.getElementById('t-0016').innerText = languages[languageId].titleGoBackToTheFullList;
    document.getElementById('t-0013').innerText = document.getElementById('t-0013').innerText.replace(/[^:]+:/, `${languages[languageId].seats}:`);
    document.getElementById('t-0014').innerText = document.getElementById('t-0014').innerText.replace(/[^:]+:/, `${languages[languageId].doors}:`);
    if (languageId === 0) {
      document.getElementById('t-0017').innerHTML = `The ${picekdCarObject.name} features a ${picekdCarObject.powerEngine} horsepower engine, with a fuel consumption of ${picekdCarObject.fuelConsumption}. Can accommodate up to ${picekdCarObject.seats} people, making it perfect for family outings. It comes with a ${picekdCarObject.transmission} transmission. It is filled with modern technology, which will undoubtedly enhance your driving experience.`
    } else if (languageId === 1) {
      document.getElementById('t-0017').innerHTML = `Le ${picekdCarObject.name} est équipé d'un moteur de ${picekdCarObject.powerEngine} chevaux, avec une consommation de carburant de ${picekdCarObject.fuelConsumption}. Peut accueillir jusqu'à ${picekdCarObject.seats} personnes, ce qui le rend parfait pour les sorties en famille. Il est équipé d'une transmission ${picekdCarObject.transmission}. Il est rempli de technologies modernes, ce qui améliorera sans aucun doute votre expérience de conduite.`
    } else if (languageId === 2) {
      document.getElementById('t-0017').innerHTML = `${picekdCarObject.name} posiada silnik o mocy ${picekdCarObject.powerEngine} koni mechanicznych, o spalaniu ${picekdCarObject.fuelConsumption} na 100 kilometrów. Pomieści do ${picekdCarObject.seats} osób, co czyni go idealnym na rodzinne wypady. Jest wyposażony w skrzynię biegów ${picekdCarObject.transmission}. Posiada nowoczesną technologię, która z pewnością poprawi Twoje doświadczenia z jazdy.`
    } else if (languageId === 3) {
      document.getElementById('t-0017').innerHTML = `${picekdCarObject.name} оснащен двигателем мощностью ${picekdCarObject.powerEngine} лошадиных сил, с расходом топлива ${picekdCarObject.fuelConsumption}. Вмещает до ${picekdCarObject.seats} человек, что делает его идеальным для семейных поездок. Он оснащен ${picekdCarObject.transmission} коробкой передач. Наполнен современными технологиями, которые безусловно улучшат ваш опыт вождения.`;
    }
  }
}