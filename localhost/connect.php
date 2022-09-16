<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
$con = mysqli_connect('localhost', 'root', '','sign_in');


if (mysqli_connect_errno()){echo "Failed to connect to MySQL: " . mysqli_connect_error();}

// get the post records
$txtfirstname = $_POST['firstname'];  // form
$txtlastname = $_POST['lastname'];
$txtusername = $_POST['username'];
$txtemail = $_POST['email'];
$txtpassword = $_POST['password'];


// database insert SQL code
$sql = "INSERT INTO login (firstname, lastname, username, email, password) VALUES( '$txtfirstname', '$txtlastname', '$txtusername', '$txtemail','$txtpassword')";
// myPrintR($sql);
// insert in database 

$rs = mysqli_query($con,$sql);
// myPrintR($rs);

if($rs == true)
{echo "Contact Records Inserted";}
else{echo"error";}

// if(!!$txtfirstname || !!$txtlastname || !!$txtusername || !!$txtemail || !!$txtpassword){
//     if($rs == true){echo "Contact Records Inserted";}
// }
// else{return false;
//     echo"error";}


//

// if($rs==true){
//     if(!!$txtfirstname && !!$txtlastname && !!$txtusername && !!$txtemail && !!$txtpassword){return true;echo"data inserted"}
//         else{return false; echo "you not filled all fields"}
//     }
// else{echo"error"}
// }                                                                                                                                                                                                                                                                                                                                                   
    ?>
