import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import CommonFooter from "../components/common/CommonFooter";

const AdminLoginPage = () => {
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("/api/public/admin-login", {
        password,
      })
      .then((response) => {
        navigate("/admin/dashboard");
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
  };

  return (
    <div className="login-section">
      <NavBar />
      <div className="login-content">
        <div className="login-section-column">
          <form className="login-form" onSubmit={handleSubmit}>
            <h1>Admin Login</h1>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
      <CommonFooter />
    </div>
  );
};

export default AdminLoginPage;