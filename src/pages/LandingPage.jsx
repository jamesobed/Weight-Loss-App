import React, { useState } from "react";
import Chart from "react-apexcharts";
import { ProductSection, WorkOutCard } from "../styles/LandingStyles";
import { Nav } from "../styles/NavbarStyles";
import loginImg from "../assets/icon/loginImg.png";
// import chart from "../assets/chart.png";
import { FaSpinner } from "react-icons/fa";
import { Footer } from "../components/Landing/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// eslint-disable-next-line
import UsersDashboardCard, {
  SingleCard,
  WeightCardLine,
  SleepCardBar,
  BMICardBar,
} from "../components/WorkoutCard";
import { AddModal } from "../components/AddModal";
import CarouselComponent from "../components/Landing/carousel/CarouselComponent";
export const LandingPage = () => {
  // eslint-disable-next-line
  const [active, setActive] = useState();
  // eslint-disable-next-line
  const [BMI, setBMI] = useState({
    options: {
      grid: {
        show: true,
        borderColor: "#fff",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        row: {
          colors: undefined,
          opacity: 0.5,
        },
        column: {
          colors: undefined,
          opacity: 0.5,
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 20,
        },
      },
      colors: ["#daf542", "#66DA26"],
      chart: {
        id: "calories-bar",
        background: "#7769cf",
      },
      xaxis: {
        categories: ["t", "w", "t", "f", "s", "s", "m"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [10, 9, 5, 7, 8, 4, 6],
      },
    ],
  });

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <AddModal active={active} />

      {active === "chart" ? (
        <>
          <Nav>
            <div>
              <h1>My Activity</h1>

              <h2>Monday, 11 July</h2>
            </div>
            <FaSpinner
              style={{
                fontSize: "40px",
                top: "-30px",
              }}
              className="social-icon"
            />
          </Nav>
          <WeightCardLine />
          <BMICardBar />
          <SleepCardBar />
          <br />
          <br />
          <br />
        </>
      ) : active === "plasus" ? (
        <></>
      ) : (
        <>
          <Nav>
            <h1>My Activity</h1>
            <img className="nav-img" src={loginImg} alt="" />
          </Nav>
          <br />
          <br />
          <WorkOutCard>
            {/* <UsersDashboardCard /> */}
            <CarouselComponent />
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
            <div id="usercard" className="py-2" style={{ width: "70%" }}>
              <div style={{ width: "100%" }}>
                <Chart
                  options={BMI.options}
                  series={BMI.series}
                  type="bar"
                  width="80%"
                />
              </div>
            </div>
            {/* </WorkOutCardStyles> */}
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
        </>
      )}
      <Footer setActive={setActive} />
    </div>
  );
};
