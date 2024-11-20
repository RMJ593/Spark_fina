

import React from "react";

import logo from "../components/image/Group5.png";
const Login = () => {
  return (
    <div className="login-page" style={styles.page}>
      <div className="login-container" style={styles.container}>
        <div className="logo" style={styles.logo}>
          <img
            src={logo}
            alt="Spark Logo"
            style={styles.logoImg}
          />
        </div>
        <h1 style={styles.title}>Welcome to Spark</h1>
        <form className="login-form" style={styles.form}>
          <label htmlFor="email" style={styles.label}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            style={styles.input}
          />
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
          <p style={styles.footerText}>
            Don't have an account? <a href="/register" style={styles.link}>Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "#f8f9fa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: 0,
  },
  container: {
    backgroundColor: "#ffffff", 
    borderRadius: "8px",
    padding: "2rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "400px",
    textAlign: "center",
  },
  logo: {
    marginBottom: "1rem",
  },
  logoImg: {
    width: "100px",
    height: "auto",
  },
  title: {
    fontSize: "1.5rem",
    color: "#007BFF",
    marginBottom: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  label: {
    textAlign: "left",
    color: "#495057",
    fontWeight: "bold",
  },
  input: {
    padding: "0.8rem",
    borderRadius: "4px",
    border: "1px solid #ced4da",
    fontSize: "1rem",
  },
  button: {
    backgroundColor: "#007BFF", 
    color: "#ffffff",
    padding: "0.8rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  footerText: {
    fontSize: "0.9rem",
    color: "#6c757d",
  },
  link: {
    color: "#007BFF", 
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Login;

