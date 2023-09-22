
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('hovered');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('hovered');
  });
});

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    card.classList.remove('hovered');
  });
});
