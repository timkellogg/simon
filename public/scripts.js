window.onload = function() {

  // stores the current playing items of the computer
  var sequence     = [];

  var redButton    = document.getElementById("red"),
      greenButton  = document.getElementById("green"),
      blueButton   = document.getElementById("blue"),
      orangeButton = document.getElementById("orange");

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

  var createNewSeq = function () {

    // play old sequence
    sequence.forEach(function(element) {
      element.click();
      element.addEventListener("end", function() {
        return;
      });
    });

    // randomly select from allButtons
    var nextAudio = sequence.randEl();

    // add that element to sequence
    sequence.push(nextAudio);

  };

  // function that reads in user input


  // function that compares the user input to the created sequence



};
