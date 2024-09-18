//detecting What button is pressed in the innerHTML

var numberOfLetterDiv = document.querySelectorAll(".myLetter").length;
for (var i = 0; i < numberOfLetterDiv; i++) {
  document
    .querySelectorAll(".myLetter")
    [i].addEventListener("click", function () {
      var divInnerHTML = this.innerHTML;
      makeSound(divInnerHTML);
      buttonAnimation(innerHTML);

      //what to do when click detected.
    });
}

document.addEventListener("keypress", function (Event) {
  makeSound(Event.key);
  buttonAnimation(Event.key);
});

//Detecting what keyboard key pressed

function makeSound(innerHTML) {
  switch (innerHTML) {
    case "a":
      var letterA = new Audio("eaSounds/a.mp3");
      letterA.play();

      break;
    case "b":
      var letterB = new Audio("eaSounds/b.mp3");
      letterB.play();
      break;
    case "c":
      var letterC = new Audio("eaSounds/c.mp3");
      letterC.play();
      break;
    case "d":
      var letterD = new Audio("eaSounds/d.mp3");
      letterD.play();
      break;
    case "e":
      var letterE = new Audio("eaSounds/e.mp3");
      letterE.play();
      break;
    case "f":
      var letterF = new Audio("eaSounds/f.mp3");
      letterF.play();
      break;
    case "g":
      var letterG = new Audio("eaSounds/g.mp3");
      letterG.play();
      break;
    case "h":
      var letterH = new Audio("eaSounds/h.mp3");
      letterH.play();
      break;
    case "i":
      var letterI = new Audio("eaSounds/i.mp3");
      letterI.play();
      break;
    case "j":
      var letterJ = new Audio("eaSounds/j.mp3");
      letterJ.play();
      break;
    case "k":
      var letterK = new Audio("eaSounds/k.mp3");
      letterK.play();
      break;
    case "l":
      var letterL = new Audio("eaSounds/l.mp3");
      letterL.play();
      break;
    case "m":
      var letterM = new Audio("eaSounds/m.mp3");
      letterM.play();
      break;
    case "n":
      var letterN = new Audio("eaSounds/n.mp3");
      letterN.play();
      break;
    case "o":
      var letterO = new Audio("eaSounds/o.mp3");
      letterO.play();
      break;
    case "p":
      var letterP = new Audio("eaSounds/p.mp3");
      letterP.play();
      break;
    case "q":
      var letterQ = new Audio("eaSounds/q.mp3");
      letterQ.play();
      break;
    case "r":
      var letterR = new Audio("eaSounds/r.mp3");
      letterR.play();
      break;
    case "s":
      var letterS = new Audio("eaSounds/s.mp3");
      letterS.play();
      break;
    case "t":
      var letterT = new Audio("eaSounds/t.mp3");
      letterT.play();
      break;
    case "u":
      var letterU = new Audio("eaSounds/u.mp3");
      letterU.play();
      break;
    case "v":
      var letterV = new Audio("eaSounds/v.mp3");
      letterV.play();
      break;
    case "w":
      var letterW = new Audio("eaSounds/w.mp3");
      letterW.play();
      break;
    case "x":
      var letterX = new Audio("eaSounds/x.mp3");
      letterX.play();
      break;
    case "y":
      var letterY = new Audio("eaSounds/y.mp3");
      letterY.play();
      break;
    case "z":
      var letterZ = new Audio("eaSounds/z.mp3");
      letterZ.play();
      break;
    case "ET":
      var ethnant = new Audio("ETHNANT/ETHnantum.mp3");
      ethnant.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

// //  use pause() method to play music
// function pauseAudio() {
//   ethnant.pause();
// }

// //  use muted to pause music
// function muteAudio() {
//   ethnant.muted = !ethnant.muted;
// }

// // var ethnant = new Audio("ETHNANT/ETHnantum.mp3");
// var isPlaying = false;

// function togglePlay() {
//   if (isPlaying) {
//     ethnant.pause();
//   } else {
//     ethnant.play();
//   }
// }
// ethnant.onplaying = function () {
//   isPlaying = true;
// };
// ethnant.onpause = function () {
//   isPlaying = false;
// };

function player_OnReady() {
  if (ethnant.IsPlaying()) {
    ethnant.Stop();
  } else {
    ethnant.Play();
  }
}

// jQuery;

// $(document).ready(function () {
//   $("#play").click(function () {
//     $(this).toggleClass("#pause");
//   });
// });
