<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $name = $data['name'];
    $email = $data['email'];
    $message = $data['message'];
    $to = 'kritikamalviya01@gmail.com'; 

    $subject = 'Contact Form Submission from ' . $name;
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo 'Email sent successfully';
    } else {
        echo 'Error: Email not sent';
    }
}

