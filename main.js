const menuIcon =document.getElementById("menu-icon");
const menuList =document.getElementById("navBar");

menuIcon.onclick=()=>{
    menuIcon.classList.toggle("fa-times");
    menuList.classList.toggle("active");
}
window.onscroll=()=>{
    menuIcon.classList.remove("fa-times");
    menuList.classList.remove("active");
}