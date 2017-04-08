function nowaFunnkcja() {
    
    alert('kliknales w paragraf');
}

var parSecond = document.getElementById('parSecond');
function changeBackground() {
    parSecond.style.backgroundColor = "#00ff00";
}

function changeBackgroundDB() {
    parSecond.style.backgroundColor = "#00ff00";
}


parSecond.onclick = changeBackground;
parSecond.ondblclick = changeBackgroundDB;