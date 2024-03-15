updateMoreButtonSelector()

function updateMoreButtonSelector() {
  document.querySelectorAll('.js-car-more-button')
    .forEach((button) => {
      button.addEventListener('click', () => {
        console.log(button.dataset.carId);
        pickedCarId = button.dataset.carId;
        localStorage.setItem('pickedCarId', button.dataset.carId);
    });
  });
}

//FILTERS
function generateNewHtml() {
  carsHTML = '';
  cars.forEach((car) => {
    if (filter === 'all') {
      generateHtml(car);
    } else if (filter === car.type) {
      generateHtml(car);
    }
    });
  document.querySelector('.js-cars-grid').innerHTML = carsHTML;
}
function getFilter(button) {
    if (button.id === 'b-0005') {
      return 'supercars';
    } else if (button.id === 'b-0004') {
      return 'personal';
    } else {
      return 'all';
    }
  }


let filter = 'all';
document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.js-filter-button').forEach((btn) => {
      btn.classList.remove('filter-button-clicked');
    });
    button.classList.add('filter-button-clicked');
    // filter = filterToTypeSyntax(button.innerText);
    filter = getFilter(button);
    generateNewHtml();
    updateMoreButtonSelector();
    translatePage(languageId);
    languageSelectorUpdate();
  });
});
