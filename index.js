const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const main = document.getElementById("lost");

btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
    main.classList.toggle("hidden")
})