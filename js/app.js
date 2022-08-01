let first = document.getElementById('first');
let second = document.getElementById('sec');
const body = document.querySelector('body');
let but1 = document.getElementById('but1');
let but2 = document.getElementById('but2');
let but3 = document.getElementById('but3');
let but4 = document.getElementById('but4');
let toggle = false; 
let toggle1 = false; 
let toggle2 = false; 
let toggle3 = false; 



but1.addEventListener('click', function(){
  if(!toggle){
    toggle = true;
  anime({
    targets: '.fir',
    translateX: 400,
    delay: 1000});

 }else{
    toggle = false;
  anime({
    targets: '.fir',
    translateX: 0,
    delay: 1000});
}});


but2.addEventListener('click', function(){
  if(!toggle1){
    toggle1 = true;
    anime({
      targets: '.sec',
      translateX: 400,
      easing: 'easeInOutExpo'
    });
 }else{
    toggle1 = false;
    anime({
      targets: '.sec',
      translateX: 0,
      easing: 'easeInOutExpo'
    });
}});



but3.addEventListener('click', function(){
  if(!toggle2){
    toggle2 = true;
    anime({
      targets: '.third',
      width: '40%', // -> from '28px' to '100%',
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: false
    });
 }else{
    toggle2 = false;
    anime({
      targets: '.third',
      width: '25%', // -> from '28px' to '100%',
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: false
    });
}});


but4.addEventListener('click', function(){

    anime({
      targets: '.fourth',
      keyframes: [
        {translateY: -20},
        {translateX: 300},
        {translateY: -70},
        {translateY: 70},
        {translateY: 20},
        {translateX: 0},
        {translateY: 0}
      ],
      duration: 4000,
      easing: 'easeOutElastic(1, .8)',
      loop: false

});

});
