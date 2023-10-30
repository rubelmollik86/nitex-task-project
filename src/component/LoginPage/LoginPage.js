import React, { useState } from "react";
import "./LoginPage.css"; // Create a CSS file for styling
import Navber from "../../component/Navbar/Navbar.js";
import Footer from "../../component/Footer/Footer";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
      <div>
          <Navber/>
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
          </div>
          <Footer/>
    </div>
  );
}

export default LoginForm;
