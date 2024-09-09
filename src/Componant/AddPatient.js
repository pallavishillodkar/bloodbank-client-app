import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "../style/AddPatient.css";

const AddPatient = () => {
  const [addpatient, setaddpatients] = useState([]);

  const [patientname, setPatientName] = useState("");
  const [patientmono, setPatientMoNo] = useState("");
  const [patientaddress, setPatientAddress] = useState("");
  const [patientcity, setPatientCity] = useState("");
  const [patientbloodgroup, setPatientBloodGroup] = useState("");
  const [patientgender, setPatientGender] = useState("");

  const AddPatient = () => {
    const addpatient = {
      PatientName: patientname,
      PatientMoNo: patientmono,
      PatientAddress: patientaddress,
      PatientCity: patientcity,
      PatientBloodGroup: patientbloodgroup,
      PatientGender: patientgender,
    };

    axios
      .post("http://localhost:5000/api/addpatient", addpatient)
      .then((result) => {
        setaddpatients(result.data);
        alert("Patients Added..");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="top">
      <form className="patient-form">
        <h4 style={{ textAlign: "center", color: "white" }}>Add Patient</h4>
        <input
          className="patient-input"
          type="text"
          placeholder="Enter Patient Name "
          onChange={(e) => setPatientName(e.target.value)}
        />

        <input
          className="patient-input"
          type="text"
          placeholder="Enter Patient MoNo "
          onChange={(e) => setPatientMoNo(e.target.value)}
        />

        <input
          className="patient-input"
          type="text"
          placeholder="Enter Patient Address "
          onChange={(e) => setPatientAddress(e.target.value)}
        />

        <input
          className="patient-input"
          type="text"
          placeholder="Enter Patient City "
          onChange={(e) => setPatientCity(e.target.value)}
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <label className="patient-label"> Patient Blood Group </label>
          <select
            className="patient-select"
            onChange={(e) => setPatientBloodGroup(e.target.value)}
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
          <label className="patient-label"> Patient Gender</label>
          <select
            className="patient-select"
            onChange={(e) => setPatientGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <button className="submit-buttons" onClick={() => AddPatient()}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;
