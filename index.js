
//ACTIVE NAV LINK//
const navBar = document.querySelector("#navbar").querySelectorAll("a");
console.log(navBar);

navBar.forEach(element => {
    element.addEventListener("click", function(){
        navBar.forEach(nav=>nav.classList.remove("active-nav"));

        this.classList.add("active-nav");
    });
});


//SKILLBOX TOGGLE FUNCTION//
const skillbox = document.getElementsByClassName("skillbox");

for (i = 0; i<skillbox.length; i++) {
    skillbox[i].addEventListener("click", function(){
        this.classList.toggle("active");
    });
}


//FIXED HEADER ON SCROLL FUNCTION//
window.onscroll = function() {fixedHeader()};

var header = document.getElementById("fixed-header");
const currentLocation = location.href;

var sticky = header.offsetTop;

function fixedHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
}

//MENU TOGGLE BUTTON//
const menu = document.querySelector(".menu-bar");
const menuBar = document.querySelector("#navbar");
const icon = document.querySelector(".fa-bars")
console.log(menu); 

menu.addEventListener("click", function (){
    menuBar.classList.toggle("show");
    icon.classList.toggle("fa-times");
});

