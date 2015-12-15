var qn=0;
function getQuestions(){
	obj=document.getElementById("question");
	obj.firstChild.nodeValue="(Please wait)";
	ajaxCallback=nextQuestion;
	ajaxRequest("questions.xml");
}

function nextQuestion(){
	questions=ajaxreq.responseXML.getElementByTagName("q");
	obj=document.getElementById("question");
	if(qn<questions.length)
		obj.firstChild.nodeValue=questions[qn].firstChild.nodeValue;
	else obj.firstChild.nodeValue="(no more questions");
}

function checkAnswer(){
	answers=ajaxreq.responseXML.getElementByTagName("a");
	a=answers[qn].firstChild.nodeValue;
	answerfield=document.getElementById("answer");
	if(a==answerfield.value)
		alert("Correct!");
	else alert("Incorrect.The correct answer is:"+a);
	qn++;
	answerfield.value="";
	nextQuestion();
}

document.getElementById("startq").onclick=getQuestions;
ans=document.getElementById("submit").onclick=checkAnswer;