import React from "react";
import "../style/AboutUs.css";
import bank from "../image/icons8-blood-bank-96.png";

const AboutUs = () => {
  return (
    <div className="aboutus">
      {/* <h4>AboutUs</h4> */}
      <div className="aboutus-div">
      <img  className="about-img" src={bank}/>
        <h2 className="h4-about">
          About Blood Bank
        </h2>
        <p className="p-about">The term "BloodBank" typically refers to a department of a Hospital usually within in clinical 
          pathology laboratory where the storage of blood product occurs and where pre-transfusion and blood 
          compatibility testing is performed.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
