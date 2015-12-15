<?php
	header("Content-type:text/xml");
	$name=array("John Smith","John Jones","Jane Smith","Jane Tillman","Abraham Lincoln","Sally Johnson","Kilgore Trout","Bob Atkinson","Joe Cool","Dorothy Barnes","Elizabeth Carlson","Frank Dixon","Gertrude East","Harvey Frank","Inigo Montoya","Jeff Austin","Lynn Arlington","Michael Washington","Nancy West");
	if(!$query) $query=$_GET['query'];
	echo "<?xml version=\"1.0\" ?> \n";
	echo "<names>\n";
	while(list($k,$v)=each($name)){
		if(stristr($v,$query))
			echo "<name>$v</name>\n";
	}
	echo "</name>\n";
	?>