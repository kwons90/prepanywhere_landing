// document.getElementById("dot1").style.backgroundColor = "#4098F9";
// document.getElementById("option1").style.backgroundColor = "#18202e";

function change_plan(e) {
  if (e.target.id === "dot1") {
    document.getElementById("dot2").style.backgroundColor = "#ffffff";
    document.getElementById("dot1").style.backgroundColor = "#4098F9";
    document.getElementById("plan2").style.display = "none";
    document.getElementById("plan1").style.display = "flex";
  }
  if (e.target.id === "dot2") {
    document.getElementById("dot1").style.backgroundColor = "#ffffff";
    document.getElementById("dot2").style.backgroundColor = "#4098F9";
    document.getElementById("plan1").style.display = "none";
    document.getElementById("plan2").style.display = "flex";
  }
}

function change_option(e) {
  if (e.id == "option1") {
    document.getElementById("option1").style.backgroundColor = "#18202e";
    document.getElementById("option2").style.backgroundColor = "#15161c";
    document.getElementById("option3").style.backgroundColor = "#15161c";
    document.getElementById("current_pic_image").src = "images/demand_1.gif";
    document.getElementById("current_pic_image_mobile").src =
      "images/demand_1.gif";
  }
  if (e.id == "option2") {
    document.getElementById("option2").style.backgroundColor = "#18202e";
    document.getElementById("option1").style.backgroundColor = "#15161c";
    document.getElementById("option3").style.backgroundColor = "#15161c";
    document.getElementById("current_pic_image").src = "images/demand_2.png";
    document.getElementById("current_pic_image_mobile").src =
      "images/demand_2.png";
  }
  if (e.id == "option3") {
    document.getElementById("option3").style.backgroundColor = "#18202e";
    document.getElementById("option2").style.backgroundColor = "#15161c";
    document.getElementById("option1").style.backgroundColor = "#15161c";
    document.getElementById("current_pic_image").src = "images/demand_3.png";
    document.getElementById("current_pic_image_mobile").src =
      "images/demand_3.png";
  }
}

export default change_plan