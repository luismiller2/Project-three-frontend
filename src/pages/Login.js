import React from "react";

const Login = () => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');


    return (
      <div>
      <body>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Untitled</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
          />
          {/* <link rel="stylesheet" href="assets/css/style.css" /> */}
        </head>
  
        <body>
          <h1>Login</h1>

            <form method="post" action="/users/signup">
            <label>User Name &nbsp; </label>
            <input value={username} onChange={(e) =>setUsername(e.target.value)} />
            <label>Email &nbsp; </label>
            <input value={email} onChange={(e) =>setEmail(e.target.value)} />
            <label>Password &nbsp; </label>
            <input value={password} onChange={(e) =>setPassword(e.target.value)} type="password" />

  <button type="submit">Log In</button>
</form>
        </body>
          <div class="footer-basic">
            <footer>
              <div class="social">
                <a href="#">
                  <i class="icon ion-social-instagram"></i>
                </a>
                <a href="#">
                  <i class="icon ion-social-snapchat"></i>
                </a>
                <a href="#">
                  <i class="icon ion-social-twitter"></i>
                </a>
                <a href="#">
                  <i class="icon ion-social-facebook"></i>
                </a>
              </div>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a href="#">Home</a>
                </li>
                <li class="list-inline-item">
                  <a href="#">Services</a>
                </li>
                <li class="list-inline-item">
                  <a href="#">About</a>
                </li>
                <li class="list-inline-item">
                  <a href="#">Terms</a>
                </li>
                <li class="list-inline-item">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
              <p class="copyright">BetterMe © 2022</p>
            </footer>
          </div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
        </body>
      </div>
    );
  };
  
  export default Login;
  