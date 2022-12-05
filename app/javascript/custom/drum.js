
//---------------------Just Playing-------------------------- //

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

  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);

//----------------------- Record Btn ------------------------- //

var record = document.getElementById("record");

let tab = []

let sound = function(){

//--- no sound input ---//

  let noInput = []

  for (var i = 1; i <= 1000; i++) {
    setTimeout(function() { 
      
      noInput = noInput + "1-";
      tab = noInput.split('-');
      console.log(tab)
     }, i * 10);
    
  } 

//--- sound input --- //

  function playSound(e) {
  
    console.log(e)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

    noInput = noInput + e.keyCode + "-" 

  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);

}

record.addEventListener("click", sound);

//------- Ear Btn --------- //

var stop = document.getElementById("ear");

let playing = function(){
  console.log("La partition")
  console.log(tab)

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
}

stop.addEventListener("click", playing);

//----------------------- Record Save ------------------------- //

var save = document.getElementById("save");

var track = document.getElementById("track");
var trackk = document.getElementById("idtest");

let saveing = function(){
  track.innerHTML += tab;
  trackk.innerHTML += tab;
 document.getElementById("idtest").value = tab ;
}

save.addEventListener("click", saveing);
