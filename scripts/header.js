let burger = document.getElementById("burger");
var myNav = document.getElementById('navbar');

burger.addEventListener("click", () => {
  burger.classList.toggle("changed");
});

window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) 
    {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else 
    {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};