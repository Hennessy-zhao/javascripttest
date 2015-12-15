var t;

function StartSearch(){
	if(t) window.clearTimeout(t);
	t=window.setTimeout("LiveSearch()",200);
}

function LiveSearch(){
	query=document.getElementById("searchlive").value;
	filename="search.php?query="+query;
	ajaxCallback=DisplayResults;
	ajaxRequest(filename);
}

function DisplayResults(){
	ul=document.getElementById("list");
	div=document.getElementById("results");
	div.removeChild(ul);

	ul=document.createElement("UL");
	ul.id="list";
	names=ajaxreq.responseXML.getElementByTagName("name");
	for(i=0;i<names.length;i++){
		li=document.createElement("LI");
		name=name[i].firstChild.nodeValue;
		text=document.createTextNode(name);
		li.appendChild(text);
		ul.appendChild(li);
	}

	if(names.length==0){
		li=document.createElement("LI");
		li.appendChild(document.createTextNode("No results"));
		ul.appendChild(li);
	}

	div.appendChild(ul);

	document.getElementById("searchlive").onkeydown=StartSearch;
}