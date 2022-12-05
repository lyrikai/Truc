let input = ""
let vide = ""

for (let i = 1; i <= 1000000; i++) {
  setTimeout(function() { 
    vide = vide + "10-";
    console.log(vide)
   }, i * 10);
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {

  console.log(e)
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();

  vide = vide + e.keyCode + "-" 
  console.log("---")
  console.log(input)
  console.log("---")

}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

var bton = document.getElementById("btn");

let tesot = function(){

let tab = vide.split('-');

tab.forEach( a =>{ 

})

  tab.forEach((a, i) => {
    setTimeout(() => {
      const audio = document.querySelector(`audio[data-key="${a}"]`);
  const key = document.querySelector(`div[data-key="${a}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
    }, i * 10);
  });

tab.forEach( a =>{    

})
  
}

bton.addEventListener("click", tesot);

var record = document.getElementById("record");

record.addEventListener("click", tesot);
