// hamburger menu comes to life
const hamburger = document.querySelector(".hamburger")
const sidebar = document.querySelector(".sidebar")

hamburger.addEventListener("click", ()=> {
    sidebar.classList.toggle("active");
})

//sidebar height fix on mobile

function setSidebarHeight() {
    var viewportHeight = window.innerHeight;
    document.querySelector('.sidebar').style.height = viewportHeight + 'px';
}

document.addEventListener('DOMContentLoaded', setSidebarHeight);
window.addEventListener('resize', setSidebarHeight);
