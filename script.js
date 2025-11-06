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
  "There is a piece of paper on the table. There is something on both its front and back.<br></br>I think I have found something crucial.";

function hintLeftFunction() {
  if (index1 == 0) {
    document.getElementById("leftPara").innerHTML =
      "Emmmm....Is there something special about the position of the empty spot in the shelf?";
    document.getElementById("hintLeftButton").innerHTML = "Hide Hint";
    index1++;
  } else if (index1 == 1) {
    document.getElementById("leftPara").innerHTML = leftShelfOrigText;
    document.getElementById("hintLeftButton").innerHTML = "Hint";
    index1--;
  }
}

function hintRightFunction() {
  if (index2 == 0) {
    document.getElementById("rightPara").innerHTML =
      "Maybe all the colors refer to some number...? I should check out the paper on the front drawer.";
    document.getElementById("hintRightButton").innerHTML = "Hide Hint";
    index2++;
  } else if (index2 == 1) {
    document.getElementById("rightPara").innerHTML = rightTableOrigText;
    document.getElementById("hintRightButton").innerHTML = "Hint";
    index2--;
  }
}

function hintOpenDrawerFunction() {
  if (index3 == 0) {
    document.getElementById("openDrawerPara").innerHTML =
      "Perhaps...try connecting the numbers on the left-handside paper in the order right-handside paper.";
    document.getElementById("hintOpenDrawerButton").innerHTML = "Hide Hint";
    index3++;
  } else if (index3 == 1) {
    document.getElementById("openDrawerPara").innerHTML = frontPaperOrigText;
    document.getElementById("hintOpenDrawerButton").innerHTML = "Hint";
    index3--;
  }
}

function hintPaperFunction() {
  if (index4 == 0) {
    document.getElementById("paperPara").innerHTML =
      "I should check out the places and objects that are listed on this paper.";
    document.getElementById("hintPaperButton").innerHTML = "Hide Hint";
    index4++;
  } else if (index4 == 1) {
    document.getElementById("paperPara").innerHTML = frontPaperOrigText;
    document.getElementById("hintPaperButton").innerHTML = "Hint";
    index4--;
  }
}
