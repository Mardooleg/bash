document.getElementById('Noite')

let controller = document.getElementById('controller');

let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let fourth = document.getElementById('fourth');
let fifth = document.getElementById('fifth');


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
    translateX: !toggle? 0 : 300,
    delay: 1000});
  });
 
 
  

but2.addEventListener('click', function(){
 !toggle1? toggle1 = true : toggle1 = false;
    anime({
      targets: '.sec',
      translateX: !toggle1?0 : 300,
      easing: 'easeInOutExpo'
    });
});



but3.addEventListener('click', function(){
 !toggle2? toggle2 = true : toggle2 = false;
    anime({
      targets: '.third',
      width: toggle2? '700px' : '400px', // -> from '28px' to '100%',
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

but5.addEventListener('click', function(){
  // darkmode.style.fill = "#fff";

});






darkmode.addEventListener('click', function(){

 


  if(!toggle4){

    // but1.addEventListener('mouseover', () =>{
    //   but1.style.background = '#576F72';
    //   first.style.background = '#576F72';
    //   but1.style.transition = '0.2s'
    // });
    // but1.addEventListener('mouseleave', () =>{
    //   but1.style.background = '#7D9D9C';
    //   first.style.background = '#7D9D9C';
    //   but1.style.transition = '0.2s';
    // });


    // button.hover ='#fff';


    color('#DCD7C9', '#2C3639' , '#3F4E4F');

    toggle4 = true;
    
  const timeLine = anime.timeline({
    duration: 1500,
    easing: "easeOutExpo"
  }); 
 
  timeLine.add({
    targets: ".sun",
    // fill: '#1C375C',
    fill: '#DCD7C9',
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
        rotate: 40
   })
    .add({
      targets: ".sun",
      fill: '#EF810E',
      d: [
        {value: pathS}
      ] }, '-= 1450' )
      color('#000', '#F0EBE3' , '#7D9D9C');
  }
  
}); 


function color(color,backgrond1, background2){
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

  body.style.transition = '1s'
  // first.style.transition = '1s'
  // second.style.transition = '1s'
  // third.style.transition = '1s'
  // fourth.style.transition = '1s'
  // fifth.style.transition = '1s'
  // but1.style.transition = '1s'
  // but2.style.transition = '1s'
  // but3.style.transition = '1s'
  // but4.style.transition = '1s'
  // but5.style.transition = '1s'

  first.style.color = color
  second.style.color = color
  third.style.color = color
  fourth.style.color = color
  fifth.style.color = color
  but1.style.color = color
  but2.style.color = color
  but3.style.color = color
  but4.style.color = color
  but5.style.color = color
};

but1.addEventListener('mouseover', () =>{
  !toggle4? but1.style.background = '#576F72': but1.style.background = '#395B64';
  // !toggle4? first.style.background = '#576F72': but1.style.background = '#395B64';
  but1.style.transition = '0.5s'
  // first.style.transition = '0.2s'
});
  but1.addEventListener('mouseleave', () =>{
  !toggle4? but1.style.background = '#7D9D9C' : but1.style.background = '#3F4E4F';
  but1.style.transition = '0.5s'
  // first.style.transition = '0.2s'
});


but2.addEventListener('mouseover', () =>{
  !toggle4? but2.style.background = '#576F72': but2.style.background = '#395B64';
  // !toggle4? first.style.background = '#576F72': but1.style.background = '#395B64';
  but2.style.transition = '0.5s'
  // first.style.transition = '0.2s'
});
but2.addEventListener('mouseleave', () =>{
  !toggle4? but2.style.background = '#7D9D9C' : but2.style.background = '#3F4E4F';
  but2.style.transition = '0.5s'
  // first.style.transition = '0.2s'
});

but3.addEventListener('mouseover', () =>{
  !toggle4? but3.style.background = '#576F72': but3.style.background = '#395B64';
  // !toggle4? first.style.background = '#576F72': but1.style.background = '#395B64';
  but3.style.transition = '0.5s'
  // first.style.transition = '0.2s'
});
  but3.addEventListener('mouseleave', () =>{
  !toggle4? but3.style.background = '#7D9D9C' : but3.style.background = '#3F4E4F';
  but3.style.transition = '0.5s'
  // first.style.transition = '0.2s'
});

but4.addEventListener('mouseover', () =>{
  !toggle4? but4.style.background = '#576F72': but4.style.background = '#395B64';
  // !toggle4? first.style.background = '#576F72': but1.style.background = '#395B64';
  but4.style.transition = '0.5s'
  // first.style.transition = '0.2s'
});
  but4.addEventListener('mouseleave', () =>{
  !toggle4? but4.style.background = '#7D9D9C' : but4.style.background = '#3F4E4F';
  but4.style.transition = '0.5s'
  // first.style.transition = '0.2s'
});

but5.addEventListener('mouseover', () =>{
  !toggle4? but5.style.background = '#576F72': but5.style.background = '#395B64';
  // !toggle4? first.style.background = '#576F72': but1.style.background = '#395B64';
  but5.style.transition = '0.5s'
  // first.style.transition = '0.2s'
});
  but5.addEventListener('mouseleave', () =>{
  !toggle4? but5.style.background = '#7D9D9C' : but5.style.background = '#3F4E4F';
  but5.style.transition = '0.5s'
  // first.style.transition = '0.2s'
});
