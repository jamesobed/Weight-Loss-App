// eslint-disable-next-line
import React, { useState } from "react";
// eslint-disable-next-line
import Chart from "react-apexcharts";
// eslint-disable-next-line
import { FaBiking, FaStopwatch20, FaFile, FaHeartbeat } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button1 } from "../styles/ButtonStyles";

import { AddModalStyles } from "../styles/LandingStyles";

export const AddModal = () => {
  const navigate = useNavigate();
  const addWeightBtn = () => {
    document.getElementById("addwgtbtn").style.background = " #7769cf";
    document.getElementById("addTitle").style.color = "#fff";
    document.getElementById("addIcon").style.color = "#fff";
    setTimeout(() => {
      navigate("/add");
    }, 100);
  };

  const handleBtnClick = 1;
  return (
    <AddModalStyles id="usersDashboard" style={{ width: "86%" }}>
      <Button1
        type="submit"
        borderRadius="24px"
        height="80px"
        width="90%"
        style={{
          marginLeft: "5%",
          marginRight: "5%",
          marginBottom: "1.5rem",
        }}
        onClick={handleBtnClick}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginLeft: "1%",
            marginTop: "1%",
            marginBottom: "2%",
            width: "100%",
          }}
        >
          <FaHeartbeat
            className="social-icon"
            style={{ width: "46px", color: "7769cf" }}
          />
          <h5 style={{ color: "#000" }}>Add blood pressure</h5>
        </div>
      </Button1>
      <Button1
        id="addwgtbtn"
        type="submit"
        borderRadius="24px"
        height="80px"
        width="90%"
        style={{
          marginLeft: "5%",
          marginRight: "5%",
          marginBottom: "1.5rem",
        }}
        onClick={addWeightBtn}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginLeft: "1%",
            marginTop: "1%",
            marginBottom: "2%",
            width: "100%",
          }}
        >
          <FaFile id="addIcon" style={{ width: "46px", color: "7769cf" }} />
          <h5 id="addTitle" style={{ color: "#000" }}>
            Add weight measurement
          </h5>
        </div>
      </Button1>
      <Button1
        type="submit"
        borderRadius="24px"
        height="80px"
        width="90%"
        style={{
          marginLeft: "5%",
          marginRight: "5%",
          marginBottom: "1.5rem",
        }}
        onClick={handleBtnClick}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginLeft: "1%",
            marginTop: "1%",
            marginBottom: "2%",
            width: "100%",
          }}
        >
          <FaBiking style={{ width: "46px", color: "7769cf" }} />
          <h5 style={{ color: "#000" }}>Add Activity</h5>
        </div>
      </Button1>
      <Button1
        type="submit"
        borderRadius="24px"
        height="80px"
        width="90%"
        style={{
          marginLeft: "5%",
          marginRight: "5%",
          marginBottom: "1.5rem",
        }}
        onClick={handleBtnClick}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginLeft: "1%",
            marginTop: "1%",
            marginBottom: "2%",
            width: "100%",
          }}
        >
          <FaStopwatch20 style={{ width: "46px", color: "7769cf" }} />
          <h5 style={{ color: "#000" }}>Track my workout</h5>
        </div>
      </Button1>
    </AddModalStyles>
  );
};
