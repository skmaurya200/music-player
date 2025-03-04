// window.alert("HELLO")
var audio = document.querySelector('#outer>audio');
var image = document.querySelector("#outer>img");
var title = document.querySelector("#outer>p");
var i=0;
var songs =[
    {
        "title": "Pahle bhi..",
        "image": "pehle.webp",
        "audio": "song1.mp3"
    },
    {
        "title": "Soulmate....",
        "image": "soulmate.jpg",
        "audio": "song2.mp3"
    },
    {
        "title": "ishq....",
        "image": "ishq.jpg",
        "audio": "song3.mp3"
    }
]

function aplay(){
    audio.play();
    document.querySelector("#outer>div>i.fa-pause-circle").style.display="inline";
    document.querySelector("#outer>div>i.fa-play-circle").style.display="none";
}
function apause(){
    audio.pause();
    document.querySelector("#outer>div>i.fa-pause-circle").style.display="none";
    document.querySelector("#outer>div>i.fa-play-circle").style.display="inline";
}
function next()
{
    i=i+1;
    if(i>=songs.length){
        i=0;
    }
    title.innerHTML=songs[i].title;
    image.src=`img/${songs[i].image}`;
    audio.src=`music/${songs[i].audio}`;
    aplay(); 
}
function prev()
{
    i=i-1;
    if(i<0){
        i=songs.length-1;
    }
    title.innerHTML=songs[i].title;
    image.src=`img/${songs[i].image}`;
    audio.src=`music/${songs[i].audio}`;
    aplay();
}