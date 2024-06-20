function switchLogo() {
  var logo = document.querySelector("img.w3-image");
  if (logo.src.includes("logo.png")) {
    logo.src = "logo2.png";
  } else {
    logo.src = "logo.png";
  }
}
