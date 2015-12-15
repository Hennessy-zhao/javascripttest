function cleardesc(){
	d=document.getElementById("description");
	d.innerHTML="";
}

function hover(e){
	if(!e) var e=window.event;
	whichlink=(e.target)?e.target:e.srcElement.id;
	if(whichlink==document.getElementById("order")) desc="Order a product";
	else if(whichlink==document.getElementById("email")) desc="Send us a message";
	else if(whichlink==document.getElementById("complain")) desc="Insult us,our products,or our families";
	d=document.getElementById("description");
	d.innerHTML=desc;
}

orderlink=document.getElementById("order");
orderlink.onmouseover=hover;
orderlink.onmouseout=cleardesc;
emaillink=document.getElementById("email");
emaillink.onmouseover=hover;
emaillink.onmouseout=cleardesc;
complainlink=document.getElementById("complain");
complainlink.onmouseover=hover;
complainlink.onmouseout=cleardesc;