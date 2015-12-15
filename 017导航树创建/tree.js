function Toggle(e){
	if(!document.getElementById) return;
	if(!e) var e=window.event;

	if(e.target==document.getElementById("products"))
		obj=document.getElementById("productsmenu");
	else if(e.target==document.getElementById("support"))
		obj=document.getElementById("supportmenu");
	else if(e.target==document.getElementById("contact"))
		obj=document.getElementById("contactmenu");

	key=e.target;
	keyname=key.firstChild.nodeValue.substring(3);

	if(obj.style.display=="block"){
		obj.style.display="none";
		key.firstChild.nodeValue="[+]"+keyname;
	} else {
		obj.style.display="block";
		key.firstChild.nodeValue="[-]"+keyname;
	}
}

document.getElementById("products").onclick=Toggle;
document.getElementById("support").onclick=Toggle;
document.getElementById("contact").onclick=Toggle;
