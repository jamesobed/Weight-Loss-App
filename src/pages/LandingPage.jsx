import React from "react";
import {
  Hero,
  ProductSection,
  ProductSectionHero,
  WorkOutCard,
} from "../styles/LandingStyles";
import { Navbar } from "../components/Landing/Navbar";
import { Footer } from "../components/Landing/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const LandingPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar landing />

      {/* ABOUT SECTION */}
      <WorkOutCard>
        <ProductSectionHero
          id="product"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div className="productDescription"></div>
          <div className="productImage">
            {/* <img src={rechargeImage} alt="" /> */}
          </div>
        </ProductSectionHero>
        <ProductSectionHero
          id="product"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div className="productDescription"></div>
          <div className="productImage">
            {/* <img src={rechargeImage} alt="" /> */}
          </div>
        </ProductSectionHero>
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
      <Hero>
        <div data-aos="fade-right" className="heroText"></div>
      </Hero>
      <Footer />
    </div>
  );
};
