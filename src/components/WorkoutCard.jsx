import React from "react";
import styled from "styled-components";
export const WorkOutCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: column;
  align-items: flex-start;
  padding: 3%;
  gap: 40px;

  #userDashboard {
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
const Usercards = [
  {
    id: 1,
    icon: "../Users/users.svg",
    caption: "Users",
    amount: "2,453",
  },
  {
    id: 2,
    icon: "../Users/active-users.svg",
    caption: "Active Users",
    amount: "2,453",
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
              <div style={{ width: "40", height: "40" }}>
                <img src={usercard.icon} alt="" />
              </div>
              <h2>{usercard.amount}</h2>
              <p className="py-2 mb-0">{usercard.caption}</p>
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
        <div style={{ width: "40", height: "40" }}>
          <img src={"usercard.icon"} alt="" />
        </div>
        <h2>{"usercard.amoun"}</h2>
        <p className="py-2 mb-0">{"usercard.caption"}</p>
      </div>
    </SingleCardStyle>
  );
};

export default UsersDashboardCard;
