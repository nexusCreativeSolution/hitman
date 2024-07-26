<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Send email (you can configure this according to your email server)
    $to = "publicbot34@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $headers = "From: " . $email;

    $mailBody = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $mailBody, $headers)) {
        echo "Thank you, $name. Your message has been sent.";
    } else {
        echo "Sorry, something went wrong. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
