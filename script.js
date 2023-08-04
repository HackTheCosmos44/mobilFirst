let nav = document.querySelector("nav");
let navClass = nav.classList;
let icon = document.querySelector("label>i");
let iconClass = icon.classList;


document.querySelector("#menuBurger").addEventListener("click", () =>{
    navClass.toggle("displayNav");
    iconClass.toggle('fa-bars');
    iconClass.toggle('fa-square-xmark');
})