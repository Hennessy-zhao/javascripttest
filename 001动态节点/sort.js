var numnames=0;
var names=new Array();

names["??","??"]

function SortNames(){
	thename=document.getElementById("txt").value;

	names[numnames]=thename;
	numnames++;
	names.sort();					//sort函数是对数组进行按照一定顺序的排列，如果不用此函数，则数组自动按照ASCII码进行排列
	document.getElementById("show").value=names.join("\n");//join() 方法用于把数组中的所有元素放入一个字符串。
}