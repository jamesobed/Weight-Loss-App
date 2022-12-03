import React, { useState } from "react";
import Chart from "react-apexcharts";
import { FaPlay, FaBiking, FaExclamationTriangle } from "react-icons/fa";
// import bmi from "../assets/bmi.png";
import {
  SingleCardStyle,
  BMISectionCard,
  ProductSectionCard,
} from "../styles/LandingStyles";

export const WeightCardLine = () => {
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
    <ProductSectionCard>
      <div className="cardContaine" style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "30%" }} className="rightText">
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
            width="70%"
          />
        </div>
      </div>
    </ProductSectionCard>
  );
};
export const BMICardBar = () => {
  return (
    <BMISectionCard>
      <div
        className="title"
        style={{
          display: "flex",
          width: "96%",
          justifyContent: "space-between",
        }}
      >
        <h3>BMI</h3>
        <h4>
          17.3
          <FaExclamationTriangle
            className="social-icon"
            style={{
              color: "#7769cf",
              height: "30%",
              width: "30%",
              margin: "2%",
            }}
          />{" "}
        </h4>
      </div>
      <div
        className="mainCardContaine"
        style={{ width: "100%", display: "flex", height: "230px" }}
      >
        <div className="cardContaine">
          <div
            className="orange"
            style={{
              backgroundColor: " #f6eb13",
            }}
          ></div>
          <div
            className="orange"
            style={{
              backgroundColor: " #82898b",
              marginLeft: "35%",
            }}
          ></div>
          <div
            className="orange"
            style={{
              backgroundColor: " #dde3e4",
              marginLeft: "70%",
            }}
          ></div>
        </div>
      </div>
      <div className="titleNumber">
        <h3>18.5</h3>
        <h3>25</h3>
      </div>
      <div
        className="titleCircle"
        style={{
          display: "flex",
          width: "96%",
          justifyContent: "flex-start",
        }}
      >
        <div className="circle" style={{ backgroundColor: "#f7f307" }}></div>
        <h3>Low</h3>
        <div className="circle" style={{ backgroundColor: "#978fb8" }}></div>
        <h3>Normal</h3>
        <div className="circle" style={{ backgroundColor: "#6f37bd" }}></div>
        <h3>High</h3>
      </div>
    </BMISectionCard>
  );
};
export const SleepCardBar = () => {
  // eslint-disable-next-line
  const [BMI] = useState({
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
      colors: ["#6d3e9c", "#847196"],
      chart: {
        id: "sleep-bar",
        background: "#fff",
      },
      xaxis: {
        categories: ["t", "w", "t", "f", "s", "s", "m"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [600, 1000, 400, 600, 900, 500, 200],
      },
    ],
  });
  return (
    <ProductSectionCard>
      <div className="cardContaine" style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "30%" }} className="rightText">
          <div>
            <div>Sleep</div>
            <h1>
              62<sub id="submal">h</sub> 20<sub id="submal">m</sub>
            </h1>
          </div>
        </div>

        <div style={{ width: "60%", marginLeft: "-4%" }}>
          <Chart
            options={BMI.options}
            series={BMI.series}
            type="bar"
            width="80%"
          />
        </div>
      </div>
    </ProductSectionCard>
  );
};

export const SingleCard = () => {
  return (
    <SingleCardStyle
      id="usersDashboard"
      className="pt-5 pb-3 px-2 d-grid d-sm-flex justify-content-between"
    >
      <div id="usercard" className="py-3 px-3">
        <FaBiking className="social-icon" style={{ color: "#847196" }} />
        <h3>Muscle Builder</h3>

        <FaPlay
          className="social-icon"
          style={{
            color: "lightseagreen",
            border: "1px solid green",
            borderRadius: "50%",
            textAlign: "center",
            height: "20%",
            width: "20%",
            padding: "2%",
            margin: "2%",
          }}
        />
      </div>
    </SingleCardStyle>
  );
};
