console.log("Welcome to my GanaSuno");

let songIndex=0;
let music=document.querySelector("audio");
let audioElement=new Audio('song1.mp3');
let masterplay=document.getElementById('masterplay');
let progressbar=document.getElementById('progressbar');

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterplay.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');

    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log("Time update");
    progress = (audioElement.currentTime/audioElement.duration)*100;
    console.log(progress);
    console.log(audioElement.duration);
    progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{
    audioElement.currentTime=progressbar.value*audioElement.duration/100;
})





let cards = document.querySelectorAll(".card div");
cards.forEach((e) => {
    let allAudio = document.querySelectorAll(".card div audio");
    e.addEventListener("click", function () {
        let flag = false
        let audio = this.querySelector("audio");
        allAudio.forEach((el) => {
            if (!el.paused) {

                flag=audio==el?true:false;
                el.pause()
                el.parentNode.classList.remove("active")
            }
        })
        if(audio.paused&&!flag){
            audio.parentNode.classList.add("active")
            audio.play()
        }
    })
})
function Toggle(audio, elm) {
    if (audio.paused) {
        if (elm.classList.hasOwnProperty("active")) {
            elm.classList.remove("active")
        }
    } else {
        if (!elm.classList.hasOwnProperty("active")) {
            elm.classList.add("active")
        }
    }
}