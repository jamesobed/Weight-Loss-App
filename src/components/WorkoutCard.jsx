import React from "react";
import { FaPlay, FaBicycle } from "react-icons/fa";
import step1 from "../assets/step1.png";
import stp3 from "../assets/stp3.png";
import step2 from "../assets/step2.png";
import {
  SingleCardStyle,
  WorkOutCardi,
  WorkOutCardStyles,
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
              {/* <h2>{usercard.amount}</h2> */}
              {/* <p className="py-2 mb-0">{usercard.caption}</p> */}
            </div>
          );
        })}
    </WorkOutCardi>
  );
};
export const HistoryCard = () => {
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
              {/* <h2>{usercard.amount}</h2> */}
              {/* <p className="py-2 mb-0">{usercard.caption}</p> */}
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
              {/* <h2>{usercard.amount}</h2> */}
              {/* <p className="py-2 mb-0">{usercard.caption}</p> */}
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
              {/* <h2>{usercard.amount}</h2> */}
              {/* <p className="py-2 mb-0">{usercard.caption}</p> */}
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
              {/* <h2>{usercard.amount}</h2> */}
              {/* <p className="py-2 mb-0">{usercard.caption}</p> */}
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
