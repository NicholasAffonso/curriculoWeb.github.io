var ajaxRequest = new XMLHttpRequest();

ajaxRequest.onreadystatechange = function(){
    console.log("Página pronta");
}
ajaxRequest.open("GET", "http://192.168.1.6:3002", true);
ajaxRequest.send();

// Navbar var
var navbar = document.querySelector("nav")
var dropdown = document.querySelector("nav .dropdown");
var hamburger = document.getElementById("hamburger");
var prevScrollpos = window.pageYOffset;

//Navbar open and close function

hamburger.onclick = function menuBTN() {

  if (hamburger.name === "menu-outline") {

    dropdown.style.display = "grid";

    document.getElementById("hamburger")
      .name = "close-outline";

  } else if (dropdown.style.display === "grid") {

    dropdown.style.display = "none";

    document.getElementById("hamburger")
      .name = "menu-outline";
  }
}

// Navbar close on click out

document.addEventListener('click', function(event) {

  if (event.target != dropdown && event.target.parentNode != dropdown && event.target != hamburger) {
    dropdown.style.display = "none";

    document.getElementById("hamburger")
      .name = "menu-outline";
  }

});

//Hide navbar on scroll down

window.onscroll = function() {
  
  var currentScrollPos = window.pageYOffset;
  
  if (prevScrollpos > currentScrollPos) {
    
    document.getElementById("navbar")
      .style.top = "0"
    
  } else {
    
    document.getElementById("navbar")
      .style.top = "-150px";
    
    dropdown.style.display = "none";
    
    document.getElementById("hamburger")
      .name = "menu-outline";
    
  }
  
  prevScrollpos = currentScrollPos;
  
}