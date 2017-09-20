<?php 

// GENERAR RESPUESTA JSON PHP Y MySQL
	
//GENERAR CONEXION A LAS BD MYSQL
	$host="localhost";
	$usuario="root";
	$pass="";
	$bd="prueba";

	$servidor=mysqli_connect($host,$usuario,$pass);
// ELIJE EL FORMATO DE DATOS PARA LLA CONEXION UTF8
//	mysql_set_charset('utf8',$servidor);

	mysqli_select_db($servidor,$bd);
	//mysqli_set_charset($servidor,'utf8');
	//se prepara la peticion
	//ESTABLECER LA CONSULTA A LA BD
	//$servidor->set_charset("utf8");
	$consulta="SELECT * FROM empleado";
	mysqli_set_charset($servidor, "utf8"); //formato de datos utf8

	$sql=mysqli_query($servidor,$consulta);

	if (!$sql) {
		echo "La conexion no se logro".mysql_error();
		die;
	}

	$datos=array();
	while ($obj=mysqli_fetch_object($sql)) {
		$datos[]=array(
						'id'=>$obj->id,
						'correo'=>$obj->Correo,
						'nombre'=>$obj->Nombre,
						'apellido'=>$obj->Apellido,
						'sexo'=>$obj->Sexo,
						'sueldo'=>$obj->Sueldo,
						'profesion_id'=>$obj->Profesion_id,
						'fechaNacimiento'=>$obj->FechaNacimiento,
						'fechaRegistro'=>$obj->FechaRegistro,
			);

	}

	mysqli_close($servidor);

// SE DECLARA QUE ESTA ES UN APLICACION QUE GENERA UN JSON
	header('Content-type: application/json; charset=utf-8');
//SE ABRE EL ACCESO A LAS CONEXIONES QUE REQUIERAN DE ESTA APLICACION
	header('Access-Control-Allow-Origin:*');

	echo " ".json_encode($datos) ." ";
 ?>