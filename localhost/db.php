
<html>
<head>
<title>Table with database</title>
<style>
table {border-collapse: collapse;width: 100%;color: #588c7e;font-family: monospace;font-size: 25px;text-align: left;}
th {background-color: #588c7e;color: white;}
tr{background-color: #f2f2f2}
h1{font-size:3em;text-align:center;}
</style>
</head>
<body>
    <h1> database </h1>
<table>
<tr>
     <th>firstname</th>
    <th>secondname</th>
    <th>username</th>
    <th>email</th>
    <th>password</th>
</tr>
<?php
$conn = mysqli_connect("localhost", "root", "", "sign_in");
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT firstname, lastname, username, email, password FROM login";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
// output data of each row
while($row = $result->fetch_assoc()) {
    echo "<tr><td>" . $row["firstname"]. "</td><td>" . $row["lastname"] . "</td><td>". $row["username"] . "</td><td>". $row["email"] . "</td><td>". $row["password"]. "</td></tr>";
}
echo "</table>";
} else { echo "0 results"; }
$conn->close();
?>

</table>
</body>
</html>