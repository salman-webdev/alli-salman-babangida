const skillbox = document.getElementsByClassName("skillbox");

for (i = 0; i<skillbox.length; i++) {
    skillbox[i].addEventListener("click", function(){
        this.classList.toggle("active");
    })
}