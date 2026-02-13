/* 🎵 PLAYLIST */
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
  songName.innerText = songs[songIndex].name;
}
loadSong();

function togglePlay() {
  audio.paused ? audio.play() : audio.pause();
}
function nextSong() {
  songIndex = (songIndex + 1) % songs.length;
  loadSong();
  audio.play();
}
function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong();
  audio.play();
}

/* 📸 SLIDE DE FOTO (UNA A LA VEZ) */
const fotos = ["fotos/1.jpg", "fotos/2.jpg", "fotos/3.jpg"];
let fotoIndex = 0;
const foto = document.getElementById("foto");
let startX = 0;

foto.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

foto.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) cambiarFoto(1);
  if (endX - startX > 50) cambiarFoto(-1);
});

function cambiarFoto(dir) {
  fotoIndex = (fotoIndex + dir + fotos.length) % fotos.length;
  foto.src = fotos[fotoIndex];
}

/* 🌸 EFECTOS (EXCESO CONTROLADO) */
const effects = document.querySelector(".effects");

const icons = [
  "🌷","🌷","🌷","🌷","🌷", // MUCHOS tulipanes
  "❄️","❄️","❄️",         // flores lluvia blancas
  "⭐","⭐","⭐","⭐",       // estrellas
  "🤍"                    // pocos corazones
];

setInterval(() => {
  const span = document.createElement("span");
  span.innerText = icons[Math.floor(Math.random()*icons.length)];
  span.style.left = Math.random()*100+"vw";
  effects.appendChild(span);

  // corazones especiales
  if(span.innerText==="🤍") {
    span.style.fontSize = "22px";
    setTimeout(()=> explotar(), 6000);
  }

  setTimeout(()=>span.remove(),7000);
}, 200);

/* 💥 EXPLOSIÓN SAYURI ✨ */
function explotar() {
  const titulo = document.getElementById("titulo");
  titulo.innerText = "SAYURI ✨";
}


alert("SI CONTINUA VERA MUCHO EXCESO DE CARIÑO XD")



