import axios from "axios";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Auth.scss";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { email, password });
      login(response.data.token, remember);
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="form"
      >
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label className="flex">
          <input
            type="checkbox"
            className="mr-2"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          Remember me
        </label>
        <button
          className="mt-4"
          type="submit"
        >
          Login
        </button>
        <a
          href="/register"
          className="ml-4"
        >
          Create an account
        </a>
      </form>
    </div>
  );
};

export default Login;
