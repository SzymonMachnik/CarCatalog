let tableOption = 'personal'
generateTableHtml(tableOption);

document.querySelectorAll('.table-option-button').forEach((button) => {
  button.addEventListener('click', () => {
    console.log(tableOption);
    document.querySelectorAll('.js-table-option-button').forEach((btn) => {
      btn.classList.remove('table-option-button-clicked');
    });
    button.classList.add('table-option-button-clicked');
    generateTableHtml();
  });
});
function generateTableHtml(tableOption) {
    if (tableOption === 'super cars' ) {
      document.querySelector('.js-table').innerHTML = `          
      <div class="table-header remove-border"></div>
      <div class="table-header">00:00-05:59</div>
      <div class="table-header">6:00-11:59</div>
      <div class="table-header">12:00-20:59</div>
      <div class="table-header">21:00-23:59</div>
      <div class="table-inner-header" id="t-0003">${languages[languageId].tableH1}</div>
      <div class="table-inner">3,99</div>
      <div class="table-inner">4,99</div>
      <div class="table-inner">6,99</div>
      <div class="table-inner">4,99</div>
      <div class="table-inner-header" id="t-0004">${languages[languageId].tableH2}</div>
      <div class="table-inner">1,99</div>
      <div class="table-inner">2,99</div>
      <div class="table-inner">3,99</div>
      <div class="table-inner">2,99</div>
      <div class="table-inner-header table-inner-header-bottom" id="t-0005">${languages[languageId].tableH3}</div>
      <div class="table-inner table-inner-bottom">0,19</div>
      <div class="table-inner table-inner-bottom">0,49</div>
      <div class="table-inner table-inner-bottom">0,79</div>
      <div class="table-inner table-inner-bottom">0,49</div>`;

      document.querySelector('.js-bottom-bar')
        .innerText = `${languages[languageId].tableBottomHeader} 399 PLN/24h`;

      document.querySelector('.js-bottom-info-cost-fee')
        .innerText = '19,99';
      document.querySelector('.js-bottom-info-cost-booking')
        .innerText = '9,99';
      document.querySelector('.js-bottom-info-cost-returning')
        .innerText = '199,99';
    } else if (tableOption === 'personal'){
      document.querySelector('.js-table').innerHTML = ` 
      <div class="table-header remove-border"></div>
      <div class="table-header">00:00-05:59</div>
      <div class="table-header">6:00-11:59</div>
      <div class="table-header">12:00-20:59</div>
      <div class="table-header">21:00-23:59</div>
      <div class="table-inner-header" id="t-0003">${languages[languageId].tableH1}</div>
      <div class="table-inner">1,99</div>
      <div class="table-inner">2,49</div>
      <div class="table-inner">3,49</div>
      <div class="table-inner">2,49</div>
      <div class="table-inner-header" id="t-0004">${languages[languageId].tableH2}</div>
      <div class="table-inner">0,99</div>
      <div class="table-inner">1,49</div>
      <div class="table-inner">1,99</div>
      <div class="table-inner">1,49</div>
      <div class="table-inner-header table-inner-header-bottom" id="t-0005">${languages[languageId].tableH3}</div>
      <div class="table-inner table-inner-bottom">0,09</div>
      <div class="table-inner table-inner-bottom">0,25</div>
      <div class="table-inner table-inner-bottom">0,39</div>
      <div class="table-inner table-inner-bottom">0,25</div>`;

      document.querySelector('.js-bottom-bar')
        .innerText = `${languages[languageId].tableBottomHeader} 199 PLN/24h`;
        
      document.querySelector('.js-bottom-info-cost-fee')
        .innerText = '5,99';
      document.querySelector('.js-bottom-info-cost-booking')
        .innerText = '0,79';
      document.querySelector('.js-bottom-info-cost-returning')
        .innerText = '99,99';
    }

}
function filterToTypeSyntax(text) {
  return text.toLowerCase().replace(/\s/g, ''); //lower letter, remove spaces
}