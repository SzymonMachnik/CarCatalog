const page = 'carPage';
const pickedCarId = localStorage.getItem('pickedCarId');
const picekdCarObject = cars.find(object => object.id === pickedCarId);
const {image, seats, engine, transmission, powerEngine, doors, fuelConsumption, id} = picekdCarObject

const carPageDescPhotosHtml = `
  <div class="car-grid">
    <div class="car-layout">
      <div class="car-photo-box">
        <img class="car-photo" src="../${image}">
      </div>
      
      <div class="car-info-box">
        <div class="car-info">
          <img src="../images/icons/gasoline-pump.png" class="icon">
          ${engine}
        </div>
        <div class="car-info">
          <img src="../images/icons/user.png" class="icon">
          <div id="t-0013">
            Seats: ${seats}
          </div>
        </div>
        <div class="car-info">
          <img src="../images/icons/car-engine.png" class="icon">
          ${transmission}
        </div>
        <div class="car-info">
          <img src="../images/icons/power.png" class="icon">
          ${powerEngine} KM
        </div>
        <div class="car-info">
          <img src="../images/icons/car-door.png" class="icon">
          <div id="t-0014">
            Doors: ${doors}
          </div>
        </div>
        <div class="car-info">
          <img src="../images/icons/speedometer.png" class="icon">
          ${fuelConsumption}
        </div>
        </div>
    </div>
    <div class="car-desc" id="t-0017">
      
    </div>
  </div>
  <div class="car-preview-container">
    <div class="car-preview-grid-item">
      <img src="../${image}" class="car-preview-img">
    </div>
  </div>`
document.querySelector('.js-car-desc-photos').innerHTML = carPageDescPhotosHtml;