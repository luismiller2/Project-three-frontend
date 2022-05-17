import React from "react";
import { post } from "../authService/authService";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    console.log("Signup", username, email, password);
    post("/users/login", {
      username: username,
      email: email,
      password: password,
    })
      .then((results) => {
        console.log("Results", results.data);
        localStorage.setItem("authToken", results.data);
        navigate("/");
      })
      .catch((err) => {
        console.log("Something went wrong", err.message);
      });
  };

  return (
    <div>
    <br></br>
      <h1>Login</h1>

      <form onSubmit={loginUser}>
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
