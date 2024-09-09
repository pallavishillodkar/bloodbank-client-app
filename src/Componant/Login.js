import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../reduxwork/UserSlice";
import "../style/Login.css";
const Login = () => {
  const navigate = useNavigate();
  const dispatcher = useDispatch([]);
  const [emailid, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const doLogin = () => {
    const userDatas = {
      UserEmailId: emailid,
      UserPassword: password,
    };
    axios
      .post("http://localhost:5000/api/dologin", userDatas)
      .then((result) => {
        dispatcher(login(result.data?.data));
        console.log(result.data?.data);
        if (result.data?.data != null) {
          dispatcher(login(result.data?.data));
        navigate("/");
        } else {
          alert("Login Failed")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="div-1">
      <div className="login-page">
        <div className="login-container">
          <div className="login-header">
            <div className="avatar"></div>
          </div>
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label>Email ID</label>
              <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="remember-me">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <div className="forgot-password">
              <a>Forgot Password?</a>
            </div>
            <button className="login-button" onClick={() => doLogin()}>
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
