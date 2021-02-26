<?php
	include_once("database.php");
	$postdata = file_get_contents("php://input");
	
	if(isset($postdata) && !empty($postdata)) {
		$request = json_decode($postdata);

		$name = trim($request->name);
		$email = mysqli_real_escape_string($mysqli, trim($request->email));
		$pwd = hash('sha256', mysqli_real_escape_string($mysqli, trim($request->pwd)));

		$sql = "INSERT INTO banqalim_users(name, password, email) VALUES ('$name', '$pwd', '$email')";

		if ($mysqli->query($sql) === TRUE) {
			$authdata = [
				'name' => $name,
				'pwd' => '',
				'email' => $email,
				'id' => mysqli_insert_id($mysqli)
			];

			echo json_encode($authdata);
		}
	}

?>