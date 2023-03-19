<?php

$name = "";
$email = "";
$message = "";
$name_error = "";
$email_error = "";
$message_error = "";

function sanitizeText($str)
{
  if ($str === $_POST['name']) {
    $str = filter_var($str, FILTER_SANITIZE_SPECIAL_CHARS);
    return $str;
  } elseif ($str === $_POST['email']) {
    $str = filter_var($str, FILTER_SANITIZE_EMAIL);
    return $str;
  } elseif ($str === $_POST['message']) {
    $str = filter_var($str, FILTER_SANITIZE_SPECIAL_CHARS);
    return $str;
  }
}

if (isset($_POST["submit"])) {
  if (empty($_POST["name"])) {
    $name_error = '<i class="fa-solid fa-circle-exclamation"></i> Please enter your name';
  } else {
    $name = sanitizeText($_POST["name"]);
    if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
      $name_error = '<i class="fa-solid fa-circle-exclamation"></i> Only letters and white space allowed';
    }
  }
  if (empty($_POST["email"])) {
    $email_error = '<i class="fa-solid fa-circle-exclamation"></i> Please enter your email';
  } else {
    $email = sanitizeText($_POST["email"]);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $email_error = '<i class="fa-solid fa-circle-exclamation"></i> Invalid email';
    }
  }
  if (empty($_POST["message"])) {
    $message_error = '<i class="fa-solid fa-circle-exclamation"></i> Message is required';
  } else {
    $message = sanitizeText($_POST["message"]);
  }

  if ($name_error == "" && $email_error == "" && $message_error == "") {
    $file_open = fopen("contact_data.csv", "a");
    $form_data = array(
      'name'  => $name,
      'email'  => $email,
      'message' => $message
    );
    fputcsv($file_open, $form_data);
    $name = '';
    $email = '';
    $message = '';
    header("Location: message.html");
    exit;
  }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Gajraj+One&family=Montserrat:wght@300&family=Tilt+Prism&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
  <title>Portfolio New Version</title>
</head>

<body>
  <nav>
    <div id="nav-logo-section" class="nav-section">
      <a href="index.html" class="logo">SLVDR</a>
    </div>
    <div id="nav-link-section" class="nav-section">
      <a href="about.html">ABOUT</a>
      <a href="work.html">WORK</a>
    </div>
    <div id="nav-social-section" class="nav-section">
      <a href="https://github.com/SLVDRjr" target="_blank"><i class="fa-brands fa-github"></i></a>
    </div>
    <div id="nav-contact-section" class="nav-section">
      <a href="contact.php" class="active">GET IN TOUCH</a>
    </div>
    <button class="nav-bars" aria-expanded="false">
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
    <!-- Mobile Nav -->
    <div class="mobile-nav" data-visible="false">
      <div id="mobile-nav-link-section" class="mobile-nav-section">
        <a href="about.html">ABOUT</a>
        <a href="work.html">WORK</a>
        <a href="contact.php" class="active">CONTACT</a>
      </div>
      <div id="mobile-nav-social-section" class="mobile-nav-section">
        <a href="https://github.com/SLVDRjr" target="_blank"><i class="fa-brands fa-github"></i></a>
      </div>
    </div>
  </nav>

  <main class="contact">
    <article>
      <div class="contact-info-section article-section">
        <p class="title">CONTACT</p>
        <h2>GET IN TOUCH</h2>
        <p>43.wsalvador@gmail.com</p>
      </div>
      <div class="contact-form-section article-section">
        <form method="POST" id="contact-form">
          <div class="form-group">
            <label for="name">NAME <span><?= $name_error; ?></span></label>
            <input type="text" id="name" name="name" value="<?= $name; ?>" />
          </div>
          <div class="form-group">
            <label for="email">EMAIL <span><?= $email_error; ?></label>
            <input type="email" id="email" name="email" value="<?= $email; ?>" />
          </div>
          <div class="form-group">
            <label for="message">MESSAGE <span><?= $message_error; ?></label>
            <textarea id="message" name="message"><?= $message; ?></textarea>
          </div>
          <input class="submit" type="submit" name="submit" value="SUBMIT" />
        </form>
      </div>
      <div class="contact-footer-section">
        <p>2023 &copy; William Salvador Jr.</p>
      </div>
    </article>
  </main>
  <script src="main.js"></script>
  <script src="contact.js"></script>
</body>

</html>