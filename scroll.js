//inspo: https://www.youtube.com/watch?v=FDCiM6JoPao&t=47s
// https://stackoverflow.com/questions/2481350/how-can-i-get-the-scrollbar-position-with-javascript

const items = document.querySelectorAll('.items');
const scrollMenu = document.querySelector('.scrollmenu');
const indicators = document.querySelector('.indicators');

//removing the class .selected from all li elements when called.
function removeSelected() {
  for (i = 0; i < indicators.children.length; i++) {
    indicators.children[i].classList.remove('selected');
  }
}

//adding eventlistener for the scrollMenu window.
scrollMenu.addEventListener('scroll', function () {
  const scrollLeft = scrollMenu.scrollLeft;
  //for each item, if their left side pos is less than half of the scrollmenus width away from the left side, the .selected class is removed from all li elements and added only to the item meeting those conditions.
  items.forEach(function (item, i) {
    if (
      //offsetLeft property returns the left position (in pixels) relative to the parent.
      //offsetWidth returns the layout width of an element as an integer.
      //scrollLeft gets the number of pixels that an element's content is scrolled from its left edge.
      item.offsetLeft <
      scrollLeft + scrollMenu.offsetWidth / 2
    ) {
      removeSelected();
      indicators.children[i].classList.add('selected');
    }
  });
});

/*

const itemOne = document.querySelector('.item-container-one');
const itemTwo = document.querySelector('.item-container-two');
const scrollMenu = document.querySelector('.scrollmenu');


working version

scrollMenu.addEventListener('scroll', function () {
  const scrollLeft = scrollMenu.scrollLeft;
  items.forEach(function (item, i) {
    if (
        //om item.offsetLeft är mindre 
      item.offsetLeft < scrollLeft + scrollMenu.offsetWidth / 2 &&
      scrollLeft < item.offsetLeft + scrollMenu.offsetWidth / 2
    ) {
      remove();
      indicators.children[i].classList.add('selected');
    }
  });
});
*/
