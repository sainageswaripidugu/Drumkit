var len=document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
	var t=this.innerHTML;
	
	soundadd(t);
	ani(t);
});
}



document.addEventListener("keypress",function(event){
    
    soundadd(event.key);
    ani(event.key);
});




function soundadd(n){
	switch(n){
		case "V":
			{var audio=new Audio("sounds/tom-1.mp3");
			audio.play();
			break;}
		case "A":
			{var audio=new Audio("sounds/tom-2.mp3");
			audio.play();
			break;}
		case "M":
			{var audio=new Audio("sounds/tom-3.mp3");
			audio.play();
			break;}
		case "U":
			{var audio=new Audio("sounds/tom-4.mp3");
			audio.play();
			break;}
		case "S":
			{var audio=new Audio("sounds/crash.mp3");
			audio.play();
			break;}
		case "C":
			{var audio=new Audio("sounds/kick-bass.mp3");
			audio.play();
			break;}
		case "P":
			{var audio=new Audio("sounds/snare.mp3");
			audio.play();
			break;}
	}
}

function ani(currkey){
var activebutton =document.querySelector("."+currkey);
  activebutton.classList.add("pressed");
 setTimeout(function(){
 	activebutton.classList.remove("pressed");
 },100);
}

