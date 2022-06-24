const toggleBtn = document.querySelector(".open-btn");
const navMenu = document.querySelector("-nav-menu");
const collapse = document.querySelector(".collapse");
const close = document.querySelector(".close-btn")

toggleBtn.addEventListener("click", () => {
    collapse.classList.toggle("hide")
});
close.addEventListener("click", () => {
    collapse.classList.toggle("hide")
})


const navLink = document.querySelectorAll(".nItem");
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    collapse.classList.toggle("hide");
   

}

