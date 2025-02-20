let menu = document.querySelector(".fa-bars");
let navbarlinks = document.querySelector(".navbar .container .nav-box .menu-top .nav-menu");

menu.onclick = function (){
    menu.classList.toggle("fa-xmark");
    navbarlinks.classList.toggle("active")
}


