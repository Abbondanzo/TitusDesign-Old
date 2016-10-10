<?php
error_reporting(0);
session_start();
$_SESSION['vname'] = $_POST['vname'];
$_SESSION['vemail'] = $_POST['vemail'];
$_SESSION['msg'] = $_POST['msg'];
$_SESSION['vnumber'] = $_POST['vnumber'];
if(isset($_POST["submit"])){
	// Checking For Blank Fields..
	if($_POST["vname"]==""||$_POST["vemail"]==""||$_POST["msg"]==""){
		echo "<script type='text/javascript'>alert('Fill All Fields')</script>";
	} else{
		$name=$_POST["vname"];
		// Check if the "Sender's Email" input field is filled out
		$email=$_POST['vemail'];
		// Phone Number
		$number=$_POST['vnumber'];
		// Sanitize E-mail Address
		$email =filter_var($email, FILTER_SANITIZE_EMAIL);
		// Validate E-mail Address
		$email= filter_var($email, FILTER_VALIDATE_EMAIL);

		if (!$email){
			echo "<script type='text/javascript'>alert('Invalid Email Address. Please check!')</script>";
		} else{
			$subject = "Contact Form from " . $name . " (Phone Number: " . $number . " / IP: " . $_SERVER['REMOTE_ADDR'] . ")";
			$message = $_POST['msg'];
			$headers = 'From:'. $email . "\r\n"; // Sender's Email
			$headers .= 'Cc:'. $email . "\r\n"; // Carbon copy to Sender
			// Message lines should not exceed 70 characters (PHP rule), so wrap it
			$message = wordwrap($message, 1000);
			// Send Mail By PHP Mail Function
			mail("info@titusdesign.org", $subject, $message, $headers);
			unset($_SESSION['vname']);
			unset($_SESSION['vemail']);
			unset($_SESSION['vnumber']);
			unset($_SESSION['msg']);
			echo '<div class="success">Your mail has been sent successfully! We will be in touch soon</div>';
		}
	}
}
error_reporting(0);
?>