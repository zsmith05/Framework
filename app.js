var modal = document.getElementsByClassName("modal");

var btn = document.getElementsByClassName("modbtn");

var close = document.getElementsByClassName("close");

function drop(){
    document.getElementsByClassName("modal").style.display="block";
}

close.onclick = function() {
    modal.style.display = "none";
}