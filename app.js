const cards = document.querySelectorAll('.card');

cards.forEach(function (card) {
  const btn = card.querySelector('.btn-quest');

  btn.addEventListener('click', function () {
    cards.forEach(function (element) {
      if (element !== card) {
        element.classList.remove('open-text');
      }
    });
    card.classList.toggle('open-text');
  });
});
