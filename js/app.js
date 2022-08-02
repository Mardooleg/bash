document.getElementById('Noite')

let first = document.getElementById('first');
let second = document.getElementById('sec');
let sun = document.getElementById('sun');
let darkmode2 = document.getElementById('darkmode2');
let darkmode = document.getElementById('darkmode');


const body = document.querySelector('body');
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


const pathS =
     "M268 134C268 208.006 208.006 268 134 268C59.9938 268 0 208.006 0 134C0 59.9938 59.9938 0 134 0C208.006 0 268 59.9938 268 134Z"
const pathM = 
      'M53 123.5C64 279.5 208.006 268 134 268C59.9938 268 0 208.006 0 134C0 59.9938 59.9938 0 134 0C208.006 0 53 4.5 53 123.5Z'

but1.addEventListener('click', function(){
    !toggle? toggle = true : toggle = false
  anime({
    targets: '.fir',
    translateX: !toggle? 0 : 400,
    delay: 1000});
  });
 
 
  

but2.addEventListener('click', function(){
 !toggle1? toggle1 = true : toggle1 = false;
    anime({
      targets: '.sec',
      translateX: !toggle1?0 : 400,
      easing: 'easeInOutExpo'
    });
});



but3.addEventListener('click', function(){
 !toggle2? toggle2 = true : toggle2 = false;
    anime({
      targets: '.third',
      width: toggle2? '500px' : '400px', // -> from '28px' to '100%',
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: false
    });
});



but4.addEventListener('click', function(){

    anime({
      targets: '.fourth',
      keyframes: [
        {translateY: -20},
        {translateX: 400},
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

but5.addEventListener('click', function(){
  // darkmode.style.fill = "#fff";

});

darkmode.addEventListener('click', function(){

  


  if(!toggle4){

    toggle4 = true;
    
  const timeLine = anime.timeline({
    duration: 1500,
    easing: "easeOutExpo"
  }); 
 
  timeLine.add({
    targets: ".sun",
    fill: '#1C375C',
    d: [
      {value: pathM}
    ] })
    .add({
      targets: darkmode,
      rotate: 320
  }, '-= 1450');

}else{
  toggle4 = false;
    const timeLine = anime.timeline({
      duration: 1500,
      easing: "easeOutExpo"
    }); 
   timeLine.add({
        targets: darkmode,
        rotate: -320
   })
    .add({
      targets: ".sun",
      fill: '#EF810E',
      d: [
        {value: pathS}
      ] }, '-= 1450' )
    
  }
}); 
