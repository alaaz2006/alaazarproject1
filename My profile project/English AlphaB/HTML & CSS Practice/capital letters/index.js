var numberOfLetterButtons = document.querySelectorAll(".myLetter").length;
for (var i = 0; i < numberOfLetterButtons; i++) {
  document
    .querySelectorAll(".myLetter")
    [i].addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(innerHTML);
    });
}
document.addEventListener("keypress", function (Event) {
  makeSound(Event.key);
  buttonAnimation(Event.key);
});

function makeSound(innerHTML) {
  switch (innerHTML) {
    case "A":
      var letterA = new Audio("eaSounds/a.mp3");
      letterA.play();
      break;
    case "B":
      var letterB = new Audio("eaSounds/b.mp3");
      letterB.play();
      break;
    case "C":
      var letterC = new Audio("eaSounds/c.mp3");
      letterC.play();
      break;
    case "D":
      var letterD = new Audio("eaSounds/d.mp3");
      letterD.play();
      break;
    case "E":
      var letterE = new Audio("eaSounds/e.mp3");
      letterE.play();
      break;
    case "F":
      var letterF = new Audio("eaSounds/f.mp3");
      letterF.play();
      break;
    case "G":
      var letterG = new Audio("eaSounds/g.mp3");
      letterG.play();
      break;
    case "H":
      var letterH = new Audio("eaSounds/h.mp3");
      letterH.play();
      break;
    case "I":
      var letterI = new Audio("eaSounds/i.mp3");
      letterI.play();
      break;
    case "J":
      var letterJ = new Audio("eaSounds/j.mp3");
      letterJ.play();
      break;
    case "K":
      var letterK = new Audio("eaSounds/k.mp3");
      letterK.play();
      break;
    case "L":
      var letterL = new Audio("eaSounds/l.mp3");
      letterL.play();
      break;
    case "M":
      var letterM = new Audio("eaSounds/m.mp3");
      letterM.play();
      break;
    case "N":
      var letterN = new Audio("eaSounds/n.mp3");
      letterN.play();
      break;
    case "O":
      var letterO = new Audio("eaSounds/o.mp3");
      letterO.play();
      break;
    case "P":
      var letterP = new Audio("eaSounds/p.mp3");
      letterP.play();
      break;
    case "Q":
      var letterQ = new Audio("eaSounds/q.mp3");
      letterQ.play();
      break;
    case "R":
      var letterR = new Audio("eaSounds/r.mp3");
      letterR.play();
      break;
    case "S":
      var letterS = new Audio("eaSounds/s.mp3");
      letterS.play();
      break;
    case "T":
      var letterT = new Audio("eaSounds/t.mp3");
      letterT.play();
      break;
    case "U":
      var letterU = new Audio("eaSounds/u.mp3");
      letterU.play();
      break;
    case "V":
      var letterV = new Audio("eaSounds/v.mp3");
      letterV.play();
      break;
    case "W":
      var letterW = new Audio("eaSounds/w.mp3");
      letterW.play();
      break;
    case "X":
      var letterX = new Audio("eaSounds/x.mp3");
      letterX.play();
      break;
    case "Y":
      var letterY = new Audio("eaSounds/y.mp3");
      letterY.play();
      break;
    case "Z":
      var letterZ = new Audio("eaSounds/z.mp3");
      letterZ.play();
      break;
    case "ET":
      var myET = new Audio("ETHNANT/ETHnantum.mp3");
      myET.play();
      break;
    default:
      console.log(innerHTML);
  }
}
//what to do when click detected.

// alert("javascript is working good!");
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
