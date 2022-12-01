import React from "react";
import { FooterStyle } from "../../styles/LandingStyles";
import {
  FaHome,
  FaPeopleArrows,
  FaWhatsapp,
  FaChartArea,
  FaPlus,
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
          <FaPeopleArrows className="social-icon" />
        </div>
      </div>
    </FooterStyle>
  );
};
