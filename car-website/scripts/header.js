document.querySelectorAll('.js-header-button').forEach((button) => {
  button.addEventListener('click', () => {
      // Usuń klasę 'clicked' ze wszystkich przycisków
      document.querySelectorAll('.js-header-button').forEach((btn) => {
          btn.classList.remove('header-button-clicked');
      });
      // Dodaj klasę 'clicked' tylko do klikniętego przycisku
      button.classList.add('header-button-clicked');
  });
});