window.onload = function() {

  // stores the current playing items of the computer
  var sequence     = [];

  var redButton    = document.getElementById("red"),
      greenButton  = document.getElementById("green"),
      blueButton   = document.getElementById("blue"),
      orangeButton = document.getElementById("orange"),
      start        = document.getElementById("start"),
      displayNum   = document.getElementById("display-number"),
      reset        = document.getElementById('reset');
  var allButtons   = [redButton, greenButton, blueButton, orangeButton];

  // audio mappings
  var audioRed     = document.getElementById("audio-red"),
      audioBlue    = document.getElementById("audio-blue"),
      audioOrange  = document.getElementById("audio-orange"),
      audioGreen   = document.getElementById("audio-green");

  var sounds = [audioRed, audioBlue, audioOrange, audioGreen];

  // add event listeners
  redButton.addEventListener("click", function() {
    createNewSeq();
    audioRed.play();
  });

  blueButton.addEventListener("click", function() {
    createNewSeq();
    audioBlue.play();
  });

  orangeButton.addEventListener("click", function() {
    createNewSeq();
    audioOrange.play();
  });

  greenButton.addEventListener("click", function() {
    createNewSeq();
    audioGreen.play();
  });

  start.addEventListener("click", function() {
    createNewSeq();
  });

  var createNewSeq = function () {

    // randomly select from allButtons
    var nextAudio = allButtons.randEl();

    // add that element to sequence
    sequence.push(nextAudio);

    updateDisplay();
    // play sequence
    sequence.forEach(function(element) {

    });


  };

  // function that updates display to show how long sequence is
  var updateDisplay = function () {
    displayNum.innerHTML = sequence.length;
  };

  // function that reads in user input

  // function that compares the user input to the created sequence



};
