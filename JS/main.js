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



$(document).ready(function(){

  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,

    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        infinite: true,
        autoplay: true,

      }
    },  {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }]
  });

});


let para = document.querySelector('#para');
let b = document.querySelector('#b');

b.addEventListener('click', function(){
  para.classList.toggle('show');
})
let para2 = document.querySelector('#para2');
let c = document.querySelector('#c');

c.addEventListener('click', function(){
  para2.classList.toggle('show2');
})
let para3 = document.querySelector('#para3');
let d = document.querySelector('#d');

d.addEventListener('click', function(){
  para3.classList.toggle('show3');
})









