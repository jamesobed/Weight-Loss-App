import React, { useState } from "react";
import Chart from "react-apexcharts";
import { FaPlay, FaBicycle } from "react-icons/fa";
import step1 from "../assets/step1.png";
import stp3 from "../assets/stp3.png";
import step2 from "../assets/step2.png";
import {
  SingleCardStyle,
  WorkOutCardi,
  WorkOutCardStyles,
  ProductSectionCard,
} from "../styles/LandingStyles";

const Usercards = [
  //   {
  //     id: 1,
  //     icon: step1,
  //     caption: "Users",
  //     amount: "7 579",
  //   },
  {
    id: 2,
    icon: step2,
    caption: "Active Users",
    amount: "866",
  },
  {
    id: 3,
    icon: stp3,
    caption: "Active Users",
    amount: "27",
  },
];
const History = [
  {
    id: 1,
    icon: step1,
    caption: "Users",
    amount: "7 579",
  },
  {
    id: 2,
    icon: step2,
    caption: "Active Users",
    amount: "866",
  },
  {
    id: 3,
    icon: stp3,
    caption: "Active Users",
    amount: "27",
  },
];

const UsersDashboardCard = () => {
  return (
    <WorkOutCardi
      id="usersDashboard"
      className="pt-5 pb-3 px-2 d-grid d-sm-flex justify-content-between"
    >
      {Usercards &&
        Usercards.map((usercard) => {
          return (
            <div id="usercard" className="py-3 px-3" key={usercard.id}>
              <div style={{ width: "50%" }}>
                <img
                  src={usercard.icon}
                  alt=""
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    margin: "0.03%",
                  }}
                />
              </div>
            </div>
          );
        })}
    </WorkOutCardi>
  );
};
export const HistoryCardGraph = () => {
  // eslint-disable-next-line
  const [BMI] = useState({
    options: {
      stroke: {
        curve: "smooth",
      },
      grid: {
        show: false,
        borderColor: "#90A4AE",
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
          left: 30,
        },
      },
      colors: ["#daf542", "#66DA26"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["t", "w", "t", "f", "s", "s", "m"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [400, 300, 600, 200, 500, 400, 700],
      },
    ],
  });
  return (
    <ProductSectionCard
      id="product"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className="cardContaine" style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "20%" }} className="rightText">
          <div>
            <div>Weight</div>

            <h1>
              52,3 <sub id="submal">kg</sub>{" "}
            </h1>
          </div>
        </div>

        <div style={{ width: "70%", marginLeft: "-4%" }}>
          <Chart
            options={BMI.options}
            series={BMI.series}
            type="line"
            width="100%"
          />
        </div>
      </div>
    </ProductSectionCard>
  );
};
export const HistoryCard = () => {
  // eslint-disable-next-line
  const [BMI, setBMI] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });
  return (
    <WorkOutCardStyles
      id="usersDashboard"
      className="pt-5 pb-3 px-2 d-grid d-sm-flex justify-content-between"
    >
      {History &&
        History.map((usercard) => {
          return (
            <div id="usercard" className="py-3 px-3" key={usercard.id}>
              <div style={{ width: "50%" }}>
                <img
                  src={usercard.icon}
                  alt=""
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    margin: "0.03%",
                  }}
                />
              </div>
            </div>
          );
        })}
    </WorkOutCardStyles>
  );
};
export const WeightCard = () => {
  return (
    <WorkOutCardStyles
      id="usersDashboard"
      className="pt-5 pb-3 px-2 d-grid d-sm-flex justify-content-between"
    >
      {Usercards &&
        Usercards.map((usercard) => {
          return (
            <div id="usercard" className="py-3 px-3" key={usercard.id}>
              <div style={{ width: "50%" }}>
                <img
                  src={usercard.icon}
                  alt=""
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    margin: "0.03%",
                  }}
                />
              </div>
            </div>
          );
        })}
    </WorkOutCardStyles>
  );
};
export const SleepCard = () => {
  return (
    <WorkOutCardStyles
      id="usersDashboard"
      className="pt-5 pb-3 px-2 d-grid d-sm-flex justify-content-between"
    >
      {Usercards &&
        Usercards.map((usercard) => {
          return (
            <div id="usercard" className="py-3 px-3" key={usercard.id}>
              <div style={{ width: "50%" }}>
                <img
                  src={usercard.icon}
                  alt=""
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    margin: "0.03%",
                  }}
                />
              </div>
            </div>
          );
        })}
    </WorkOutCardStyles>
  );
};
export const BMICard = () => {
  return (
    <WorkOutCardStyles
      id="usersDashboard"
      className="pt-5 pb-3 px-2 d-grid d-sm-flex justify-content-between"
    >
      {Usercards &&
        Usercards.map((usercard) => {
          return (
            <div id="usercard" className="py-3 px-3" key={usercard.id}>
              <div style={{ width: "50%" }}>
                <img
                  src={usercard.icon}
                  alt=""
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    margin: "0.03%",
                  }}
                />
              </div>
            </div>
          );
        })}
    </WorkOutCardStyles>
  );
};
export const SingleCard = () => {
  return (
    <SingleCardStyle
      id="usersDashboard"
      className="pt-5 pb-3 px-2 d-grid d-sm-flex justify-content-between"
    >
      <div id="usercard" className="py-3 px-3">
        <FaBicycle className="social-icon" />
        <h3>Muscle Builder</h3>
        <FaPlay className="social-icon" />
      </div>
    </SingleCardStyle>
  );
};

export default UsersDashboardCard;
