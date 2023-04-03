let menu = document.querySelector('.hamburger');
let hd   = document.querySelector('header');
let switcch = document.querySelector("#light");
let bd = document.querySelector("body");


menu.addEventListener('click',function(){
  hd.classList.toggle('open');
})

switcch.addEventListener('click',function(){
  bd.classList.toggle('On');
})












