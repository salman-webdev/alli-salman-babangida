//FIXED HEADER ON SCROLL FUNCTION//
window.onscroll = function() {fixedHeader()};

var header = document.getElementById("fixed-header");
const currentLocation = location.href;
const navItem = document.querySelectorAll(".nav-item");

for (i = 0; i<navItem.length; i++) {
    if(navItem[i].href === currentLocation) {
        navItem[i].className = "active-nav";
    };
}

var sticky = header.offsetTop;

function fixedHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
}

//SKILLBOX TOGGLE FUNCTION//
const skillbox = document.getElementsByClassName("skillbox");

for (i = 0; i<skillbox.length; i++) {
    skillbox[i].addEventListener("click", function(){
        this.classList.add("active");
    });
}


