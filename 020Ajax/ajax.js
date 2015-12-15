var ajaxreq=false,ajaxCallback;

function ajaxRequest(filename){
	try{
		ajaxreq=new XMLHttpRequest();

	}catch(error){
		try{
			ajaxreq=new ActiveXObject("Microsoft.XMLHTTP");
		}catch(error){
			return false;
		}
	}
	ajaxreq.open("GET",filename);
	ajaxreq.onreadystatechange=ajaxResponse;
	ajaxreq.send(null);
}

function ajaxResponse(){
	if(ajaxreq.readyState!=4) return;
	if(ajaxreq.status==200){
		if(ajaxCallback) ajaxCallback();
		else alert("Request failed:"+ajaxreq.statusText());
	}
	return true;
}