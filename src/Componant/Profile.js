import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style/Profile.css";
import { logout } from "../reduxwork/UserSlice";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";


const Profile = () => {
  const { UserData } = useSelector((state) => state.user);
  const dispatcher = useDispatch();
  // const navigate = useNavigate();
  return (
    <div className="user-profile">
      <Card className="profile-main">
        <Card.Body className="profile-card">
      <h4 style={{color:"white", marginLeft:"30px", color:"red"}}>Profile</h4>
      <h5 className="profile-h5">Name: {UserData.UserName}</h5>
      <h5 className="profile-h5">Mobile Number: {UserData.UserMoNo}</h5>
      <h5 className="profile-h5">EmailId: {UserData.UserEmailId}</h5>
      </Card.Body>
      </Card>
      <button className="button-logout" onClick={() => dispatcher(logout())}>
      <span class="text">Logout</span>
      <svg class="arrow" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
      </button>
     
      </div>
  );
};

export default Profile;
