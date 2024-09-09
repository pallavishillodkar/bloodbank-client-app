import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../style/Registered.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../reduxwork/UserSlice";

const Registered = () => {
  const navigate = useNavigate();
  const dispatcher = useDispatch([]);
  const [users, setusers] = useState([]);
  const [username, setUserName] = useState("");
  const [useremailid, setUserEmailId] = useState("");
  const [usermono, setuserMoNo] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const [usertype, setUserType] = useState("");

  const Register = () => {
    const addUser = {
      UserName: username,
      UserEmailId: useremailid,
      UserMoNo: usermono,
      UserPassword: userpassword,
      UserType: usertype,
    };
    axios
      .post("http://localhost:5000/api/adduser", addUser)
      .then((result) => {
        dispatcher(register(result.data));
        setusers(result.data);
        console.log("Data", result.data);
        if (usertype === "Donor") {
          navigate("/adddonor");
        } else {
          navigate("/addpatient");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="registered">
      <form className="reg-form" onSubmit={(e) => e.preventDefault()}>
        <h3 className="reg-h3">Registration</h3>
        <label className="reg-label">User Name</label>
        <input
          className="reg-control"
          type="text"
          placeholder="Enter user name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <label className="reg-label">User Email</label>
        <input
          className="reg-control"
          type="email"
          placeholder="Enter user email"
          onChange={(e) => setUserEmailId(e.target.value)}
        />
        <label className="reg-label">User MoNo</label>
        <input
          className="reg-control"
          type="number"
          placeholder="Enter user MoNo"
          onChange={(e) => setuserMoNo(e.target.value)}
        />
        <label className="reg-label">User Password</label>
        <input
          className="reg-control"
          type="password"
          placeholder="Enter user password"
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <div className="reg-div">
          <input
            className="reg-check"
            onChange={(e) => setUserType(e.target.value)}
            type="radio"
            name="type, color"
            value="Donor"
            label="Donor"
          ></input>
          <label className="register-label">Donor</label>
          <input
            className="reg-check"
            onChange={(e) => setUserType(e.target.value)}
            type="radio"
            name="type, color"
            value="Patient"
            label="Patient"
          ></input>
          <label className="register-label">Patient</label>
        </div>
        <div>
          <button className="reg-btn" onClick={() => Register()}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registered;
