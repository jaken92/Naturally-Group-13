/* translation */

const swedish = document.querySelectorAll('.se');
const english = document.querySelectorAll('.en');

const langButton = document.querySelector('.lang-btn');

langButton.addEventListener('click', langFunc);

function langFunc() {
  swedish.forEach((se) => se.classList.toggle('hide'));
  english.forEach((en) => en.classList.toggle('hide'));
}
