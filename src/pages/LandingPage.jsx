import React, { useState } from "react";
import { ProductSection, WorkOutCard } from "../styles/LandingStyles";
import { Nav } from "../styles/NavbarStyles";
import loginImg from "../assets/icon/loginImg.png";
import chart from "../assets/chart.png";

import { Footer } from "../components/Landing/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import UsersDashboardCard, {
  SingleCard,
  SimpleCard,
} from "../components/WorkoutCard";

export const LandingPage = () => {
  const [active, setActive] = useState();

  useEffect(() => {
    AOS.init();
  }, []);

  console.log(active);
  return (
    <div>
      {active === "chart" ? (
        <SimpleCard />
      ) : (
        <>
          <Nav>
            <h1>My Activity</h1>
            <img className="nav-img" src={loginImg} alt="" />
          </Nav>
          <br />
          <br />
          <br />
          <br />
          <br />
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
              marginRight: "6%",
            }}
          >
            <h3>Goal for week</h3>
            <p>42/54</p>
          </div>
          <ProductSection
            id="product"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <div className="productImage">
              <img src={chart} alt="" />
            </div>
          </ProductSection>
          <div
            className="displayText"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "94%",
              marginLeft: "4%",
              marginRight: "6%",
            }}
          >
            <h3>Trending workouts</h3>
            <p>see all</p>
          </div>{" "}
          <SingleCard />
          <br />
          <br />
          <br />
          <br />
        </>
      )}
      <Footer setActive={setActive} />
    </div>
  );
};
