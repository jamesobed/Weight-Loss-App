import React, { useEffect } from "react";
import { FooterStyle } from "../../styles/LandingStyles";
import { FaHome, FaWhatsapp, FaChartArea, FaPersonBooth } from "react-icons/fa";

export const Footer = ({ setActive, activeTab, setActiveTab }) => {
  // const [activeTab, setActiveTab] = useState("");
  const footerIcons = ["home", "chart", "plus", "whatsapp", "personBooth"];

  const handSetActive = () => {
    setActive(activeTab);
  };
  useEffect(() => {
    handSetActive();
    // eslint-disable-next-line
  }, [activeTab]);
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
          onClick={() => {
            handSetActive();
            setActiveTab(footerIcons[0]);
          }}
        >
          <FaHome
            style={{
              color: activeTab === "home" ? "#213f7d" : "#c4c4c4",
              fontSize: "20px",
            }}
            className="social-icon"
          />
        </div>
        <div
          className="footerMenu"
          onClick={() => {
            handSetActive();
            setActiveTab(footerIcons[1]);
          }}
        >
          <FaChartArea
            style={{
              color: activeTab === "chart" ? "#213f7d" : "#c4c4c4",
              fontSize: "20px",
            }}
            className="social-icon"
          />
        </div>
        <div
          className="footerMenu"
          onClick={() => {
            setActiveTab(footerIcons[2]);
            handSetActive();
          }}
        >
          <div
            className="social-icon"
            style={{
              color: "#fff",
              // border: "1px solid green",
              borderRadius: "50%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "60px",
              height: "70%",
              width: "20%",
              padding: "10%",
              marginTop: "-45%",
              background: "#7769cf",
            }}
          >
            <p style={{ marginTop: "-40%" }}>+</p>
          </div>
        </div>
        <div
          className="footerMenu"
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
        </div>
        <div
          className="footerMenu"
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
        </div>
      </div>
    </FooterStyle>
  );
};
