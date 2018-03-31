window.onload = function x() {



  // var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  //       'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
  //       'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    var alphabet = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I',
          'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
          'Z', 'X', 'C', 'V', 'B', 'N', 'M'];



  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var getHint ;          // Word getHint
  var word ;              // Selected word
  var guess ;             // guess
  var guesses = [ ];      // Stored guesses
  var lives ;             // Lives
  var counter ;           // Count correct guesses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");
  var showTimer = document.getElementById("timer");
  var showTime = document.getElementById("Time");
  var showTime2 = document.getElementById("Time2");
  var countDown = document.getElementById("countDown");
  var tick = document.getElementById("tickTock")

tick.play();
setTimeout("countDown.play()",10000);

  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }


  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
    }
  }


  // Create guesses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
      showTime.style.visibility = "visible";
      setTimeout("window.location.reload()",2000);
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
        showTime2.style.visibility = "visible";
        setTimeout("window.location.reload()",2000);

      }
    }
  }



  // OnClick Function
   check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        }
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
      } else {
        comments();
      }
    }
  }

  // Play
  play = function () {
    categories = [
  ["BATMAN", "NIGHTWING", "TIM-DRAKE", "THE-FLASH", "BUMBLEBEE", "DEATHSTROKE", "WONDER-WOMAN", "STARFIRE", "BEAST-BOY", "SUPERMAN", "CYBORG", "WALLY-WEST", "RED-TORNADO", "SCARECROW", "AMANDA-WALLER", "GREEN-LANTERN", "THE-JOKER", "JIMMY-OLSEN", "BOOSTER-GOLD","CAPTAIN-BOOMERANG", "GORILLA-GRODD"]
    ];




    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [ ];
    lives = 5;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();

    var timeleft = 15;
    var downloadTimer = setInterval(function(){
      document.getElementById("progressBar").value = 15 - --timeleft;
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        showTimer.innerHTML = "Time's Up!";
        showTime.style.visibility = "visible";
        setTimeout("window.location.reload()",2000);
      }
    },2000);
  }
  play();



  // Hint

    hint.onclick = function() {
        hints = [
          ["Lives in Gotham", "Alias is Dick Grayson", "Has an IQ of 142", "Fastest Man Alive", "Ability to shrink and fly", "An assassin once paid to kill Batman", "The only child of Themyscara", "Tameranian Princess", "Animal Shapeshifter", "Man of Steel", "Is from Detroit", "Was first known as Kid Flash", "Robot with wind abilities", "Villain specializing in fear toxins", "Government agent involved with several espionage and law enforcement agencies", "John Stewart; an army man", "Villain known for leaving his victims 'smiling'", "Daily Planet Photographer", "A time traveler who was once a star quarterback", "An Australian thief and villain-for-hire", "A telepathic animal with a grudge against the Flash"]
      ];

    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: " +  hints [catagoryIndex][hintIndex];
  };

   // Reset

    document.getElementById('reset').onclick = function reset() {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      showClue.innerHTML = "";
  // window.location.reload(true);

      var timeleft = 15;
      var downloadTimer = setInterval(function(){
        document.getElementById("progressBar").value = 15 - --timeleft;
        if(timeleft <= 0){
          clearInterval(downloadTimer);
          showTimer.innerHTML = "Time's Up!";
        }
      },2000);
      play();
  }
}
