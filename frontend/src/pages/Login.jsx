import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { loginUser } from "../services/authService.js";

export const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      localStorage.setItem("token", res.data.token);
      setSuccess("Login successfull! Redirecting....");
      setTimeout(() => {
        navigate("/")
      }, 1500)
    } catch (err) {
      setError(err.response?.data?.message || "Invalid Email or Password");
    }
  };
  return (
    <div className="container mt-5 register">
      <div className="card card-custom p-4 col-md-5 mx-auto">
        <h4 className="brand-text mb-3">Login</h4>
        {/* success message */}
        {success && <div className="alert alert-success py-2 small text-center" style={{backgroundColor: "black"}}>{success}</div>}
        {/* Error message */}
        {error && <div className="alert alert-danger py-2 small text-center" style={{backgroundColor: "black"}}>{error}</div>}
        <form onSubmit={handleSubmit}>
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
          <button className="btn btn-primary w-100">Login</button>
        </form>
        <p className="p-login">Don't have an account? <Link style={{textDecoration: "none"}} to="/register">Register</Link></p>
        <div>
          
        </div>
      </div>
    </div>
  );
};
