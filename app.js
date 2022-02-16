var btnNo = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
var image = ["img/banana.png", "img/cereza.png", "img/piña.png", "img/uva.png", "img/kiwi.png", "img/manzana.png", "img/naranja.png", "img/pera.png"];
const modal = document.querySelector(".modal");
const cerrarModal = document.querySelector(".cerrar-modal");
for(var i=0; i<8; i++) {
    var choose1 = Math.floor(Math.random() * (btnNo.length));
    document.getElementById(btnNo[choose1]).style.backgroundImage="URL("+image[i]+")";
    btnNo.splice(choose1, 1);
    var choose2 = Math.floor(Math.random() * (btnNo.length));
    document.getElementById(btnNo[choose2]).style.backgroundImage="URL("+image[i]+")";
    btnNo.splice(choose2, 1);
}

var start = true, pre, preId, x=0;

function game(clickedId) {
    if(start == true) {
        document.getElementById(clickedId).style.transform = "rotateY(180deg)";
        preId = clickedId;
        document.getElementById(clickedId).style.transition = "transform 0.8s";
        var url = document.getElementById(document.getElementById(clickedId).lastElementChild.id).style.backgroundImage;
        pre = url.substring(4, url.length-1);
        start = false;
    } else {
        document.getElementById(clickedId).style.transform = "rotateY(180deg)";
        document.getElementById(clickedId).style.transition = "transform 0.8s";
        setTimeout(() => {
            var url = document.getElementById(document.getElementById(clickedId).lastElementChild.id).style.backgroundImage;
            if(url.substring(4, url.length-1) == pre) {
                document.getElementById(preId).remove();
                document.getElementById(clickedId).remove();
                x = x + 2;
                if(x == 16) {
                    // alert("Game Completed!");
                    modal.style.display = "block";
                }
                start = true;
            } else {
                document.getElementById(preId).style.transform = "rotateY(360deg)";
                document.getElementById(clickedId).style.transform = "rotateY(360deg)";
                start = true;
            }
        }, 800);
    }
}

cerrarModal.addEventListener("click", () => {
    modal.remove();
});