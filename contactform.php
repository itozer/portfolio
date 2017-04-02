<?php

$skynet = json_decode('{"success": false}', true);

/*
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']) && isset($_POST['secret']) && isset($_POST['response'])) {

    $response = array(
        "name" => $_POST['name'],
        "email" => $_POST['email'],
        "message" => $_POST['message'],
        "secret" => $_POST['secret'],
        "response" => $_POST['response']
    );

    //verify with google this is not skynet
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $data = array("secret" => $response["secret"], "response" => $response["response"]);

    // use key 'http' even if you send the request to https://...
    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        )
    );
    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    if ($result === FALSE) {
        // Handle error
        //$skynet = json_decond('{"success": false}', true);
    } else {
        //if this is not skynet, send an email
        $skynet = json_decode($result, true);
        if ($skynet['success']) {
            //write to db

            //send email
            $subject = "Contact from portfolio website";
            $headers = 'From: portfolio-contact@isaactozer.com' . "\r\n" .
                'Reply-To: itozer@gmail.com' . "\r\n" .
                'X-Mailer: PHP/' . phpversion();

            mail("itozer@gmail.com", $subject, $response["message"], $headers);

            array_push($skynet, "email", true);
        }
    }

}
*/

echo json_encode($skynet);

?>
