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
  & .heroText {
    width: 45%;
    flex-direction: column;
    display: flex;

    & p {
      font-size: 4rem;
      font-weight: bolder;
      background: linear-gradient(to right, #de3d6d, #f5844c);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: 2px;
      line-height: 1.3;

      margin: 0%;
    }
    & small {
      color: #03435f;
      margin: 5% 0%;
      font-weight: lighter;
      line-height: 24px;
      letter-spacing: 1px;
      font-size: 1rem;
    }

    @media (max-width: 1024px) {
      width: 100%;
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
  & .footerMenu {
    display: flex;
    /* gap: 25px; */
    list-style-type: none;
    justify-content: center;
    margin: auto;
    padding: 2%;
    margin: 0% 0;
    justify-content: space-between;
  }

  & .foot-nav .footerMenu .social-icon {
    cursor: pointer;
    font-size: 2.5rem;
    color: #c8c8cc;
  }
  & .foot-nav .footerMenu .social-icon:hover {
    color: #212423;
    width: 300px;
    transition: width 2s, height 4s;
  }
`;
