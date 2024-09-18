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

function makeSound(innerHTML) {
  switch (innerHTML) {
    case "Aa":
      var letterAa = new Audio("eaSounds/a.mp3");
      letterAa.play();
      break;
    case "Bb":
      var letterB = new Audio("eaSounds/b.mp3");
      letterB.play();
      break;
    case "Cc":
      var letterC = new Audio("eaSounds/c.mp3");
      letterC.play();
      break;
    case "Dd":
      var letterD = new Audio("eaSounds/d.mp3");
      letterD.play();
      break;
    case "Ee":
      var letterE = new Audio("eaSounds/e.mp3");
      letterE.play();
      break;
    case "Ff":
      var letterF = new Audio("eaSounds/f.mp3");
      letterF.play();
      break;
    case "Gg":
      var letterG = new Audio("eaSounds/g.mp3");
      letterG.play();
      break;
    case "Hh":
      var letterH = new Audio("eaSounds/h.mp3");
      letterH.play();
      break;
    case "Ii":
      var letterI = new Audio("eaSounds/i.mp3");
      letterI.play();
      break;
    case "Jj":
      var letterJ = new Audio("eaSounds/j.mp3");
      letterJ.play();
      break;
    case "Kk":
      var letterK = new Audio("eaSounds/k.mp3");
      letterK.play();
      break;
    case "Ll":
      var letterL = new Audio("eaSounds/l.mp3");
      letterL.play();
      break;
    case "Mm":
      var letterM = new Audio("eaSounds/m.mp3");
      letterM.play();
      break;
    case "Nn":
      var letterN = new Audio("eaSounds/n.mp3");
      letterN.play();
      break;
    case "Oo":
      var letterO = new Audio("eaSounds/o.mp3");
      letterO.play();
      break;
    case "Pp":
      var letterP = new Audio("eaSounds/p.mp3");
      letterP.play();
      break;
    case "Qq":
      var letterQ = new Audio("eaSounds/q.mp3");
      letterQ.play();
      break;
    case "Rr":
      var letterR = new Audio("eaSounds/r.mp3");
      letterR.play();
      break;
    case "Ss":
      var letterS = new Audio("eaSounds/s.mp3");
      letterS.play();
      break;
    case "Tt":
      var letterT = new Audio("eaSounds/t.mp3");
      letterT.play();
      break;
    case "Uu":
      var letterU = new Audio("eaSounds/u.mp3");
      letterU.play();
      break;
    case "Vv":
      var letterV = new Audio("eaSounds/v.mp3");
      letterV.play();
      break;
    case "Ww":
      var letterW = new Audio("eaSounds/w.mp3");
      letterW.play();
      break;
    case "Xx":
      var letterX = new Audio("eaSounds/x.mp3");
      letterX.play();
      break;
    case "Yy":
      var letterY = new Audio("eaSounds/y.mp3");
      letterY.play();
      break;
    case "Zz":
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
