
/* =======================
   🎵 PLAYLIST DE MÚSICA
======================= */

const songs = [
  { name: "Nuestra canción 💛", file: "musica/musica.mp3" }
];

let songIndex = 0;
const audio = document.getElementById("audio");
const songName = document.getElementById("song-name");

function loadSong() {
  audio.src = songs[songIndex].file;
  songName.textContent = songs[songIndex].name;
}
loadSong();

function togglePlay() {
  audio.paused ? audio.play() : audio.pause();
}

function next() {}
function prev() {}




/* =======================
   📸 SLIDE DE FOTOS (SUAVE)
======================= */

const fotos = [
  "fotos/1.jpg",
  "fotos/2.jpg",
  "fotos/3.jpg",
  "fotos/4.jpg"

];

let fotoIndex = 0;
const foto = document.getElementById("foto");
let startX = 0;

foto.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

foto.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) cambiarFoto(1);
  if (endX - startX > 50) cambiarFoto(-1);
});

function cambiarFoto(dir) {
  foto.style.opacity = 0;
  foto.style.transform = "translateY(40px) rotate(-8deg)";

  setTimeout(() => {
    fotoIndex = (fotoIndex + dir + fotos.length) % fotos.length;
    foto.src = fotos[fotoIndex];

    foto.style.opacity = 1;
    foto.style.transform = "translateY(0) rotate(-4deg)";
  }, 500);
}

/* =======================
   🌼 EFECTOS HACIA ARRIBA
======================= */

const emojis = [
  "🌷","🌷","🌷","🌷","🌷",   // muchos tulipanes AMARILLOS
  "❄️","❄️","❄️",           // flores blancas
  "⭐","⭐","⭐","⭐",         // estrellas blancas
  "🤍"                      // pocos corazones
];

setInterval(() => {
  const span = document.createElement("span");
  span.className = "float";
  span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  span.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(span);

  if (span.textContent === "🤍") {
    controlarCorazones();
  }

  setTimeout(() => span.remove(), 8000);
}, 300);

/* =======================
   🤍 CORAZONES → SAYURI ✨
======================= */

let heartCount = 0;
const maxHearts = 10;
const titulo = document.getElementById("titulo");

function controlarCorazones() {
  heartCount++;

  // cuando 6 corazones llegan arriba
  if (heartCount === 6) {
    explotarSayuri();
  }

  // reinicio suave
  if (heartCount >= maxHearts) {
    setTimeout(() => heartCount = 0, 3000);
  }
}

function explotarSayuri() {
  titulo.style.transform = "scale(1.2)";
  titulo.textContent = "SAYURI ✨";

  setTimeout(() => {
    titulo.style.transform = "scale(1)";
  }, 800);
}

/* =======================
   🎬 ANIMACIÓN EN ORDEN
======================= */

window.addEventListener("load", () => {
  const player = document.getElementById("player");
  const phrase = document.getElementById("phrase");
  const name = document.getElementById("name");

  setTimeout(() => {
    player.classList.remove("hidden");
    player.classList.add("show");
  }, 500);

  setTimeout(() => {
    phrase.classList.remove("hidden");
    phrase.classList.add("show");
  }, 1500);

});


document.body.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    document.getElementById("playBtn").textContent = "⏸";
  }
}, { once: true });



/* =======================
   ⏱️ SAYURI APARECE CON LA MÚSICA
======================= */

const audioPlayer = document.getElementById("audio");
const sayuri = document.getElementById("sayuri");

// segundo exacto donde quieres que aparezca (ajústalo escuchando la canción)
const momentoClave = 2;

audioPlayer.addEventListener("timeupdate", () => {
  if (audioPlayer.currentTime >= momentoClave) {
    sayuri.classList.remove("hidden");
    sayuri.classList.add("show");
  }
});

alert("ATTENCION, ESTA PAGINA ESTA CREADA UNICAMENTE PARA LA SEÑORITA SAYURI AMELI, SI USTED ES LA SEÑORITA SAYURI, PORFAVOR ACEPTE Y DESEAMOS QUE DISFRUTE DEL CONTENIDO ✨")




document.getElementById("verVideo").addEventListener("click", function () {

  const contenedor = document.getElementById("videoContainer");
  const video = document.getElementById("miVideo");

  contenedor.style.display = "block";
  video.play();

  this.style.display = "none";
});








