var video = document.getElementById("background-video");

var btn = document.getElementById("btnVideo");

btn.addEventListener("click",()=>{
    if (video.paused) {
        video.play();      
        btn.innerHTML = "Pause II";       
        } else {       
        video.pause();
        btn.innerHTML = "Play ▶";}
})