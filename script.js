let songs =[
    {songName:"Cheri Cheri Lady (1985)",albumname:"Lets Talk About Love", filepath:"./songs/1.mp3", coverPath:"./songcoversub/Cheri_Cheri_Lady.jpg"},
    {songName:"You Are Not Alone (1985)",albumname:"Alone", filepath:"./songs/2.mp3", coverPath:"./songcoversub/you_are_not_alone.jpg"},
    {songName:"Brother Louie Mix (1986)",albumname:"Ready By Romance", filepath:"./songs/3.mp3", coverPath:"./songcoversub/brother_louie.jpg"},
    {songName:"You're My Heart, You're My Soul(1985)", albumname:"The First Album",filepath:"./songs/4.mp3", coverPath:"./songcoversub/you_are_my_heart.jpg"},
    {songName:"Athlantis Is Calling (1986)",albumname:"Ready For Romance", filepath:"./songs/5.mp3", coverPath:"./songcoversub/Atlantis_is_calling.jpg"},
    {songName:"Just We Two (1986)", albumname:"Ready For Romance",filepath:"./songs/6.mp3", coverPath:"./songcoversub/just_we_two.jpg"},
    {songName:"Sexy Sexy Lover (1999)",albumname:"Alone", filepath:"./songs/7.mp3", coverPath:"./songcoversub/sexy_sexy_lover.jpg"},
    {songName:"Lucky Guy (1985)",albumname:"The First Album", filepath:"./songs/8.mp3", coverPath:"./songcoversub/lucky_guy.jpg"}
]


let songIndex=[0];
let audioElement =new Audio('./songs/1.mp3');
let masterPlay=document.querySelector("#masterplay");
let progressbar=document.querySelector("#progress");
let mainElement=document.querySelector("#main-cover")

// songs
let cherisong=document.querySelector("#chericheri");
let notalonesong=document.querySelector("#youarenotalone");
let brothersong=document.querySelector("#brotherlouie");
let myheartsong=document.querySelector("#youaremyheart");
let atlantissong=document.querySelector("#atlantiscalling");
let wetwosong=document.querySelector("#justwetwo");
let sexysong=document.querySelector("#sexysexylover");
let luckysong=document.querySelector("#luckyguy");

//selectig id
var songid1 = [notalonesong, brothersong, myheartsong, atlantissong, wetwosong, sexysong, luckysong];
var songid2 = [cherisong, brothersong, myheartsong, atlantissong, wetwosong, sexysong, luckysong];
var songid3 = [cherisong,notalonesong, myheartsong, atlantissong, wetwosong, sexysong, luckysong];
var songid4 = [cherisong,notalonesong, brothersong,  atlantissong, wetwosong, sexysong, luckysong];
var songid5 = [cherisong,notalonesong, brothersong, myheartsong, wetwosong, sexysong, luckysong];
var songid6 = [cherisong,notalonesong, brothersong, myheartsong, atlantissong, sexysong, luckysong];
var songid7 = [cherisong,notalonesong, brothersong, myheartsong, atlantissong, wetwosong, luckysong];
var songid8 = [cherisong,notalonesong, brothersong, myheartsong, atlantissong, wetwosong, sexysong];
//main image
let mainCover=document.querySelector("#mainimage");

//discription
let songTitle=document.querySelector("#songtitle");
let filmName=document.querySelector("#filmname");

//progress bar

audioElement.addEventListener("timeupdate",()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    progressbar.value=progress;
})

progressbar.addEventListener("change",()=>{
    audioElement.currentTime= progressbar.value*audioElement.duration/100
})

// event listners

masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }

})
//event listners to the corresponding songs
cherisong.addEventListener("click",()=>{
    songIndex=0;
    mainCover.src= songs[0].coverPath;
    audioElement.src=songs[0].filepath;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    // mainElement.style.animationPlayState='inherit';
    songTitle.innerHTML=songs[0].songName;
     filmName.innerHTML=songs[0].albumname;
     cherisong.style.border="2px solid white"
     cherisong.style.background="rgba(0, 0, 0, 0.753)"; 
     songid1.forEach(song => {
        song.style.border = "none";
      });
    
})

notalonesong.addEventListener("click",()=>{
    songIndex=1;
     mainCover.src= songs[1].coverPath;
     audioElement.src=songs[1].filepath;
     audioElement.play();
     masterPlay.classList.remove('fa-play');
     masterPlay.classList.add('fa-pause');
    //  mainElement.style.animationPlayState='running';
     songTitle.innerHTML=songs[1].songName;
     filmName.innerHTML=songs[1].albumname;
     notalonesong.style.background="rgba(0, 0, 0, 0.753)";
     notalonesong.style.border="2px solid white";
     songid2.forEach(song => {
        song.style.border = "none";
      });
     
})
brothersong.addEventListener("click",()=>{
    songIndex=2;
    mainCover.src= songs[2].coverPath;
    audioElement.src=songs[2].filepath;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    // mainElement.style.animationPlayState='running';
    songTitle.innerHTML=songs[2].songName;
    filmName.innerHTML=songs[2].albumname;
    brothersong.style.background="rgba(0, 0, 0, 0.753)";
    brothersong.style.border="2px solid white";
    songid3.forEach(song => {
       song.style.border = "none";
     });
})

myheartsong.addEventListener("click",()=>{
    songIndex=3;
    mainCover.src= songs[3].coverPath;
    audioElement.src=songs[3].filepath;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    // mainElement.style.animationPlayState='running';
    songTitle.innerHTML=songs[3].songName;
    filmName.innerHTML=songs[3].albumname;
    myheartsong.style.background="rgba(0, 0, 0, 0.753)";
    myheartsong.style.border="2px solid white";
    songid4.forEach(song => {
       song.style.border = "none";
     });
})
atlantissong.addEventListener("click",()=>{
    songIndex=4;
    mainCover.src= songs[4].coverPath;
    audioElement.src=songs[4].filepath;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    // mainElement.style.animationPlayState='running';
    songTitle.innerHTML=songs[4].songName;
    filmName.innerHTML=songs[4].albumname;
    atlantissong.style.background="rgba(0, 0, 0, 0.753)";
    atlantissong.style.border="2px solid white";
    songid5.forEach(song => {
       song.style.border = "none";
     });
})
wetwosong.addEventListener("click",()=>{
    songIndex=5;
    mainCover.src= songs[5].coverPath;
    audioElement.src=songs[5].filepath;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    // mainElement.style.animationPlayState='running';
    songTitle.innerHTML=songs[5].songName;
    filmName.innerHTML=songs[5].albumname;
    wetwosong.style.background="rgba(0, 0, 0, 0.753)";
    wetwosong.style.border="2px solid white";
    songid6.forEach(song => {
       song.style.border = "none";
     });
})
sexysong.addEventListener("click",()=>{
    songIndex=6;
    mainCover.src= songs[6].coverPath;
    audioElement.src=songs[6].filepath;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    // mainElement.style.animationPlayState='running';
    songTitle.innerHTML=songs[6].songName;
    filmName.innerHTML=songs[6].albumname;
    sexysong.style.background="rgba(0, 0, 0, 0.753)";
    sexysong.style.border="2px solid white";
    songid7.forEach(song => {
       song.style.border = "none";
     });
})
luckysong.addEventListener("click",()=>{
    songIndex=7;
    mainCover.src= songs[7].coverPath;
    audioElement.src=songs[7].filepath;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    // mainElement.style.animationPlayState='running';
    songTitle.innerHTML=songs[7].songName;
    filmName.innerHTML=songs[7].albumname;
    luckysong.style.background="rgba(0, 0, 0, 0.753)";
    luckysong.style.border="2px solid white";
    songid8.forEach(song => {
       song.style.border = "none";
     });
})
// forward and backward functioning
document.querySelector("#forward").addEventListener("click",()=>{
      
      if(songIndex>=7){
        songIndex=0;
      }
      else{
        songIndex +=1;
      }
        check();
      console.log(songIndex)
      audioElement.src=`./songs/${songIndex+1}.mp3`;
      audioElement.currentTime=0;
      audioElement.play();
      masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

})
document.querySelector("#backward").addEventListener("click",()=>{
  if(songIndex<=0){
    songIndex=7;
  }
  else{
    songIndex -=1;
  }
    check();
 
  console.log(songIndex)
  audioElement.src=`./songs/${songIndex+1}.mp3`;
  audioElement.currentTime=0;
  audioElement.play();
  masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

})

function check(){
  if(songIndex==0){
    songTitle.innerHTML=songs[0].songName;
    filmName.innerHTML=songs[0].albumname;
    mainCover.src= songs[0].coverPath;
    cherisong.style.border="2px solid white"
    cherisong.style.background="rgba(0, 0, 0, 0.753)"; 
    songid1.forEach(song => {
       song.style.border = "none";
     });
  }
  else if(songIndex==1){
    songTitle.innerHTML=songs[1].songName;
    filmName.innerHTML=songs[1].albumname;
    mainCover.src= songs[1].coverPath;
    notalonesong.style.background="rgba(0, 0, 0, 0.753)";
 notalonesong.style.border="2px solid white";
 songid2.forEach(song => {
    song.style.border = "none";
  });
   }
   else if(songIndex==2){
    songTitle.innerHTML=songs[2].songName;
    filmName.innerHTML=songs[2].albumname;
    mainCover.src= songs[2].coverPath;
    brothersong.style.background="rgba(0, 0, 0, 0.753)";
brothersong.style.border="2px solid white";
songid3.forEach(song => {
   song.style.border = "none";
 });
   }
   else if(songIndex==3){
    songTitle.innerHTML=songs[3].songName;
    filmName.innerHTML=songs[3].albumname;
    mainCover.src= songs[3].coverPath;
    myheartsong.style.background="rgba(0, 0, 0, 0.753)";
myheartsong.style.border="2px solid white";
songid4.forEach(song => {
   song.style.border = "none";
 });
   }
   else if(songIndex==4){
    songTitle.innerHTML=songs[4].songName;
    filmName.innerHTML=songs[4].albumname;
    mainCover.src= songs[4].coverPath;
    atlantissong.style.background="rgba(0, 0, 0, 0.753)";
    atlantissong.style.border="2px solid white";
    songid5.forEach(song => {
       song.style.border = "none";
     });
   }
   else if(songIndex==5){
    songTitle.innerHTML=songs[5].songName;
    filmName.innerHTML=songs[5].albumname;
    mainCover.src= songs[5].coverPath;
    wetwosong.style.background="rgba(0, 0, 0, 0.753)";
    wetwosong.style.border="2px solid white";
    songid6.forEach(song => {
       song.style.border = "none";
     });
   }
   else if(songIndex==6){
    songTitle.innerHTML=songs[6].songName;
    filmName.innerHTML=songs[6].albumname;
    mainCover.src= songs[6].coverPath;
    sexysong.style.background="rgba(0, 0, 0, 0.753)";
    sexysong.style.border="2px solid white";
    songid7.forEach(song => {
       song.style.border = "none";
     });
   }
   else if(songIndex==7){
    songTitle.innerHTML=songs[7].songName;
    filmName.innerHTML=songs[7].albumname;
    mainCover.src= songs[7].coverPath;
    luckysong.style.background="rgba(0, 0, 0, 0.753)";
    luckysong.style.border="2px solid white";
    songid8.forEach(song => {
       song.style.border = "none";
     });
   }
  
}