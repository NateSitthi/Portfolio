document.addEventListener("DOMContentLoaded", (event) => {
    console.log("You're not suppose to be here!")
});
function openSidebar() {
    document.getElementById('sidebar').style.display = "flex";
    let animateleft = document.getElementById('sidebar')
    animateleft.classList.remove("w3-animate-right")
    animateleft.classList.add("w3-animate-left")
}
function closeSidebar() {
    document.getElementById('sidebar').style.display = "none";
    let animateleft = document.getElementById('sidebar')
    animateleft.classList.remove("w3-animate-left")
    animateleft.classList.add("w3-animate-right")
}