import React from "react";
import Footer from "../components/Footer";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div>
    <br></br>
      <h1>Login</h1>

      <form method="post" action="/users/signup">
        <label>User Name &nbsp; </label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Email &nbsp; </label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password &nbsp; </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />

        <button type="submit">Log In</button>
      </form>
      <div><Footer /> </div>
    </div>
  );
};

export default Login;
