<?php
require 'vendor/autoload.php'; // Ensure Composer's autoloader is included

use Mailgun\Mailgun;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $mgClient = Mailgun::create(' 49c2edf5d6ef3bd362022c8ec041238f-0f1db83d-1ace9c39'); // Replace with your Mailgun API Key
    $domain = 'sandbox02d66151b5cd447f98434957027dc9cf.mailgun.org?'; // Replace with your Mailgun domain

    $params = [
        'from'    => $email,
        'to'      => 'nexuscreativesolution@gmail.com', // Replace with your email address
        'subject' => 'New Contact Form Submission',
        'text'    => "Name: $name\nEmail: $email\n\nMessage:\n$message"
    ];

    try {
        $result = $mgClient->messages()->send($domain, $params);
        echo "Thank you, $name. Your message has been sent.";
    } catch (Exception $e) {
        echo 'Error: ' . $e->getMessage();
    }
} else {
    echo "Invalid request.";
}
