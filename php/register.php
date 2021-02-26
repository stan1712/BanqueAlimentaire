<?php
	include_once("database.php");
	$postdata = file_get_contents("php://input");
	
	if(isset($postdata) && !empty($postdata)) {
		$request = json_decode($postdata);
		
		$lastName = mysqli_real_escape_string($mysqli, trim($request->lastName));
		$firstName = mysqli_real_escape_string($mysqli, trim($request->firstName));
		$email = mysqli_real_escape_string($mysqli, trim($request->email));

		$birthdate = mysqli_real_escape_string($mysqli, trim($request->birthdate));

		$email = mysqli_real_escape_string($mysqli, trim($request->email));
		$pwd = hash('sha256', mysqli_real_escape_string($mysqli, trim($request->pwd)));

		$sql = "INSERT INTO banqalim_users(firstName, lastName, password, email, birthdate) VALUES ('$firstName', '$lastName', $pwd', '$email', '$birthdate')";

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