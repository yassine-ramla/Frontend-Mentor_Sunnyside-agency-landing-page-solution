const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("hide");
    menu.classList.toggle("show-flex");
})