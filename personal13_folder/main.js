const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('cover');

//Song titles
const songs = ['hey', 'summer', 'uklele']

//Keep track of the songs
let songIndex = 2

//Initially load song into DOM
loadSong(songs[songIndex])

// Update song details 
function loadSong(song) {
    title.innerText = song
    audio.src = `music/${mymusic}.mp3`
    cover.src = `../images/${jeungbal}.png`
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
}

function pauseSong() { 
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
}

// Event listeners 
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong() 
    } else {
        playSong()
    }
})