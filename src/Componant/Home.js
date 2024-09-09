import React from "react";
import "../style/Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { BsInstagram, BsLinkedin, BsTelegram, BsTwitter } from "react-icons/bs";

const Home = () => {
  return (
    <div className="home">
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="home-slider1">
          <h4>INTRODUCTION </h4>
          <p>
            You can give a brief description of the topic you want to talk about
            here. For example,if you want to talk about Mercury,you can say that
            it's the smallest planet in the entire Solar System
          </p>
        </SwiperSlide>
        <SwiperSlide className="home-slider2">
          <h4>03 PATIENT CARE</h4>
          <p>You can enter a subtitle here if you need it</p>
        </SwiperSlide>
        <SwiperSlide className="home-slider3">
          <h1>OUR CENTER</h1>
          <p>
            Venus has a beautiful name and is the second planet from the Sun.
            It's terribly hot-even hotter than Mercury-and its atmosphere is
            extremely poisonous. It's the second-brightest natural object in the
            night sky after the Moon
          </p>
        </SwiperSlide>
        <SwiperSlide className="home-slider4">
          <h4>THANKS !</h4>
          <div className="home-div">
            <span>Does anyone have any questions?</span>
            <span>Youremail@freepik.com</span>
            <span>+91620421838</span>
            <span>yourcompany.com</span>
            <div>
              <a href="https://www.linkedin.com/" className="home-anchor"><BsLinkedin /></a>
              <a href="https://x.com/?lang=en" className="home-anchor"><BsTwitter /></a>
              <a href="https://web.telegram.org/k/" className="home-anchor"><BsTelegram /></a>
              <a href="https://www.instagram.com/" className="home-anchor"><BsInstagram /></a>
            </div>
          <h6>
            CREDITS: This presentation template was created by Slidesgo,
            including icons by Flaticon. infographics & images by Freepik
          </h6>
          <p>Please keep this slide for attribution</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
