//当光标移入文本框时，将默认内容置空
function setNone(e){
	if(e.target.value="Input")
		e.target.value="";
}

//当光标移出文本框且没有在文本框内输入内容时，将文本框值设为默认
function setDefault(e){
	if(e.target.value=="")
		e.target.value="Input";
	e.target.blur();
}


function calculator(e){
	//进行加减乘除的运算
	if(document.getElementById("txt1").value!="Input"&&document.getElementById("txt2").value!="Input")
		if(e.target==document.getElementById("plus"))//加法
			document.getElementById("result").firstChild.nodeValue=parseInt(document.getElementById("txt1").value)+parseInt(document.getElementById("txt2").value);
		else if(e.target==document.getElementById("minus"))//减法
			document.getElementById("result").firstChild.nodeValue=document.getElementById("txt1").value-document.getElementById("txt2").value;
		else if(e.target==document.getElementById("mutiply"))//乘法
			document.getElementById("result").firstChild.nodeValue=document.getElementById("txt1").value*document.getElementById("txt2").value;
		else//除法
			document.getElementById("result").firstChild.nodeValue=document.getElementById("txt1").value/document.getElementById("txt2").value;
	else document.getElementById("result").firstChild.nodeValue="Input first!";

}

document.getElementById("txt1").onclick=setNone;
document.getElementById("txt1").onmouseout=setDefault;
document.getElementById("txt2").onclick=setNone;
document.getElementById("txt2").onmouseout=setDefault;

document.getElementById("plus").onclick=calculator;
document.getElementById("minus").onclick=calculator;
document.getElementById("mutiply").onclick=calculator;
document.getElementById("divide").onclick=calculator;

