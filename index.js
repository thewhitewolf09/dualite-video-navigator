let vidEl = document.getElementById("myVideo");
let vidTitleEl = document.getElementById("video-title");
let topRightContainerEl = document.getElementsByClassName("top-right-container")[0];
const skipEl = document.getElementById('skipEl');
let statusEl =false;
const videoListEl = [
    {
        vid_name: 'Earth Rotating | In the space | Free HD Video - no copyright',
        vid_source: "/src/vid1.mp4"
    },
    {
        vid_name: 'Earth\'s Rotation Visualized in a Timelapse of the Milky Way Galaxy - 4K',
        vid_source: "/src/vid2.mp4"
    },
    {
        vid_name: 'Viewing the Earth’s Rotation from Space',
        vid_source: "/src/vid3.mp4"
    }
]

vidTitleEl.innerHTML=videoListEl[0].vid_name;



vidEl.onloadedmetadata = function myVideo() {

    setInterval(() => {
        if ((statusEl != true)&&(Math.floor(vidEl.currentTime) >= Math.floor(vidEl.duration / 2))) {
            vidEl.pause();
            topRightContainerEl.style.display = 'block';
            skipEl.style.display = 'block';
            skipEl.addEventListener("click", () =>{
                topRightContainerEl.style.display = 'none';
                vidEl.play();
                statusEl = true;
            })
        }

        if (Math.floor(vidEl.currentTime) >= Math.floor(vidEl.duration)) {
            topRightContainerEl.style.display = 'block';
            skipEl.style.display = 'none';
        }

    }, 1)

}


function changeVideo(vid_num){
    if(vid_num===1){
        topRightContainerEl.style.display = 'none';
        vidTitleEl.innerHTML=videoListEl[1].vid_name;
        vidEl.src = videoListEl[1].vid_source;
        topRightContainerEl.style.display = 'none';
        vidEl.play()
        statusEl = false;
    }else if(vid_num===2){
        topRightContainerEl.style.display = 'none';
        vidTitleEl.innerHTML=videoListEl[2].vid_name;
        vidEl.src = videoListEl[2].vid_source;
        topRightContainerEl.style.display = 'none';
        vidEl.play()
        statusEl = false;
    }
}


