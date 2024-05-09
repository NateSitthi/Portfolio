document.addEventListener("DOMContentLoaded", (event) => {
    console.log("You're not suppose to be here!")
});
function openSidebar() {
    document.getElementById('sidebar').style.display = "flex";
    let animateleft = document.getElementById('sidebar')
    animateleft.classList.add("animate-left")

}
function closeSidebar() {
    document.getElementById('sidebar').style.display = "none";
    let animateleft = document.getElementById('sidebar')
    animateleft.classList.remove("animate-left")

}