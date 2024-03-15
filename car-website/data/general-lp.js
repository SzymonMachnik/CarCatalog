const page = 'landingPage';
let carsHTML = '';
cars.forEach((car) => {
  generateHtml(car);
  });
document.querySelector('.js-cars-grid').innerHTML = carsHTML;

function generateHtml (car) {
  const {image, seats, engine, transmission, powerEngine, doors, fuelConsumption, id} = car

  carsHTML += `
    <div class="car-layout ${car.highlight ? 'car-layout-new' : ''}">
      <div class="inner-box">
        <img class="car-photo" src="${image}">
        <div class="car-info-box">
          <div class="car-info">
            <img src="images/icons/gasoline-pump.png" class="icon">
            ${engine}
          </div>
          <div class="car-info">
            <img src="images/icons/user.png" class="icon">
            <div id="t-0010">
              Seats: ${seats}
            </div>
          </div>
          <div class="car-info">
            <img src="images/icons/engine.png" class="icon">
            ${transmission}
          </div>
          <div class="car-info">
            <img src="images/icons/power.png" class="icon">
            ${powerEngine} KM
          </div>
          <div class="car-info">
            <img src="images/icons/car-door.png" class="icon">
            <div id="t-0011">
              Doors: ${doors}
            </div>
          </div>
          <div class="car-info">
            <img src="images/icons/speedometer.png" class="icon">
            ${fuelConsumption}
          </div>
        </div>
        <div class="car-button-box" >
          <a class="car-more-button js-car-more-button" 
          href="code/car-page.html" 
          data-car-id="${id}" id="t-0012">MORE</a>
        </div>
      </div>
    </div>`
}