var num1;
var num2;
var result=0;

function getValue(){
	num1=document.theform.first.value;
	num2=document.theform.second.value;
}

//加法
function Plus(){
	getValue();
	result=parseInt(num1)+parseInt(num2);
	document.theform.result.value=result;
}

//减法
function Minus(){
	getValue();
	result=num1-num2;
	document.theform.result.value=result;
}

//乘法
function Mutiply(){
	getValue();
	result=num1*num2;
	document.theform.result.value=result;
}

//除法
function Divide(){
	getValue();
	if(num2!=0){
	result=num1/num2;
	document.theform.result.value=result;
	}else document.theform.result.value="Donamitor can't be zero!";
}