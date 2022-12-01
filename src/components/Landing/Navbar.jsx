import React from "react";
import loginImg from "../../assets/icon/loginImg.png";
import { Wrapper, Nav } from "../../styles/NavbarStyles";

export const Navbar = () => {
  // eslint-disable-next-line
  return (
    <Wrapper>
      <Nav>
        <h1>My Activity</h1>
        <img className="nav-img" src={loginImg} alt="" />
      </Nav>
    </Wrapper>
  );
};
