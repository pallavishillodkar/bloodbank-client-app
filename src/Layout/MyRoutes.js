import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainlayout from "./Mainlayout";
import Login from "../Componant/Login";
import Profile from "../Componant/Profile";
import AddDonor from "../Componant/AddDonor";
import AddPatient from "../Componant/AddPatient";
import Registered from "../Componant/Registered";


function MyRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Mainlayout />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/Profile" element={<Profile/>}/> */}
        <Route path="/adddonor" element={<AddDonor />} />
        <Route path="/addpatient" element={<AddPatient />} />
        <Route path="/registered" element={<Registered />} />
      </Routes>
    </div>
  );
}
export default MyRoutes;
