function menuToggle(){
    var nav = document.getElementById('full-menu');
    var toggle = document.getElementById('toggle');
    nav.classList.toggle("active");
    toggle.classList.toggle("active");
}

function menuClosed(){
    var nav = document.getElementById('full-menu');
    var closeBar = document.getElementById('close-bar');
    nav.classList.toggle("active");
    closeBar.classList.toggle("closed");
}