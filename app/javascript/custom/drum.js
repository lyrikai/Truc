
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

//---------------------------- Ear Btn ----------------------------------- //

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

var trackk = document.getElementById("input");

let saveing = function(){
  trackk.innerHTML += tab;
 document.getElementById("input").value = tab ;
}

save.addEventListener("click", saveing);

//----------------------- Play ------------------------- //


var play = document.getElementsByClassName("play");

let playng = function(){

  var parent = this.parentNode;
  var element = parent.getElementsByClassName("input");
  let tabb = element[0].textContent

  let tab = tabb.split(',');

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

for (var i = 0; i < play.length; i++) {
  play[i].addEventListener('click', playng);
}

//----------------------- Fusion ------------------------- //

var fusion = document.getElementById("fusion");

var check = document.getElementsByClassName("myCheck");
let checked = false

let fusionFunction = function(){
  let tab = [] 
  let tabOne = []
  let tabTwo = []
  let tabMix = new Array(10000);
  if (checked == false){
    checked = true
   
    for (var i = 0; i < check.length; i++) {
      check[i].style.visibility = "visible"
    }
  }else{
    checked = false
    
    for (var i = 0; i < check.length; i++) {
      if(check[i].checked){
        let parent = check[i].parentElement;
        let element = parent.getElementsByClassName("input");
        if (tabOne.length == 0){
          let txtOne = element[0].textContent
          let tOne = txtOne.split(",")
          tabOne = tOne
        }else if (tabTwo.length == 0){
          let txtTwo = element[0].textContent
          let tTwo = txtTwo.split(",")
          tabTwo = tTwo
        }
      
      }
      check[i].style.visibility = "hidden"
      check[i].checked = false;
    }
    console.log("tabOne")
    console.log(tabOne)
    console.log("TabTwo")
    console.log(tabTwo)

    for (let i = 0; i < tabOne.length; i++) {
      tabOne[i] = parseInt(tabOne[i])
      tabTwo[i] = parseInt(tabTwo[i])

      if (tabOne[i] !== tabTwo[i] && tabOne[i] != 1) {
        tabMix[i] = tabOne[i]
      }
    }

    for (let i = 0; i < tabTwo.length; i++) {
      tabOne[i] = parseInt(tabOne[i])
      tabTwo[i] = parseInt(tabTwo[i])

      if (tabTwo[i] !== tabOne[i] && tabTwo[i] != 1) {
        tabMix[i] = tabTwo[i]
      }
    }

    for (let i = 0; i < tabMix.length; i++) {
  
      if (tabMix[i] == null || tabMix[i] == isNaN) {
        tabMix[i] = 1
      }
    }

    console.log("TabMix")
    console.log(tabMix.join(","))

    //------Save Fusion-----//

   

    var trackk = document.getElementById("fusioninput");

    trackk.innerHTML += tab;
    document.getElementById("fusioninput").value = tabMix.join(",") ;
    

    
  }

}

fusion.addEventListener('click', fusionFunction);

