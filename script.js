let video_player = document.getElementById("video_player");
let links = video_player.getElementsByTagName('a');
for(var i=0; i<links.length; i++){
  links[i].onclick = handler;
}

function handler(e){
  
  e.preventDefault();
  
let videotarget = this.getAttribute("href");
/*alert(videotarget);*/

let audio = document.querySelector("#video_player audio");
audio.removeAttribute('poster');
audio.load();
audio.play();
  
let filename = videotarget;
let source = document.querySelectorAll("#video_player audio source");
source[0].src = filename;
  
  
  
   
   
  
 /* video.buffer();*/
}
handler();