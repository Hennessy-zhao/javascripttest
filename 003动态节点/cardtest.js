function PrintCard(){
	line1="<b>Name:</b>"+this.name+"<br>\n";
	line2="<b>Address:</b>"+this.address+"<br>\n";
	line3="<b>Work Phone:</b>"+this.workphone+"<br>\n";
	line4="<b>Home Phone:</b>"+this.homephone+"<br>\n<hr>";
	document.write(line1,line2,line3,line4);
}

function Card(name,address,work,home){
	this.name=name;
	this.address=address;
	this.workphone=work;
	this.homephone=home;
	this.PrintCard=PrintCard;
}

sue=new Card("Sue Suthers","123 Elm Street","555-1234","555-9876");
phred=new Card("Phred Madsen","233 Oak Lane","555-2222","555-4444");
henry=new Card("Henry Tillman","233 Walnut Circle","555-1299","555-1344");

sue.PrintCard();
phred.PrintCard();
henry.PrintCard();
henry.end();