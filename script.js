var index1 = 0;
var leftShelfOrigText =
  "The bottom part of the shelf is locked. The upper part of the shelf is full of objects. Maybe there is somewhere very noticable and special...?";

var index2 = 0;
var rightTableOrigText =
  "There are some color pencils and a piece of old paper on the table.";

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
