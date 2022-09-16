<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
$con = mysqli_connect('localhost', 'root', '','database');

if (mysqli_connect_errno()){echo "Failed to connect to MySQL: " . mysqli_connect_error();}

// get the post records
$fullname = $_POST['first_name']." ".$_POST['last_name']; 
$business = $_POST['business_name'];
$place=$_POST['street']." ".$_POST['city']." ".$_POST['country_name']." ".$_POST['postal_code'];
$phone_no  = $_POST['code']." ".$_POST['phone_no'];
$email = $_POST['email'];
$tax=$_POST['tax_id'];
$account  = $_POST['plan'];
$price =$_POST['price'];
$credit  = $_POST['credit']." "." ".$_POST['cvv'];
$expire  = date('Y-m-d', strtotime($_POST['date']));

// database insert SQL code
$sql = "INSERT INTO customer_detail(Full_name,Business_name,Place,Phone_number,Email,Tax_id,Total_amount,Credit_card_number,expiration_date)VALUES
('$fullname','$business','$place','$phone_no','$email','$tax','$price','$credit','$expire')";

$rs = mysqli_query($con,$sql);

if($rs == true)
{echo "Contact Records Inserted";}
else{echo"error";}                                                                                                                                                                                                                                                                                                                                                 
 ?>