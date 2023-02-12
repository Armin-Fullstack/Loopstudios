const menuBtn = document.getElementById("menu-btn")
const mobileMenu = document.getElementById("mobile-menu")

const toggleBtn = () => {
    menuBtn.classList.toggle("open")
    mobileMenu.classList.toggle("flex")
    mobileMenu.classList.toggle("hidden")

}

menuBtn.addEventListener("click", toggleBtn)