const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");
const imgPrev = document.getElementById("img-previu");

const allSongs = [
  {
    id: 0,
    title: "MÍRAME ",
    artist: "Blessd",
    img: "https://cdns-images.dzcdn.net/images/cover/22dcc531d6cac5d095a304ef19c5252c/0x1900-000000-80-0-0.jpg",
    src: "https://firebasestorage.googleapis.com/v0/b/base-batos-shop.appspot.com/o/BLESSD%20%20OVY%20ON%20THE%20DRUMS%20-%20M%C3%8DRAME%20%20(VIDEO%20OFICIAL).mp3?alt=media&token=d06b4816-54e8-47f3-a95d-a7226de1491b",
  },
  {
    id: 1,
    title: "LEJANÍA",
    artist: "Ryan Castro, Blessd",
    img: "https://lh3.googleusercontent.com/_1vDGSik0ccl0WN0JEQKas2-1UQuU4b18SEeDxxc8bCDsTjTveqrac4GpGXW-L60aSOU19ZXZrlnqo6j",
    src: "https://firebasestorage.googleapis.com/v0/b/base-batos-shop.appspot.com/o/Ryan%20Castro%20X%20Blessed%20%20%20LEJAN%C3%8DA%20%20(Video%20Oficial).mp3?alt=media&token=203e4bde-6f3b-44f9-9e83-b1e974ce5abc",
  },
  {
    id: 2,
    title: "JORDAN",
    artist: "Ryan Castro",
    img: "https://lh3.googleusercontent.com/ThtLrH3T9BYgYwS1ugPCumwvcuu7F1pR7fzPVwYP1Qxy7563LQr98NjIN8-0sjc9kvAIwQMomey0VOc",
    src: "https://firebasestorage.googleapis.com/v0/b/base-batos-shop.appspot.com/o/Ryan%20Castro%20-%20JORDAN%20%20(Video%20Oficial).mp3?alt=media&token=ce8cd8c6-8e9e-46d5-9708-e1d69b16c96f",
  },
  {
    id: 3,
    title: "MONASTERY",
    artist: "Ryan Castro, Feid",
    img: "https://lh3.googleusercontent.com/7mT8B11lt1zNQAENDO3Kp_C_asfgh9zANeEWpfvog5z41BUtVSAu-zbjzBeDW1-KGY2hI9bZnCDRjuY3",
    src: "https://firebasestorage.googleapis.com/v0/b/base-batos-shop.appspot.com/o/Ryan%20Castro%2C%20Feid%20-%20Monastery%20(V%C3%ADdeo%20Oficial).mp3?alt=media&token=6a2498d6-dd87-4517-9595-5209c8c999b0",
  },
  {
    id: 4,
    title: "MOJANDO ASIENTOS",
    artist: "Maluma",
    img: "https://lh3.googleusercontent.com/7QwJBYc4USOM_fTbeL8syFhU2RgjQwTmGF3_g-ZKBe-VyRMBuPqXd_srTwzTWp2dGEHZgm1NNCjRfbY",
    src: "https://firebasestorage.googleapis.com/v0/b/base-batos-shop.appspot.com/o/Maluma%20-%20Mojando%20Asientos%20(Official%20Video)%20ft.%20Feid.mp3?alt=media&token=884a52a9-18ea-467e-9ad4-6566434ccc75",
  },
  {
    id: 5,
    title: "POLOS OPUESTOS",
    artist: "Blessd, Kris R",
    img: "https://lh3.googleusercontent.com/eISawoDQayfvHTCeiJtiOak2GrIlCqpsH8brBDI_mUU2JfrcFb0oJCVHErnbBa1dwqcMQ1aeEaaRUwHIKA",
    src: "https://firebasestorage.googleapis.com/v0/b/base-batos-shop.appspot.com/o/BLESSD%20%20KRIS%20R%20%20POLOS%20OPUESTOS%20REMIX%20%20(VIDEO%20OFICIAL).mp3?alt=media&token=af7acb98-7633-42fc-add4-7a746820f0ff",
  },
  {
    id: 6,
    title: "SOLTERA",
    artist: "Blessd, Westcol",
    img: "https://lh3.googleusercontent.com/RYcWKqAH0RHcKjsgAKLiOLVzls-ss86i-JV0iVZp87zWNew39Vy5tj8JBu5891Lqz_Td4bSC4d-qah2j",
    src: "https://firebasestorage.googleapis.com/v0/b/base-batos-shop.appspot.com/o/W%20Sound%2001%20Soltera%20-%20Blessd%2C%20Westcol%2C%20Ovy%20On%20The%20Drums%20(Official%20Video).mp3?alt=media&token=4013433e-0fe6-444d-b4f0-cf200416a825",
  },
  {
    id: 7,
    title: "LUNA",
    artist: "Feid",
    img: "https://lh3.googleusercontent.com/MzDDz4pGJS1ExeCepXu9mmq3zPTW3t0lDeZyHCZ9mwrqptdt8EYq7tQi8KKiGipS9cw-1pob3j0eYP2S",
    src: "https://firebasestorage.googleapis.com/v0/b/base-batos-shop.appspot.com/o/Feid%2C%20ATL%20Jacob%20-%20LUNA%20(Official%20Video).mp3?alt=media&token=b0d5da05-5397-4739-87c5-b518607c4603",
  },
  {
    id: 8,
    title: "UWAIE",
    artist: "Kapo",
    img: "https://lh3.googleusercontent.com/MBFfcA5FPQuAX8x4ae480bcUWS1uKiFk1GmhK27IR24BWavdlNlynChCbRlW8jwQGytsgneD0njb2zVpMA",
    src: "https://firebasestorage.googleapis.com/v0/b/base-batos-shop.appspot.com/o/UWAIE%20-%20Kapo%20(Video%20Oficial).mp3?alt=media&token=81eb4ea4-62e6-4ef7-a52a-71655c40d8a4",
  },
  {
    id: 9,
    title: "NORMAL",
    artist: "Feid",
    img: "https://lh3.googleusercontent.com/8LCzwiXL9wl0bFeobdtspoXjOZiGO-Fvg3cwq4Sl21sym59AlVgVQUDUjJ3EgCU66JqJzLUKhQdOHoOlUg",
    src: "https://firebasestorage.googleapis.com/v0/b/base-batos-shop.appspot.com/o/Feid%20-%20Normal%20(Official%20Video).mp3?alt=media&token=7709b0a4-7897-461d-8d52-16370472a2b6",
  },
];

const audio = new Audio();
let userData = {
  songs: [...allSongs],
  currentSong: null,
  songCurrentTime: 0,
};

// Selecciona el contenedor donde se mostrará el tiempo actual y la duración total de la canción
const timeDisplay = document.getElementById("time-display"); // Asegúrate de tener este elemento en tu HTML

// Escucha el evento 'timeupdate' para actualizar el tiempo actual de la canción
audio.addEventListener("timeupdate", () => {
  const currentTime = formatTime(audio.currentTime);
  const totalTime = formatTime(audio.duration) || "0:00";

  // Actualizo el contenido de timeDisplay solo si la duración es válida
  if (!isNaN(audio.duration)) {
    timeDisplay.textContent = `${currentTime} / ${totalTime}`;
  }
});

// Función para formatear el tiempo en minutos y segundos
const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

// Reproduce la canción seleccionada por su ID
const playSong = (id) => {
  const song = userData?.songs.find((song) => song.id === id);
  audio.src = song.src;
  audio.title = song.title;

  if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = userData?.songCurrentTime;
  }
  userData.currentSong = song;
  playButton.classList.add("playing");

  highlightCurrentSong();
  setPlayerDisplay();
  setPlayButtonAccessibleText();
  audio.play();
};

// Pausa la canción actual y guarda el tiempo de reproducción
const pauseSong = () => {
  userData.songCurrentTime = audio.currentTime;

  playButton.classList.remove("playing");
  audio.pause();
};

// Reproduce la siguiente canción en la lista
const playNextSong = () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    const currentSongIndex = getCurrentSongIndex();
    const nextSong = userData?.songs[currentSongIndex + 1];

    playSong(nextSong.id);
  }
};

// Reproduce la canción anterior en la lista
const playPreviousSong = () => {
  if (userData?.currentSong === null) return;
  else {
    const currentSongIndex = getCurrentSongIndex();
    const previousSong = userData?.songs[currentSongIndex - 1];

    playSong(previousSong.id);
  }
};

// Mezcla aleatoriamente las canciones de la lista
const shuffle = () => {
  userData?.songs.sort(() => Math.random() - 0.5);
  userData.currentSong = null;
  userData.songCurrentTime = 0;

  renderSongs(userData?.songs);
  pauseSong();
  setPlayerDisplay();
  setPlayButtonAccessibleText();
};

// Elimina una canción de la lista por su ID
const deleteSong = (id) => {
  if (userData?.currentSong?.id === id) {
    userData.currentSong = null;
    userData.songCurrentTime = 0;

    pauseSong();
    setPlayerDisplay();
  }

  userData.songs = userData?.songs.filter((song) => song.id !== id);
  renderSongs(userData?.songs);
  highlightCurrentSong();
  setPlayButtonAccessibleText();

  if (userData?.songs.length === 0) {
    const resetButton = document.createElement("button");
    const resetText = document.createTextNode("Reset Playlist");

    resetButton.id = "reset";
    resetButton.ariaLabel = "Reset playlist";
    resetButton.appendChild(resetText);
    playlistSongs.appendChild(resetButton);

    resetButton.addEventListener("click", () => {
      userData.songs = [...allSongs];

      renderSongs(sortSongs());
      setPlayButtonAccessibleText();
      resetButton.remove();
    });
  }
};

// Actualiza la visualización del reproductor con la canción actual
const setPlayerDisplay = () => {
  const playingSong = document.getElementById("player-song-title");
  const songArtist = document.getElementById("player-song-artist");
  const currentTitle = userData?.currentSong?.title;
  const currentArtist = userData?.currentSong?.artist;

  playingSong.textContent = currentTitle ? currentTitle : "";
  songArtist.textContent = currentArtist ? currentArtist : "";
};

// Resalta la canción actualmente en reproducción
const highlightCurrentSong = () => {
  const playlistSongElements = document.querySelectorAll(".playlist-song");
  const songToHighlight = document.getElementById(
    `song-${userData?.currentSong?.id}`
  );

  playlistSongElements.forEach((songEl) => {
    songEl.removeAttribute("aria-current");
  });

  if (songToHighlight) {
    songToHighlight.setAttribute("aria-current", "true");
    imgPrev.src = allSongs[userData.currentSong.id].img;
  }
};

// Renderiza las canciones en el HTML
const renderSongs = (array) => {
  const songsHTML = array
    .map((song) => {
      return `
      <li id="song-${song.id}" class="playlist-song">
      <button class="playlist-song-info" onclick="playSong(${song.id})">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
      </button>
      <button onclick="deleteSong(${song.id})" class="playlist-song-delete" aria-label="Delete ${song.title}">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
        </button>
      </li>
      `;
    })
    .join("");

  playlistSongs.innerHTML = songsHTML;
};

// Establece el texto accesible para el botón de reproducción
const setPlayButtonAccessibleText = () => {
  const song = userData?.currentSong || userData?.songs[0];

  playButton.setAttribute(
    "aria-label",
    song?.title ? `Play ${song.title}` : "Play"
  );
};

const getCurrentSongIndex = () =>
  userData?.songs.indexOf(userData?.currentSong);

playButton.addEventListener("click", () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    playSong(userData?.currentSong.id);
  }
});

pauseButton.addEventListener("click", pauseSong);

nextButton.addEventListener("click", playNextSong);

previousButton.addEventListener("click", playPreviousSong);

shuffleButton.addEventListener("click", shuffle);

// Reproduce la siguiente canción cuando la actual termina
audio.addEventListener("ended", () => {
  const currentSongIndex = getCurrentSongIndex();
  const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;

  if (nextSongExists) {
    playNextSong();
  } else {
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    pauseSong();
    setPlayerDisplay();
    highlightCurrentSong();
    setPlayButtonAccessibleText();
  }
});

// Ordena las canciones en la lista alfabéticamente por título
const sortSongs = () => {
  userData?.songs.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }

    if (a.title > b.title) {
      return 1;
    }

    return 0;
  });

  return userData?.songs;
};

// Renderiza las canciones ordenadas y actualiza el texto accesible del botón de reproducción
renderSongs(sortSongs());
setPlayButtonAccessibleText();
