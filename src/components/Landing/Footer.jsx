import React from "react";
import { FooterStyle } from "../../styles/LandingStyles";
import {
  FaHome,
  FaWhatsapp,
  FaChartArea,
  FaPlus,
  FaPersonBooth
} from "react-icons/fa";
export const Footer = () => {
  return (
    <FooterStyle>
      <div className="footerMenu">
        <div>
          <FaHome className="social-icon" />
        </div>
        <div>
          <FaChartArea className="social-icon" />
        </div>
        <div>
          <FaPlus className="social-icon" />
        </div>
        <div>
          <FaWhatsapp className="social-icon" />
        </div>
        <div>
          <FaPersonBooth className="social-icon" />
        </div>
      </div>
    </FooterStyle>
  );
};
