import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 16px;
  /* gap: 24px; */
  width: 95%;
  height: 100px;
  background: #fff;
  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(33, 63, 125, 0.06);
  padding: 25%;
  margin: 6%;
  border-radius: 26px;

  #userDashboard {
    width: 100%;
  }
  #usercard {
    display: flex;
    flex-direction: column;
    height: 130px;
    min-width: 50%;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
    border-radius: 16px;
    border: 1px solid rgba(33, 63, 125, 0.06);
    justify-content: center;
    align-items: center;
    padding: 6%;
  }

  & #usercard .img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    margin-bottom: 1rem;
    margin-left: 25%;
  }

  /* reduce width by 30% at width less than 500 */
  @media (max-width: 500px) {
    width: 70%;
    height: 70px;
  }
`;
