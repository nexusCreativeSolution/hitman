<?php
require 'vendor/autoload.php'; // Load Composer's autoloader

use SendGrid\Mail\Mail;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $sendgrid = new \SendGrid('49c2edf5d6ef3bd362022c8ec041238f-0f1db83d-1ace9c39');
    $email = new Mail();
    $email->setFrom($email, $name);
    $email->setSubject("New Contact Form Submission");
    $email->addTo("nexuscreativesolution@gmail.com"); // Replace with your email address
    $email->addContent("text/plain", "Name: $name\nEmail: $email\n\nMessage:\n$message");

    try {
        $response = $sendgrid->send($email);
        echo "Thank you, $name. Your message has been sent.";
    } catch (Exception $e) {
        echo 'Error: ' . $e->getMessage();
    }
} else {
    echo "Invalid request.";
}
