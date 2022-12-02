import React, { useState } from "react";
import { FooterStyle } from "../../styles/LandingStyles";
import {
  FaHome,
  FaWhatsapp,
  FaChartArea,
  FaPlus,
  FaPersonBooth,
} from "react-icons/fa";

export const Footer = ({ setActive }) => {
  const [activeTab, setActiveTab] = useState("");
  const footerIcons = ["home", "chart", "plus", "whatsapp", "personBooth"];

  const handSetActive = () => {
    setActive(activeTab);
    console.log(activeTab);
  };
  return (
    <FooterStyle>
      <div
        className="foot-nav"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          position: "fixed",
          bottom: "0",
          backgroundColor: "#fff",
          boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          className="footerMenu"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "20%",
            height: "60px",
            cursor: "pointer",
          }}
          onClick={() => {
            setActiveTab(footerIcons[0]);
            handSetActive();
          }}
        >
          <FaHome
            style={{
              color: activeTab === "home" ? "#213f7d" : "#c4c4c4",
              fontSize: "20px",
            }}
            className="social-icon"
          />
          <p
            style={{
              color: activeTab === "home" ? "#213f7d" : "#c4c4c4",
              fontSize: "12px",
              fontWeight: "600",
            }}
          ></p>
        </div>
        <div
          className="footerMenu"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "20%",
            height: "60px",
            cursor: "pointer",
          }}
          onClick={() => {
            setActiveTab(footerIcons[1]);
            handSetActive();
          }}
        >
          <FaChartArea
            style={{
              color: activeTab === "chart" ? "#213f7d" : "#c4c4c4",
              fontSize: "20px",
            }}
            className="social-icon"
          />
          <p
            style={{
              color: activeTab === "chart" ? "#213f7d" : "#c4c4c4",
              fontSize: "12px",
              fontWeight: "600",
            }}
          ></p>
        </div>
        <div
          className="footerMenu"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "20%",
            height: "60px",
            cursor: "pointer",
          }}
          onClick={() => {
            setActiveTab(footerIcons[2]);
            handSetActive();
          }}
        >
          <FaPlus
            style={{
              // color: activeTab === "add" ? "#213f7d" : "#c4c4c4",
              background: "#213f7d",
              fontSize: "20px",
            }}
            className="social-icon"
          />
          <p
            style={{
              color: activeTab === "add" ? "#213f7d" : "#c4c4c4",
              fontSize: "12px",
              fontWeight: "600",
            }}
          ></p>
        </div>
        <div
          className="footerMenu"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "20%",
            height: "60px",
            cursor: "pointer",
          }}
          onClick={() => {
            setActiveTab(footerIcons[3]);
            handSetActive();
          }}
        >
          <FaWhatsapp
            style={{
              color: activeTab === "whatsapp" ? "#213f7d" : "#c4c4c4",
              fontSize: "20px",
            }}
            className="social-icon"
          />
          <p
            style={{
              color: activeTab === "whatsapp" ? "#213f7d" : "#c4c4c4",
              fontSize: "12px",
              fontWeight: "600",
            }}
          ></p>
        </div>
        <div
          className="footerMenu"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "20%",
            height: "60px",
            cursor: "pointer",
          }}
          onClick={() => {
            setActiveTab(footerIcons[4]);
            handSetActive();
          }}
        >
          {" "}
          <FaPersonBooth
            style={{
              color: activeTab === "profile" ? "#213f7d" : "#c4c4c4",
              fontSize: "20px",
            }}
            className="social-icon"
          />
          <p
            style={{
              color: activeTab === "profile" ? "#213f7d" : "#c4c4c4",
              fontSize: "12px",
              fontWeight: "600",
            }}
          ></p>
        </div>
      </div>
    </FooterStyle>
  );
};
