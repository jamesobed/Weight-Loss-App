import React from "react";
import {
  // Hero,
  ProductSection,
  // ProductSectionHero,
  WorkOutCard,
} from "../styles/LandingStyles";
import { Nav } from "../styles/NavbarStyles";
import loginImg from "../assets/icon/loginImg.png";

// import { Navbar } from "../components/Landing/Navbar";
import { Footer } from "../components/Landing/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import UsersDashboardCard, { SingleCard } from "../components/WorkoutCard";

export const LandingPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      {/* <Navbar landing /> */}
      <Nav>
        <h1>My Activity</h1>
        <img className="nav-img" src={loginImg} alt="" />
      </Nav>
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* ABOUT SECTION */}
      <WorkOutCard>
        <UsersDashboardCard />
      </WorkOutCard>
      <div
        className="displayText"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "94%",
          marginLeft: "4%",
          marginRight: "4%",
        }}
      >
        <h3>Goal for week</h3>
        <h3>42/54</h3>
      </div>
      <ProductSection
        id="product"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <div className="productDescription"></div>
        <div className="productImage">
          {/* <img src={rechargeImage} alt="" /> */}
        </div>
      </ProductSection>
      <SingleCard />
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer />
    </div>
  );
};
