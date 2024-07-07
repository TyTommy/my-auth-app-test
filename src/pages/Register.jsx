import React, { useState } from "react";
import axios from "axios";
import "./Auth.scss";

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/register", { name, surname, email, password });
      setSuccess("Registration successful! You can now login.");
      setEmail("");
      setPassword("");
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="form"
      >
        <h2>Register</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <input
          type="name"
          placeholder="Name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="name"
          placeholder="Surname"
          className="form-input"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
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
        <button type="submit">Register</button>
        <a
          href="/login"
          className="ml-4"
        >
          Go to login
        </a>
      </form>
    </div>
  );
};

export default Register;
