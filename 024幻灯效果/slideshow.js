var numslides=0,currentslide=numslides;
var slides=new Array();

function MakeSlideShow(){
	imgs=document.getElementsByTagName("img");
	for(i=0;i<imgs.length;i++){
		if(imgs[i].className!="slide") continue;
		slides[numslides]=imgs[i];

		if(numslides==0)
			imgs[i].style.display="block";
		else imgs[i].style.display="none";

		imgs[i].onclick=NextSlide;
		numslides++;
	}
}

function NextSlide(){
	slides[currentslide].style.display="none";
	currentslide++;
	if(currentslide>=numslides) currentslide=0;
	slides[currentslide].style.display="block";
}

window.onload=MakeSlideShow;