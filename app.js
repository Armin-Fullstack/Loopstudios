const menuBtn = document.getElementById("menu-btn")

const toggleBtn = () => {
    menuBtn.classList.toggle("open")
}

menuBtn.addEventListener("click" , toggleBtn)

