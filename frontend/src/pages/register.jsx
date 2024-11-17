import React from "react";

const Register = () => {
  return (
    <div className="register-page" style={styles.page}>
     
      
      <div className="register-container" style={styles.container}>
        <h1 style={styles.title}>Create Your Account</h1>
        <form className="register-form" style={styles.form}>
          <label htmlFor="name" style={styles.label}>
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            style={styles.input}
          />
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
            placeholder="Create a password"
            style={styles.input}
          />
          <label htmlFor="confirmPassword" style={styles.label}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Register
          </button>
          <p style={styles.footerText}>
            Already have an account? <a href="/login" style={styles.link}>Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: 0,
  },
  logo: {
    marginBottom: "1rem",
  },
  logoImg: {
    width: "120px",
    height: "auto",
  },
  container: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "2rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "400px",
    textAlign: "center",
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

export default Register;
