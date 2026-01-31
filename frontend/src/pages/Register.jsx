import { useState } from "react";
import { loginUser, registerUser } from "../services/authService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      setSuccess("Registration successfull! Redirecting to login...")
      setTimeout (() => {
        navigate("/login")
      }, 2000)
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Try again.");
    }
  };
  return (
    <div className="container mt-5 register">
      <div className="card card-custom p-4 col-md-5 mx-auto">
        <h4 className="brand-text mb-3">Create Account</h4>
         {success && <div className="alert alert-success py-2 small text-center" style={{backgroundColor: "black"}}>{success}</div>}
         {error && <div className="alert alert-danger py-2 small text-center" style={{backgroundColor: "black"}}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            placeholder="Name"
            name="name"
            required
            onChange={handleChange}
          />
          <input
            className="form-control mb-3"
            placeholder="Email"
            name="email"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            name="password"
            required
            onChange={handleChange}
          />
          <button className="btn btn-primary w-100">Register</button>
        </form>
        <p className="p-login">Don't have an account? <Link style={{textDecoration: "none"}} to="/login">Login</Link></p>
      </div>
    </div>
  );
};
