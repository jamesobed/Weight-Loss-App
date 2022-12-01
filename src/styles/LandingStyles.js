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

// ABOUT SECTION========================================
export const AboutSection = styled.div`
  display: flex;
  padding: 60px 10%;
  color: #03435f;

  & .aboutDescription {
    margin: -1% 2% 0 2%;
    width: 40%;
    & h2 {
      font-size: 2.5rem;
      font-weight: 600;
      line-height: 56px;
      margin: 0 0 3% 0;
    }
    & small {
      font-size: 1.1rem;
      font-weight: lighter;
    }
  }
  @media (max-width: 1024px) {
    & .aboutDescription {
      width: 100%;
      & h2 {
        font-size: 2rem;
        line-height: 36px;
      }
    }
  }
`;
export const SideIndicator = styled.div`
  width: 10px;
  max-width: 10px;
  height: 100;
  border: 2px solid red;
  background-color: #de3d6d;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const AboutCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  gap: 45px;
  padding: 0 10%;
  color: #03435f;
  justify-content: center;
`;
export const AboutCard = styled.div`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#FFF1F3"};
  padding: 25px;
  /* width: 26%; */
  width: 19em;
  align-items: center;
  & p {
    font-weight: lighter;
    line-height: 24px;
    font-size: 14px;
  }
`;

// PRODUCT SECTION========================================
export const ProductSection = styled.div`
  background: linear-gradient(to right, #464abd, #464abd);
  margin: 7% 10%;
  min-height: 40vh;
  border-radius: 24px;
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  color: #03435f;
  justify-content: space-between;
  & .productDescription {
    width: 40%;
    margin: 8%;
    & h2 {
      font-size: 2.5rem;
      font-weight: 600;
      line-height: 56px;
      margin: 0 0 3% 0;
    }
    & p {
      font-weight: lighter;
      line-height: 34px;
      margin-bottom: 6%;
    }
  }
  & .productImage {
    align-self: end;
    width: 40%;
    min-width: 40%;
    margin-bottom: -0.3%;
    & img {
      width: 80%;
    }
    @media (max-width: 1024px) {
      & img {
        width: 50%;
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
  display: flex;
`;
export const ProductSectionHero = styled.div`
  background: linear-gradient(to right, gray, #cfaef6);
  /* margin: 7% 10%; */
  min-height: 30vh;
  border-radius: 24px;
  z-index: 4;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  color: #03435f;
  /* justify-content: space-between; */
  & .productDescription {
    width: 40%;
    margin: 8%;
    & h2 {
      font-size: 2.5rem;
      font-weight: 600;
      line-height: 56px;
      margin: 0 0 3% 0;
    }
    & p {
      font-weight: lighter;
      line-height: 34px;
      margin-bottom: 6%;
    }
  }
  & .productImage {
    align-self: end;
    width: 40%;
    min-width: 40%;
    margin-bottom: -0.3%;
    & img {
      width: 80%;
    }
    @media (max-width: 1024px) {
      & img {
        width: 50%;
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

// TESTIMONIAL SECTION========================================
export const TestimonialSection = styled.div`
  color: #03435f;
  font-size: larger;
  padding: 0% 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  & p {
    font-size: 1.1rem;
    font-weight: lighter;
    width: 100%;
    margin: 0 32%;
    line-height: 24px;
  }

  @media (max-width: 1024px) {
    & p {
      margin: 0;
    }
  }
`;

export const TestimonialCardWrapper = styled.div`
  padding: 0% 5%;
  display: flex;
  margin-top: 35px;
  .rec.rec-arrow {
    background-color: #f5f5f5;
  }

  .rec.rec-arrow:hover {
    background-color: #bcb8b8 !important;
  }
`;
export const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9% 8%;
  margin: 10px;
  min-height: 15rem;
  height: 18rem;
  /* border:2px solid red; */
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#F5F5F5"};
  & h3 {
    margin: 5px 0 20px 0;
  }
  & p {
    /* font-size: 0.5rem; */
    font-weight: lighter;
    width: 100%;
    line-height: 26px;
    margin: 0;
  }
`;
// FOOTER SECTION========================================

export const FooterStyle = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  margin-top: 10%;
  background-color: #21334f;
  /* padding: 3% 1% 1% 1%; */
  text-align: center;
  color: #fff;
  font-weight: lighter;
  & .footerMenu {
    display: flex;
    /* gap: 25px; */
    list-style-type: none;
    justify-content: center;
    margin: auto;
    padding: 3%;
    margin: 0% 0;
    justify-content: space-between;
  }

  & .footerMenu .social-icon {
    cursor: pointer;
    font-size: 2.5rem;
  }
  & .footerMenu .social-icon:hover {
    color: #de3d6d;
    width: 300px;
    transition: width 2s, height 4s;
  }
`;
