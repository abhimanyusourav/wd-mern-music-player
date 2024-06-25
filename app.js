const playIcon = document.querySelector("#play")
const audioFile = document.querySelector("audio")

let isAudioPlaying = false

function playAudio() {
    audioFile.play()
    isAudioPlaying = true
    playIcon.classList.replace("fa-play", "fa-pause")
}

function pauseAudio() {
    audioFile.pause()
    isAudioPlaying = false
    playIcon.classList.replace("fa-pause", "fa-play")
}

playIcon.addEventListener("click", function () {
    // Logic to play & pause audio
    if (isAudioPlaying) {
        pauseAudio()
    } else {
        playAudio()
    }
})

const myImage = document.querySelector("img")
const mySongName = document.querySelector("h1")
const mySingerName = document.querySelector("h2")

const songsData = [
    {
        image: "images/image2.jpg",
        audio: "audios/audio2.mp3",
        singerName: "DEF Singer",
        songName: "DEF Song"
    },
    {
        image: "images/image3.jpg",
        audio: "audios/audio3.mp3",
        singerName: "GHI Singer",
        songName: "GHI Song"
    },
    {
        image: "images/image4.jpg",
        audio: "audios/audio4.mp3",
        singerName: "JKL Singer",
        songName: "JKL Song"
    }
]

const forwardIcon = document.querySelector("#forward")

function changeData(info) {
    // Logic to change the data
    myImage.src = info.image
    audioFile.src = info.audio
    mySongName.textContent = info.songName
    mySingerName.textContent = info.singerName
}

let songIndex = 0

forwardIcon.addEventListener("click", function () {
    if (songIndex > songsData.length - 1) {
        songIndex = 0
    }

    changeData(songsData[songIndex])
    playAudio()
    songIndex++
})

const myTotalTime = document.querySelector(".totalTime")
const myCurrentTime = document.querySelector(".currentTime")
const myMovableContainer = document.querySelector(".movableContainer")

audioFile.addEventListener("timeupdate", function (output) {
    let fetchedCurrentTime = output.srcElement.currentTime;
    let fetchedDuration = output.srcElement.duration;

    let percentageOfTotalAudioPlayed = fetchedCurrentTime / fetchedDuration * 100

    myMovableContainer.style.width = `${percentageOfTotalAudioPlayed}%`

    let durationInMinutes = Math.floor(fetchedDuration / 60)
    let durationInSeconds = Math.floor(fetchedDuration % 60)

    myTotalTime.textContent = `${durationInMinutes}:${durationInSeconds}`

    let currentTimeInMinutes = Math.floor(fetchedCurrentTime / 60)
    let currentTimeInSeconds = Math.floor(fetchedCurrentTime % 60)

    if (currentTimeInSeconds < 10) {
        currentTimeInSeconds = `0${currentTimeInSeconds}`
    }

    myCurrentTime.textContent = `${currentTimeInMinutes}:${currentTimeInSeconds}`
})

const heartIcon = document.querySelector("#heart")

heartIcon.addEventListener("click", function () {
    heartIcon.style.color = "red"

    localStorage.setItem(mySongName.textContent, mySingerName.textContent)
})

const shuffleIcon = document.querySelector("#shuffle")

shuffleIcon.addEventListener("click", function () {
    let randomSongIndex = Math.floor(Math.random() * 3);

    changeData(songsData[randomSongIndex])
    playAudio()
})