import React from "react";
import MyNavbar from "../Componant/MyNavbar";
import Home from "../Componant/Home";
import View from "../Componant/View";
import MyRequest from "../Componant/MyRequest";
import Profile from "../Componant/Profile";
import AboutUs from "../Componant/AboutUs";
import Contact from "../Componant/Contact";
import Registered from "../Componant/Registered";
import BagsStatus from "../Componant/BagsStatus";
import MyFooter from "../Componant/MyFooter";

const Mainlayout = () => {
  return (
    <div>
      <MyNavbar />
      <section id="home">
        <Home />
      </section>
      <section id="view">
        <View />
      </section>
      <section id="myrequest">
        <MyRequest/>
      </section>
      <section id="profile">
        <Profile />
      </section>
      <section id="aboutus">
        <AboutUs />
      </section>
      <section id="bagsstatus">
        <BagsStatus />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="myfooter">
        <MyFooter />
      </section>
    </div>
  );
};

export default Mainlayout;
