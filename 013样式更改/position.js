
function pos(x,y){
	document.getElementById("square").style.left=100+x*50;
	document.getElementById("square").style.top=150+y*50;
}

function hideSquare(){
	document.getElementById("square").style.display="none";
}

function showSquare(){
	document.getElementById("square").style.display="inline";
}