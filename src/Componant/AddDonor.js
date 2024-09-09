import axios from "axios";
import React, { useState } from "react";
// import {addBags} from "../reduxwork/CardSlice";
import { Form } from "react-bootstrap";
import "../style/AddDonor.css";

const AddDonor = () => {
  const [adddonor, setadddonors] = useState([]);

  const [donorname, setDonorName] = useState("");
  const [donormono, setDonorMoNo] = useState("");
  const [donoraddress, setDonorAddress] = useState("");
  const [donorcity, setDonorCity] = useState("");
  const [donorbloodgroup, setDonorBloodGroup] = useState("");
  const [donorgender, setDonorGender] = useState("");

  const AddDonor = () => {
    const adddonor = {
      DonorName: donorname,
      DonorMoNo: donormono,
      DonorAddress: donoraddress,
      DonorCity: donorcity,
      DonorBloodGroup: donorbloodgroup,
      DonorGender: donorgender,
    };

    axios
      .post("http://localhost:5000/api/adddonor", adddonor)
      .then((result) => {
        setadddonors(result.data);
        alert("Donor Added..");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="main-div">
      <form className="donor-form">
        <h4 style={{ textAlign: "center",color:'white' }}>Add Donor</h4>
        <input
          className="donor-input"
          type="text"
          placeholder="Enter Donor Name "
          onChange={(e) => setDonorName(e.target.value)}
        />
        <input
          className="donor-input"
          type="text"
          placeholder="Enter Donor MoNo "
          onChange={(e) => setDonorMoNo(e.target.value)}
        />
        <input
          className="donor-input"
          type="text"
          placeholder="Enter Donor Address"
          onChange={(e) => setDonorAddress(e.target.value)}
        />
        <input
          className="donor-input"
          type="text"
          placeholder="Enter Donor City"
          onChange={(e) => setDonorCity(e.target.value)}
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          {/* <div className="donor-label"> */}
          <label className="donor-label"> Donor Blood Group </label>
          <select
            className="donor-select"
            onChange={(e) => setDonorBloodGroup(e.target.value)}
          >
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          {/* </div> */}
          {/* <div className="donor-label"> */}
          <label className="donor-label"> Donor Gender </label>
          <select
            className="donor-select"
            onChange={(e) => setDonorGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {/* </div> */}
        </div>
        <div>
          <button className="reg-btn" onClick={() => AddDonor()}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDonor;
