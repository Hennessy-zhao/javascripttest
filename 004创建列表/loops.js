names=new Array();
for(i=0;i<5;i++){
	next=window.prompt("Enter the next name:");
	if(next>" ") names[i]=next;
}
document.write("<h2>"+(names.length)+" names entered.</h2>");
document.write("<ol>");
for(i in names){
	document.write("<li>"+names[i]+"<br>");
}
document.write("<ol>");