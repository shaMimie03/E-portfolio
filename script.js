let menuIcon = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

function toggleTool(button) {
  const tool = button.previousElementSibling;
  if (tool.style.display === "none") {
    tool.style.display = "block";
    button.textContent = "Hide Tools";
  } else {
    tool.style.display = "none";
    button.textContent = "Review Tools";
  }
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

function myFunction() {
  var dots = document.getElementsByClassName("dots");
  var moreText = document.getElementsByClassName("more");
  var btnText = document.getElementsByClassName("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


