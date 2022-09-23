var modal = document.getElementsByClassName("modal");

var btn = document.getElementsByClassName("modbtn");

var close = document.getElementsByClassName("close");

btn.onclick = function() {
    modal.style.display = "block";
}


close.onclick = function() {
    modal.style.display = "none";
}