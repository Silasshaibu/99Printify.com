<?php
// Process the form submission and insert data into the database

// Retrieve form data
$bodyColor = $_POST['body-color'];
$lidColor = $_POST['lid-color'];
$inscription = $_POST['inscription'];

// Sanitize and validate the data (ensure you have proper validation in place)

// Database connection parameters
$hostname = 'your_database_hostname';
$username = 'your_database_username';
$password = 'your_database_password';
$dbname = 'your_database_name';

// Connect to the database
$conn = mysqli_connect($hostname, $username, $password, $dbname);

// Check the connection
if (!$conn) {
    die('Database connection failed: ' . mysqli_connect_error());
}

// Insert data into the database
$sql = "INSERT INTO orders (body_color, lid_color, inscription) VALUES ('$bodyColor', '$lidColor', '$inscription')";

if (mysqli_query($conn, $sql)) {
    // Data inserted successfully
    echo "Your order has been placed. Thank you!";
} else {
    // Error occurred during data insertion
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Close the database connection
mysqli_close($conn);
?>
