import React from "react";
import { post } from "../authService/authService";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Signup = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    console.log("Signup", username, email, password);
    post("/users/signup", {
      username: username,
      email: email,
      password: password,
    })
      .then((results) => {
        console.log("Results", results.data.token);
        localStorage.setItem("authToken", results.data.token);
        navigate("/");
      })
      .catch((err) => {
        console.log("Something went wrong", err.message);
      });
  };

  return (
    <div>
      <br></br>
      <h1>Sign up</h1>

      <form onSubmit={register}>
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

        <button type="submit">Create User</button>
      </form>
      <div><Footer /> </div>
    </div>
  );
};

export default Signup;
