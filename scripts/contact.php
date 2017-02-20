<?php

// Empty error array
$error = array();

if(empty($_POST['firstName'])) {
	$error['firstName'] = 'Required';
}

if(empty($_POST['lastName'])) {
	$error['lastName'] = 'Required';
}

if(empty($_POST['email'])) {
	$error['email'] = 'Required';
}

if(empty($_POST['message'])) {
	$error['message'] = 'Required';
}

// If there are no errors, send email. Otherwise, display error.
if(sizeof($error) == 0) {
	
	$headers = "From: {$_POST['email']}" . "\r\n" . "First Name: " . $_POST['firstName'] . "\r\n" . "Last Name: " . $_POST['lastName'];
	
	mail("pblument@gmail.com", "Message from smalldata.industries", stripslashes($_POST['message']), $headers); 
	
	// Build JSON array
	$json = array(
		"status" => "success"
	);
	
	// Out response to browser
	$output = json_encode($json);
	echo $output;
	exit();
	
} else {
	
	// Build JSON array
	$json = array(
		"status" => "failure",
		"error" => $error
	);
	
	// Out response to browser
	$output = json_encode($json);
	echo $output;
	exit();
}
	
?>