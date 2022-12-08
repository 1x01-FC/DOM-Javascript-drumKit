//Detecting Button Press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {


  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML); //calls the function makeSound with input this.innerHTML

    buttonAnimation(buttonInnerHTML); //calls the function buttonAnimation with input this.innerHTML
  });
}

//Detecting Keyboard Press

document.addEventListener("keydown", function(event) {

  makeSound(event.key); //calls the function makeSound with the input event.key

  buttonAnimation(event.key); //calls the function buttonAnimation with input event.key

});

//Functions to call

function makeSound(key) { //Switch is a more efficient if else, "if case, do that"

  switch (key) {

    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:
      console.log(buttonInnerHTML)
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
