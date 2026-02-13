/* =======================
   🎵 PLAYLIST DE MÚSICA
======================= */

const songs = [
  { name: "Canción 1", file: "musica/cancion1.mp3" },
  { name: "Canción 2", file: "musica/cancion2.mp3" },
  { name: "Canción 3", file: "musica/cancion3.mp3" }
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

function next() {
  songIndex = (songIndex + 1) % songs.length;
  loadSong();
  audio.play();
}

function prev() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong();
  audio.play();
}

/* =======================
   📸 SLIDE DE FOTOS (SUAVE)
======================= */

const fotos = [
  "fotos/1.jpg",
  "fotos/2.jpg",
  "fotos/3.jpg"
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



alert("SI CONTINUA VERA MUCHO EXCESO DE CARIÑO XD")