// eslint-disable-next-line
import React, { useState } from "react";
import { BarCarouselComponent } from "../components/Landing/carousel/CarouselComponent";

// eslint-disable-next-line
import Chart from "react-apexcharts";
import { FaPersonBooth, FaGgCircle, FaLessThan } from "react-icons/fa";
import { Nav } from "../styles/NavbarStyles";
import { Link, useNavigate } from "react-router-dom";
import {
  SingleCardStyle,
  ManagedWorkedOutStyles,
} from "../styles/LandingStyles";
import Button, { Button1 } from "../styles/ButtonStyles";

export const SingleCardSet = ({ input }) => {
  return (
    <SingleCardStyle
      id="usersDashboard"
      style={{ width: "50%", height: `${input[1]}px` }}
    >
      <div
        id="usercard"
        className="py-3 px-3"
        style={{ display: "block", width: "100%" }}
      >
        <div
          className="gearCl"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
            marginTop: "5%",
            marginLeft: "2%",
          }}
        >
          <p>{input[2]}</p>
          <FaGgCircle className="social-icon" style={{ width: "16px" }} />
        </div>
        <h2 style={{ width: "100%" }}>{input[0]}</h2>
      </div>
    </SingleCardStyle>
  );
};
function ManagedWorkoutCard() {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    // navigate to '/'
    navigate("/");
  };
  return (
    <div>
      <>
        <Nav>
          <div style={{ display: "flex" }}>
            <h1>
              {" "}
              <Link to="/">
                <FaLessThan
                  style={{
                    fontSize: "40px",
                    top: "-30px",
                  }}
                  className="social-icon"
                />
              </Link>
              {"  "}
              Add Weight
            </h1>
          </div>
          <FaPersonBooth
            style={{
              fontSize: "40px",
              top: "-30px",
            }}
            className="social-icon"
          />
        </Nav>

        <ManagedWorkedOutStyles>
          <div className="middle">
            <h1>52,3</h1>
          </div>
        </ManagedWorkedOutStyles>
        <br />
        <br />
        <BarCarouselComponent />
        <br />
        <br />
        <div className="flexTop" style={{ display: "flex", width: "100%" }}>
          <Button1
            type="submit"
            borderRadius="24px"
            height="80px"
            width="90%"
            style={{
              marginLeft: "5%",
              marginRight: "5%",
              marginBottom: "1.5rem",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
            }}
            onClick={handleBtnClick}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
              }}
            >
              <h2
                style={{
                  color: "#213f7d",
                  alignItems: "center",
                  textAlign: "center",
                  margin: "1%",
                }}
              >
                Male
              </h2>
            </div>
          </Button1>
          <Button1
            id="femalebtn"
            type="submit"
            borderRadius="24px"
            height="80px"
            width="90%"
            style={{
              marginLeft: "5%",
              marginRight: "5%",
              marginBottom: "1.5rem",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
            }}
            onClick={() => {
              // eslint-disable-next-line
              document.getElementById("femalebtn").style.border =
                "1px solid #579428";
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
              }}
            >
              <h2
                style={{
                  color: "#213f7d",
                  alignItems: "center",
                  textAlign: "center",
                  margin: "1%",
                }}
              >
                Female
              </h2>
            </div>
          </Button1>
        </div>
        <br />
        <br />
        <div
          className="flexBottom"
          style={{ display: "flex", width: "100%", marginTop: "-3.8rem" }}
        >
          <SingleCardSet input={[21, 300, "Age"]} />
          <SingleCardSet input={[173, 300, "Height"]} />
        </div>
        <Button
          type="submit"
          borderRadius="24px"
          height="80px"
          width="70%"
          style={{
            marginLeft: "15%",
            marginRight: "15%",
            marginBottom: "1.5rem",
          }}
          onClick={handleBtnClick}
        >
          Save
        </Button>
      </>
    </div>
  );
}

export default ManagedWorkoutCard;
