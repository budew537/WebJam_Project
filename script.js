var index = 0;
var leftShelfOrigText =
  "The bottom part of the shelf is locked. The upper part of the shelf is full of objects. Maybe there is somewhere very noticable and special...?";

function hintLeftFunction() {
  if (index == 0) {
    document.getElementById("leftPara").innerHTML =
      "Emmmm....Is there something special about the position of the empty spot in the shelf?";
    document.getElementById("hintLeftButton").innerHTML = "Hide Hint";
    index++;
  } else if (index == 1) {
    document.getElementById("leftPara").innerHTML = leftShelfOrigText;
    document.getElementById("hintLeftButton").innerHTML = "Hint";
    index--;
  }
}
