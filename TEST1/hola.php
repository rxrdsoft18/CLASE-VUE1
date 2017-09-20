<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Hola php buu</title>
</head>
<body>
	
hola
	<?php 

	$a = array('<foo>',"'bar'",'"baz"','&blong&');
	$arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);

	print_r($arr) ;
	echo json_encode($arr);

	 ?>
</body>
</html>