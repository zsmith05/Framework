var modal = document.getElementById("modal");

var btn = document.getElementById("modbtn");

var closed = document.getElementById("close");

function drop(){
    modal.style.display = "block";
    btn.style.display = "none"
}

function closeModal() {
    modal.style.display = "none";
    btn.style.display = "block";
}