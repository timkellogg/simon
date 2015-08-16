window.onload = function() {

  var redButton    = document.getElementById("red");
  var greenButton  = document.getElementById("green");
  var blueButton   = document.getElementById("blue");
  var orangeButton = document.getElementById("orange");

  // audio mappings
  var audioRed     = document.getElementById("audio-red");
  var audioBlue    = document.getElementById("audio-blue");
  var audioOrange  = document.getElementById("audio-orange");
  var audioGreen   = document.getElementById("audio-green")

  // add event listeners
  redButton.addEventListener("click", function() {
    audioRed.play();
  });

  blueButton.addEventListener("click", function() {
    audioBlue.play();
  });

  orangeButton.addEventListener("click", function() {
    audioOrange.play();
  });

  greenButton.addEventListener("click", function() {
    audioGreen.play();
  });

};
