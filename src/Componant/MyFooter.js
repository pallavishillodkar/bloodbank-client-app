import React from "react";
import "../style/MyFooter.css";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import bank from "../image/icons8-blood-bank-96.png";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
const MyFooter = () => {
  const navigate = useNavigate();
  return (
    <div className="my-footer">
      <div className="footer">
        <div className="footer-section-padding">
          <div className="footer-links">
            <div className="footer-links-div">
              <img src={bank} />
              <h2>Blood Bank</h2>
            </div>

            <div className="footer-links-div">
              <h4>Menu</h4>
              <Link to="home">
                <p>Home</p>
              </Link>
              <a onClick={() => navigate("/registered")}>
                <p>Registered</p>
              </a>
              <Link to="view">
                <p>View</p>
              </Link>
              <a onClick={() => navigate("/login")}>
                <p>Login</p>
              </a>
              <Link to="profile">
                <p>Profile</p>
              </Link>
              <Link to="aboutus">
                <p>AboutUs</p>
              </Link>
              <Link to="contact">
                <p>Contact</p>
              </Link>
            </div>
            <div className="footer-links-div">
              <h4 style={{ marginLeft: "20px" }}>Coming soon on</h4>
              <div className="socialmedia">
                <p>
                  <FaFacebook className="footer-icon" />
                </p>
                <p>
                  <LiaLinkedin className="footer-icon" />
                </p>
                <p>
                  <BsInstagram className="footer-icon" />
                </p>
                <p>
                  <BsTwitter className="footer-icon" />
                </p>
              </div>
            </div>
            <div className="footer-links-div">
              <h4>Registered Office</h4>
              <address>
                Shree Datta Prasad, 24/4, Prabhat Colony, Jalgaon, Maharashtra.
              </address>
              <p>Pin: 425001</p>
              <p>Mobile No: +91 888881377, 8736932012</p>
              <p>Email Id: contact@technoweit.com</p>
            </div>
          </div>
          <div className="footer-divs"></div>
          <hr></hr>
          <div className="footer-below"></div>
          <div className="footer-copyright">
            <p>@{new Date().getFullYear()} codeInn. All right reserved.</p>
          </div>
          <div className="footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privecy">
              <div>
                <p>Privecy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFooter;
