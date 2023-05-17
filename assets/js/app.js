let cl =console.log;

const toggleMenu = document.getElementById("toggleMenu");
const navbar = document.getElementById("navbar");


const onToggleMenu = () => {
    // cl('click working');
    navbar.classList.toggle("visible")
}


toggleMenu.addEventListener("click", onToggleMenu)