const fotos = [
    "fotos/foto1.jpg",
    "fotos/foto2.jpg",
    "fotos/foto3.jpg"
];

let indice = 0;
const img = document.getElementById("fotoGrande");

function siguiente() {
    indice = (indice + 1) % fotos.length;
    cambiarFoto();
}

function anterior() {
    indice = (indice - 1 + fotos.length) % fotos.length;
    cambiarFoto();
}

function cambiarFoto() {
    img.style.opacity = 0;
    setTimeout(() => {
        img.src = fotos[indice];
        img.style.opacity = 1;
    }, 300);
}

/* MÚSICA */
const audio = document.getElementById("audio");
const play = document.getElementById("play");
const tiempo = document.getElementById("tiempo");

play.onclick = () => {
    if (audio.paused) {
        audio.play();
        play.textContent = "⏸";
    } else {
        audio.pause();
        play.textContent = "▶";
    }
};

audio.ontimeupdate = () => {
    let min = Math.floor(audio.currentTime / 60);
    let sec = Math.floor(audio.currentTime % 60);
    if (sec < 10) sec = "0" + sec;
    tiempo.textContent = `${min}:${sec}`;
};

alert("SI CONTINUA VERA MUCHO EXCESO DE CARIÑO XD")


