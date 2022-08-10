document.getElementById('Noite')

let controller = document.getElementById('controller');
const body = document.querySelector('body');

let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let fourth = document.getElementById('fourth');
let fifth = document.getElementById('fifth');

let sun = document.getElementById('sun');
let darkmode2 = document.getElementById('darkmode2');
let darkmode = document.getElementById('darkmode');

let but1 = document.getElementById('but1');
let but2 = document.getElementById('but2');
let but3 = document.getElementById('but3');
let but4 = document.getElementById('but4');
let but5 = document.getElementById('but5');

let toggle = false; 
let toggle1 = false; 
let toggle2 = false; 
let toggle3 = false; 
let toggle4 = false; 
let toggle5 = false; 

const def = {   // Стандартний набір кольорів для світлої та темної тем
  
  1 :'#F0EBE3', // Світлий фон 
  2 :'#2C3639', // Темний фон 
  3 :'#3F4E4F', // Наводження на світлу тему 
  4: '#7D9D9C', // Базовий колір світлої кнопки 
  5: '#395B64', // Наводження на темну тему 
  6: '#3F4E4F', // Базовий колір темної кнопки
  7: '#000',    // Колір світлого тексту 
  8: '#DCD7C9'  // Колір темного тексту

};  

const pathS =
    'M268 134C268 208.006 208.006 268 134 268C59.9938 268 0 208.006 0 134C0 59.9938 59.9938 0 134 0C208.006 0 268 59.9938 268 134Z'
const pathM =
    'M53 123.5C64 279.5 208.006 268 134 268C59.9938 268 0 208.006 0 134C0 59.9938 59.9938 0 134 0C208.006 0 53 4.5 53 123.5Z'


      listiner(but1 , def[3], def[4], def[5], def[6]);  // Зміна кольору при наводженні 
      listiner(but2,  def[3], def[4], def[5], def[6]);
      listiner(but3,  def[3], def[4], def[5], def[6]);
      listiner(but4,  def[3], def[4], def[5], def[6]);
      listiner(but5,  def[3], def[4], def[5], def[6]);



but1.addEventListener('click',()=>{
    !toggle? toggle = true : toggle = false
  anime({
    targets: '.fir',
    translateX: !toggle? 0 : 300,
    delay: 1000})});


but2.addEventListener('click',()=>{
    !toggle1? toggle1 = true : toggle1 = false;
  anime({
    targets: '.sec',
    translateX: !toggle1?0 : 300,
    easing: 'easeInOutExpo'})});


but3.addEventListener('click', function(){
    !toggle2? toggle2 = true : toggle2 = false;
  anime({
    targets: '.third',
    width: toggle2? '700px' : '400px', // -> from '28px' to '100%',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: false})});


but4.addEventListener('click',()=>{
  anime({
    targets: '.fourth',
    keyframes: [
      {translateY: -20},        
      {translateX: 300},
      {translateY: -70},
      {translateY: 70},
      {translateY: 20},
      {translateX: 0},
      {translateY: 0}],
    duration: 4000,
    easing: 'easeOutElastic(1, .8)',
    loop: false})});

but5.addEventListener('click', () =>{
    toggle5? toggle5 = false : toggle5 = true;
  anime({
    targets: '.fifth',
    translateX: toggle5? 250 : 0,
    direction:  'normal' ,
    loop: false,
    easing: 'spring(2, 100, 5, 0)'})});

  

darkmode.addEventListener('click', ()=>{
  if(!toggle4){   // Темна тема 

  color(def[8], def[2] , def[6]);

  const timeLine = anime.timeline({
    duration: 1500,
    easing: "easeOutExpo"
  }); 

  timeLine.add({
    targets: ".sun",
    fill: '#DCD7C9',
    d: [
      {value: pathM}]})
    .add({
      targets: darkmode,
      rotate: 320}, '-= 1450');
  toggle4 = true;

}else{    // Світла тема 

  color(def[7], def[1] , def[4]);

  const timeLine = anime.timeline({
    duration: 1500,
    easing: "easeOutExpo"}); 
  timeLine.add({
        targets: darkmode,
        rotate: 40})
  .add({
      targets: ".sun",
      fill: '#EF810E',
      d: [
        {value: pathS}]}, '-= 1450' )
  toggle4 = false;
}
}); 


  function color(textColor ,backgrond1 ,background2){   //   Функція зміни теми 
    body.style.transition = '0.5s'

    body.style.background = backgrond1
    first.style.background = background2
    second.style.background = background2
    third.style.background = background2
    fourth.style.background = background2
    fifth.style.background = background2
  
    but1.style.background = background2
    but2.style.background = background2
    but3.style.background = background2
    but4.style.background = background2
    but5.style.background = background2
  
    first.style.color = textColor
    second.style.color = textColor
    third.style.color = textColor
    fourth.style.color = textColor
    fifth.style.color = textColor
    but1.style.color = textColor
    but2.style.color = textColor
    but3.style.color = textColor
    but4.style.color = textColor
    but5.style.color = textColor
  };

  function listiner(but, colorLight, colorLightBag, colorDark, colorDarkBag){ //Функція нодження на кнопку 
    but.addEventListener('mouseover', () =>{
      !toggle4? but.style.background = colorLight : but.style.background = colorDark;
    });
    but.addEventListener('mouseleave', () =>{
      !toggle4? but.style.background = colorLightBag : but.style.background = colorDarkBag;});}