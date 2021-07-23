const musicContainer = document.getElementByID('music-container');
const playBtn = document.getElementByID('play');
const prevBtn = document.getElementByID('prev');
const nextBtn = document.getElementByID('next');

const audio = document.getElementByID('audio');
const progress = document.getElementByID('progress');
const progressContainer = document.getElementByID('progress-container');
const title = document.getElementByID('title');
const cover = document.getElementByID('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

//Song titles
const songs = ['hey', 'summer', 'mymusic'];

//Keep track of the songs
let songIndex = 2;

//Initially load song into DOM
loadSong(songs[songIndex]);

// Update song details 
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${mymusic}.mp3`;
    cover.src = `../images/${jeungbal}.png`;
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play()
}

function pauseSong() { 
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause()
}

function prevSong() {
    songIndex--;

    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

function nextSong() {
    songIndex++;

    if(songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();

}

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
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

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    
    audio.currentTime = (clickX / width) * duration
}

// Change song events

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextsong)

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)