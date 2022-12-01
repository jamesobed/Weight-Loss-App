import React from "react";
import stp3 from "../assets/stp3.png";
import step2 from "../assets/step2.png";

import styled from "styled-components";
import { FaPlay, FaBicycle } from "react-icons/fa";
export const WorkOutCard = styled.div`
  // make my display grid and scroll in row
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  overflow-y: scroll;

  padding: 3%;
  gap: 40px;

  */ #userDashboard {
    width: 100%;
  }
  #usercard {
    display: flex;
    flex-direction: column;
    height: 230px;
    min-width: 22%;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    border: 1px solid rgba(33, 63, 125, 0.06);
    justify-content: center;
    align-items: center;

    h2 {
      color: #213f7d;
      font-weight: 600;
      font-family: "Work Sans", sans-serif;
    }
  }
  @media (max-width: 768px) {
    #usersDashboard {
      width: 100%;
      background-color: #fff;
      display: grid;
      grid-template-columns: 47% 47%;
      #usercard {
        margin-bottom: 1rem;
      }
    }
    th {
      font-size: 12px;
      align-items: center;
      img {
        display: none;
      }
    }
  }

  .body-pd {
    padding-top: 3rem;
  }
  @media (min-width: 768px) {
    .body-pd {
      padding-left: calc(var(--sidenav-width) + 2rem);
    }
  }
`;
export const SingleCardStyle = styled.div`
  padding: 7%;
  gap: 40px;

  #userDashboard {
    width: 100%;
  }
  #usercard {
    display: flex;
    flex-direction: row;
    height: 230px;
    min-width: 22%;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    border: 1px solid rgba(33, 63, 125, 0.06);
    justify-content: center;
    align-items: center;

    h3 {
      color: #213f7d;
      display: flex;
      width: 40%;
      margin-left: 5%;
      margin-right: 60%;
      font-weight: 600;
      font-family: "Work Sans", sans-serif;
    }
  }
  @media (max-width: 468px) {
    padding-left: 5%;
    padding-right: 5%;

    #usersDashboard {
      width: 100%;
      background-color: #fff;
      display: grid;
      grid-template-columns: 47% 47%;
      #usercard {
        margin-bottom: 1rem;
      }
    }
    th {
      font-size: 12px;
      align-items: center;
      img {
        display: none;
      }
    }
    h3 {
      font-weight: 400;
      width: 40%;
      margin-left: 3%;
      margin-right: 50%;
    }
  }

  .body-pd {
    padding-top: 3rem;
  }
  @media (min-width: 768px) {
    .body-pd {
      padding-left: calc(var(--sidenav-width) + 2rem);
    }
  }

  & #usercard .social-icon {
    width: 306px;
    height: 46px;
  }
`;
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
const UsersDashboardCard = () => {
  return (
    <WorkOutCard
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
              {/* <h2>{usercard.amount}</h2> */}
              {/* <p className="py-2 mb-0">{usercard.caption}</p> */}
            </div>
          );
        })}
    </WorkOutCard>
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
export const SimpleCard = () => {
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
