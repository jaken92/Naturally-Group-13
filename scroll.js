const items = document.querySelectorAll('.item-container');
const scrollMenu = document.querySelector('.scrollmenu');

scrollMenu.addEventListener('scroll', function () {
  const scrollLeft = scrollMenu.scrollLeft;
  items.forEach(function(item, i) {
    if(item.offsetLeft < scrollLeft + scrollMenu.Width/2 && scrollLeft < item.offsetLeft + scrollMenu.Width/2){
        console.log(i);
    }
  })

});

/*
const itemOne = document.querySelector('.item-container-one');
const itemTwo = document.querySelector('.item-container-two');
const scrollMenu = document.querySelector('.scrollmenu');

scrollMenu.addEventListener('scroll', function () {
  console.log(scrollMenu.scrollLeft);
});
*/
