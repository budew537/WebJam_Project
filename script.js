/*hint text variables*/
var index1 = 0;
var leftShelfOrigText =
  "The bottom part of the shelf is locked. The upper part of the shelf is full of objects. Maybe there is somewhere very noticable and special...?";

var index2 = 0;
var rightTableOrigText =
  "There are some color pencils and a piece of old paper on the table.";

var index3 = 0;
var frontDrawerOrigText =
  "There are 2 pieces of paper lying in the drawer. What do they mean......?";

var index4 = 0;
var frontPaperOrigText =
  "There is a piece of paper on the table. There is something on both its front and back.";

/*password enter var & functions*/
let currentNumber = "";

function pressNum(button) {
  if (button.innerText != "X") {
    currentNumber += button.innerText;
    if (currentNumber.length > 3) {
      //currentNumber %= 1000;
      currentNumber = "";
    }
  } else {
    currentNumber = "";
  }
  document.getElementById("answerButton").innerText = currentNumber;

  const container = document.getElementById("code");
  if (currentNumber == 952) {
    if (!document.getElementById("messageSent")) {
      location.replace("https://hwtdtv-3000.csb.app/win");
      /*setTimeout(location.replace("https://hwtdtv-3000.csb.app/"), 20000);*/
      /*p = document.createElement("p");
      p.id = "messageSent";
      p.innerText = "HIIIIIII!!!!";
      container.appendChild(p);*/
    }
  }
}

/*color boxes buttons functions*/
const buttons = document.querySelectorAll(".colorbutton");
buttons.forEach((button) => {
  button.style.backgroundColor = "lightgreen";
});

function toggleVisibility(button) {
  if (button.style.backgroundColor == "lightgreen") {
    button.style.backgroundColor = "lightcoral";
  } else if (button.style.backgroundColor == "lightcoral") {
    button.style.backgroundColor = "lightblue";
  } else if (button.style.backgroundColor == "lightblue") {
    button.style.backgroundColor = "gold";
  } else {
    button.style.backgroundColor = "lightgreen";
  }

  const b1 = document.getElementById("b1");
  const b2 = document.getElementById("b2");
  const b3 = document.getElementById("b3");
  const b4 = document.getElementById("b4");

  /* Change this too: for what puzzle & the code printed */
  if (
    b1.style.backgroundColor == "gold" &&
    b2.style.backgroundColor == "lightcoral" &&
    b3.style.backgroundColor == "lightgreen" &&
    b4.style.backgroundColor == "lightblue"
  ) {
    const container = document.getElementById("messageContainer");
    if (!document.getElementById("messageSent")) {
      document.getElementById("lighthint1").style.display = "none";
      document.getElementById("lighthint2").style.display = "none";
      document.getElementById("lighthint3").style.display = "none";
      document.getElementById("lighthint4").style.display = "none";

      /* document.getElementById("lightPara").style.fontWeight = "bold"; */

      document.getElementById("lightPara").innerHTML =
        "Nice!! You turned off the light!! Let's turn that back on...'.";

      document.body.style.backgroundColor = "#0275a2";

      setTimeout(() => {
        document.body.style.backgroundColor = "#eee79d";
        document.getElementById("lightPara").innerHTML =
          "You get the secret number '666666'. Giving you blessings!";
      }, 2000);
    }
  }
}

/*hint text functions*/
function hintLeftFunction() {
  if (index1 == 0) {
    document.getElementById("leftPara").innerHTML =
      "The empty spot seems to be the speical one. Try mapping that spot in a coordinate in the shelf <br/>from top to bottom (1 to 4) and from left to right (1 to 4) and see where it locates.";
    document.getElementById("hintLeftButton").innerHTML = "Hide Hint";
    /*document.getElementById("leftPara").style.color = "#085570";*/
    document.getElementById("leftPara").style.fontWeight = "bold";
    index1++;
  } else if (index1 == 1) {
    document.getElementById("leftPara").innerHTML = leftShelfOrigText;
    document.getElementById("hintLeftButton").innerHTML = "Hint";
    /*document.getElementById("leftPara").style.color = "black";*/
    document.getElementById("leftPara").style.fontWeight = "normal";
    index1--;
  }
}

function hintRightFunction() {
  if (index2 == 0) {
    document.getElementById("rightPara").innerHTML =
      "Maybe all the colors refer to some number...? I should check out the paper in the Front Drawer to see which number I need.";
    document.getElementById("hintRightButton").innerHTML = "Hide Hint";
    document.getElementById("rightPara").style.fontWeight = "bold";
    index2++;
  } else if (index2 == 1) {
    document.getElementById("rightPara").innerHTML = rightTableOrigText;
    document.getElementById("hintRightButton").innerHTML = "Hint";
    document.getElementById("rightPara").style.fontWeight = "normal";
    index2--;
  }
}

function hintOpenDrawerFunction() {
  if (index3 == 0) {
    document.getElementById("openDrawerPara").innerHTML =
      "Perhaps...try connecting the numbers in a line on the left paper, using the order provided on the right paper.<br/>Then maybe I will get a figure from the connected lines that resembles a number?";
    document.getElementById("hintOpenDrawerButton").innerHTML = "Hide Hint";
    document.getElementById("openDrawerPara").style.fontWeight = "bold";
    index3++;
  } else if (index3 == 1) {
    document.getElementById("openDrawerPara").innerHTML = frontDrawerOrigText;
    document.getElementById("hintOpenDrawerButton").innerHTML = "Hint";
    document.getElementById("openDrawerPara").style.fontWeight = "normal";
    index3--;
  }
}

function hintPaperFunction() {
  if (index4 == 0) {
    document.getElementById("paperPara").innerHTML =
      "I should check out the places and objects that are listed on this paper. According to the arrows, the order also matters. ";
    document.getElementById("hintPaperButton").innerHTML = "Hide Hint";
    document.getElementById("paperPara").style.fontWeight = "bold";
    index4++;
  } else if (index4 == 1) {
    document.getElementById("paperPara").innerHTML = frontPaperOrigText;
    document.getElementById("hintPaperButton").innerHTML = "Hint";
    document.getElementById("paperPara").style.fontWeight = "normal";
    index4--;
  }
}
5;
