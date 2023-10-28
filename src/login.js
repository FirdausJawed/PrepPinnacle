import React, { useState } from "react";
import "./login.css";

const Login = () => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      const handleSignIn = (e) => {
            e.preventDefault();
            // Add your authentication logic here
            console.log("Email:", email);
            console.log("Password:", password);
      };

      return (
            <div className="signin-container">
                  <form onSubmit={handleSignIn}>
                        <h2>Sign In</h2>
                        <label style={{ color:  '#231E39' }}>Email:</label>
                        <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                        />
                        <label style={{ color: '#231E39' }}>Password:</label>
                        <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                        />
                        <button type="submit">Sign In</button>
                  </form>
            </div>
      );
};

export default Login;
