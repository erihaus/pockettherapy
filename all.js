var backgroundColor;
var backgroundImage;
function changeBackgroundColor(color) {
	backgroundImage = null;
document.body.style.backgroundImage = "none";
document.body.style.backgroundColor = color;
$(".hi").css("background-color", color);
$("#pButton").css("opacity", "0.5");
$("#background").css("opacity", "0.5");
$("#nature").hide();
$("h1").css("border", "none");
$(".nature").hide();
  $(".color").hide();
$("#color").hide();
backgroundColor = color;
$(".nature").css("background-color", "white");
$(".nature").css("opacity", "0.5");
$(".color").css("background-color", "white");
$(".color").css("opacity", "0.5");
}
function changeBackground(image) {
	backgroundColor = null;
  var foto = document.getElementById("photos");
    image = "url(" + foto.src + ")";
  document.body.style.backgroundImage = image;
	$(".hi").css("background-color", "white");
	$(".hi").css("background", "rgba(255, 255 ,255,0.0)");
	$("h1").css("border", "none");
$("#pButton").css("opacity", "0.5");
$("#background").css("opacity", "0.5");
$("#nature").hide();
$(".nature").hide();
  $(".color").hide();
$("#color").hide();
backgroundImage = image;
$(".nature").css("background-color", "white");
$(".nature").css("opacity", "0.5");
$(".color").css("background-color", "white");
$(".color").css("opacity", "0.5");
}