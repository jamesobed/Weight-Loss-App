import styled from "styled-components";
// HERO BANNER========================================
export const Hero = styled.div`
  padding: 7rem 5% 0 10%;
  min-height: 20vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  background-color: rgba(255, 249, 246);
  align-items: center;
  z-index: 1;
  @media (max-width: 1024px) {
    & .heroText {
      margin: 4% 0 10% 0;
      text-align: center;
      align-items: center;
      flex-direction: column;

      & p {
        font-size: 2rem !important;
        line-height: 1 !important;
        letter-spacing: 4px !important;
      }
    }
  }

  & .heroImage {
    align-self: end;
    min-width: 20%;
    margin-bottom: -0.4%;
    & img {
      width: 100%;
      height: 100%;
    }
  }
`;

// PRODUCT SECTION========================================
export const ProductSection = styled.div`
  background: linear-gradient(to right, #7769cf, #7769cf);
  margin: 3% 3%;
  min-height: 10vh;
  border-radius: 24px;
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  color: #03435f;
  justify-content: center;
  align-items: center;

  & .py-2 {
    margin: 0%;
    border-radius: 1rem;
    height: 100%;
  }
  & .productImage {
    /* align-self: end; */
    border-radius: 24px;
    width: 100%;
    object-fit: contain;
    /* min-width: 40%; */
    margin-bottom: -0.3%;
    /* margin-right: -0.3%; */
    & img {
      width: 100%;
      border-radius: 2rem;
    }
    @media (max-width: 1024px) {
      & img {
        width: 100%;
      }
    }
  }
  @media (max-width: 280px) {
    & .productDescription {
      & h2 {
        font-weight: 600;
        font-size: 2rem;
      }
    }
  }
  @media (max-width: 1024px) {
    & .productDescription {
      width: 100%;
      & h2 {
        line-height: 46px;
        text-align: center;
        padding: 20px 0;
      }
    }
    & .productImage {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: 0%;
    }
  }
`;
export const BMISectionCard = styled.div`
  background: linear-gradient(to right, #fff, #fff);
  margin: 3% 3%;
  min-height: 10vh;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  width: 94%;
  /* flex-direction: row; */
  /* flex-wrap: wrap; */
  color: #03435f;
  justify-content: center;
  align-items: center;

  & .mainCardContaine .cardContaine {
    width: 100%;
    display: flex;
    flex-direction: row;
    /* display: none; */
  }
  & .title {
    display: flex;
    width: 96%;
    justify-content: space-evenly;
    margin-top: 1%;
  }
  & .titleCircle {
    display: flex;
    width: 96%;
    justify-content: space-evenly;
    margin-top: -3%;
    margin-bottom: 1%;
  }
  & .titleNumber {
    position: absolute;
    display: flex;
    width: 96%;
    justify-content: space-evenly;
    margin-top: 3%;
  }
  & .titleCircle h3 {
    margin-right: 3%;
  }
  & .titleCircle .circle {
    width: 3%;
    background: green;
    border-radius: 50%;
    height: 30px;
    margin-top: 1%;
    margin-right: 1%;
  }

  & .mainCardContaine .cardContaine .orange {
    position: absolute;
    width: 23%;
    height: 15px;
    border-radius: 5px;
    /* margin: 1%; */
    /* margin-top: 1%; */
  }
  @media (max-width: 280px) {
    & .productDescription {
      & h2 {
        font-weight: 600;
        font-size: 2rem;
      }
    }
  }
`;
export const ProductSectionCard = styled.div`
  background: #fff;
  margin: 3% 3%;
  min-height: 90px;
  border-radius: 24px;
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  color: #03435f;
  justify-content: center;
  align-items: center;
  border-radius: 2rem, 2rem, 2rem, 2rem;
  margin-right: 1rem;
  margin-left: 1rem;
  & .py-3 {
    background-color: #fff;
    margin: 0%;
    /* border-radius: 1rem; */
    height: 100%;
  }

  & .cardImagContaine {
    /* margin-top: 25%; */
    background-color: #fff;
    height: 50px;
    margin-right: 3%;
    padding-left: 3%;
    padding-right: 1%;
    vertical-align: middle;
    justify-content: stretch;
    align-items: flex-end;
    text-align: right;
    z-index: 10;
  }
  & .cardContaine .rightText {
    /* margin-top: 25%; */
    background-color: #fff;
    height: 50px;
    margin-right: 5%;
    padding-left: 1%;
    padding-right: 2%;
    vertical-align: middle;
    justify-content: stretch;
    align-items: flex-end;
    text-align: right;
    z-index: 10;
  }
  & .cardContaine .rightText {
    #submal {
      font-size: medium;
      font-weight: 300;
    }
  }
  & .productImage {
    /* align-self: end; */
    border-radius: 24px;
    width: 100%;
    object-fit: contain;
    /* min-width: 40%; */
    margin-bottom: -0.3%;
    /* margin-right: -0.3%; */
    & img {
      width: 100%;
      border-radius: 2rem;
    }
    @media (max-width: 1024px) {
      & img {
        width: 100%;
      }
    }
  }
  @media (max-width: 280px) {
    & .productDescription {
      & h2 {
        font-weight: 600;
        font-size: 2rem;
      }
    }
  }
  @media (max-width: 1024px) {
    & .productDescription {
      width: 100%;
      & h2 {
        line-height: 46px;
        text-align: center;
        padding: 20px 0;
      }
    }
    & .productImage {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: 0%;
    }
  }
`;

export const WorkOutCard = styled.div`
  top: 5%;
  overflow-x: scroll;
`;
// FOOTER SECTION========================================
export const FooterStyle = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  margin-top: 10%;
  background-color: #fff;
  border-radius: 3rem;
  /* padding: 3% 1% 1% 1%; */
  text-align: center;
  color: #3c3c40;
  font-weight: lighter;
  & .foot-nav .footerMenu {
    display: flex;
    /* gap: 25px; */
    list-style-type: none;
    justify-content: center;
    margin: auto;
    padding: 2%;
    margin: 0% 0;
    justify-content: space-around;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 60px;
    cursor: pointer;
  }

  & .foot-nav .footerMenu .social-icon {
    cursor: pointer;
    font-size: 2.5rem;
    color: #c8c8cc;
  }
  & .foot-nav .footerMenu .social-icon:hover {
    color: #212423;
    transition: width 2s, height 4s;
  }
`;
//CARD SECTION ===============================================
export const WorkOutCardi = styled.div`
  // make my display grid and scroll in row
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  overflow-y: scroll;

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
    border-radius: 16px;
    border: 1px solid rgba(33, 63, 125, 0.06);
    justify-content: center;
    align-items: center;
    padding: 6%;

    h2 {
      color: #213f7d;
      font-weight: 600;
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
export const WorkOutCardStyles = styled.div`
  // make my display grid and scroll in row
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
  overflow-y: scroll;

  padding: 3%;
  gap: 40px;

  * #userDashboard {
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
    border-radius: 16px;
    border: 1px solid rgba(33, 63, 125, 0.06);
    justify-content: center;
    align-items: center;
    padding: 6%;

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
    height: 250px;
    min-width: 22%;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
    border: 1px solid rgba(33, 63, 125, 0.06);
    justify-content: center;
    align-items: center;

    h2 {
      color: #213f7d;
      display: flex;
      width: 100%;
      margin-left: 40%;
      margin-right: 50%;
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
export const SingleCardStyleSmall = styled.div`
  padding: 7%;

  #userDashboard {
    width: 100%;
  }
  #usercard {
    display: flex;
    flex-direction: row;
    height: 80px;
    min-width: 22%;
    word-wrap: break-word;
    /* background-color: #fff; */
    background-clip: border-box;
    box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
    border: 1px solid rgba(33, 63, 125, 0.06);
    justify-content: center;
    align-items: center;
    width: "100%";
    p {
      color: #213f7d;
      display: flex;
      width: 100%;
      margin-left: 50%;
      margin-right: 50%;
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

    p {
      font-weight: 400;
      width: 40%;
      margin-left: 3%;
      margin-right: 50%;
    }
  }

  & #usercard .social-icon {
    width: 306px;
    height: 46px;
  }
`;

// ADD MODAL SECTION========================================
export const AddModalStyles = styled.div`
  padding: 7%;
  /* gap: 40px; */
  /* background-color: #bbbfbc; */
  background-color: #abc;
  height: "120px";
  border: 1px solid rgba(33, 63, 125, 0.06);
  border-radius: 30px;
  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
  /* margin-bottom: 15%; */
  width: 50%;
  z-index: 1000;
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
`;
export const ModalOverlayStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ManagedWorkedOutStyles = styled.div`
  width: 40%;
  margin-left: 30%;
  margin-bottom: 5rem;
  /* height: 100px; */

  .middle {
    height: 280px;
    background-color: #7769cf;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 120px;
    border-bottom-right-radius: 120px;
    z-index: 1000;
  }

  .middle h1 {
    color: white;
    text-align: center;
    margin-top: 50px;
    font-weight: 800;
  }
  @media (max-width: 850px) {
    .middle {
      height: 200px;

      border-bottom-left-radius: 80px;
      border-bottom-right-radius: 80px;
    }
  }
  @media (max-width: 588px) {
    .middle {
      height: 150px;
      border-bottom-left-radius: 50px;
      border-bottom-right-radius: 50px;
    }
  }
  @media (max-width: 408px) {
    .middle {
      height: 100px;
      border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;
    }
  }
`;
