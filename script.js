var index1 = 0;
var leftShelfOrigText =
  "The bottom part of the shelf is locked. The upper part of the shelf is full of objects. Maybe there is somewhere very noticable and special...?";

var index2 = 0;
var rightTableOrigText =
  "There are some color pencils and a piece of old paper on the table.";

var index3 = 0;
var frontDrawerOrigText =
  "There are 2 pieces of paper lying in the drawer. What do they mean......?";

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
    document.getElementById("openDrawerPara").innerHTML = frontDrawerOrigText;
    document.getElementById("hintOpenDrawerButton").innerHTML = "Hint";
    index3--;
  }
}
