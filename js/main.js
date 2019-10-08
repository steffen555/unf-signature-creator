$(document).ready(function () {
  updateCanvas();
});

function updateCanvas() {
  var c = document.getElementById("mailSignature");
  var ctx = c.getContext("2d");
  ctx.clearRect(0,0,c.width, c.height);
  logo = new Image();
  logo.onload = function (event) {
    ctx.drawImage(logo, 0, 0, logo.width / (logo.height / 200), 200);
  };
  logo.src = "img/unflogo.png";
  ctx.fillStyle = "black";
  ctx.font = '48px Oswald-Regular';
  var name = document.getElementById("name").value;
  ctx.fillText(name, 270, 76);
  ctx.font = "48px Oswald-Light";
  var title = document.getElementById("title").value;
  ctx.fillText(title, 270, 126);
  ctx.font = "36px PTSans-Regular";
  var tbf = document.getElementById("tbf").value;
  var phone = document.getElementById("phone").value;
  ctx.fillText(tbf + "@unf.dk - " + phone, 270, 180);
}
