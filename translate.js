const se = document.querySelector('.se');
const en = document.querySelector('.en');

const langButton = document.querySelector('.lang-btn');

langButton.addEventListener('click', langFunc);

function langFunc() {
  se.classList.toggle('hide');
  en.classList.toggle('hide');
}
