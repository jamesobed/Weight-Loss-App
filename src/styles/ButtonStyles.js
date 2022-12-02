import styled from "styled-components";

const Button = styled.button`
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0")};
  color: #fff;
  padding: 0px;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5px")};
  border: none;
  cursor: pointer;
  font-size: 26px;
  font-weight: 600;
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "auto")};
  background-image: ${({ disabled }) =>
    disabled
      ? "linear-gradient(to right, #7769cf, #7769cf)"
      : "linear-gradient(to right, #7769cf,#7769cf)"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  &:hover {
    background-color: ${({ disabled }) => (disabled ? "gray" : "#7769cf")};
  }
`;
export const Button1 = styled.button`
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0")};
  color: #fff;
  padding: 0px;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5px")};
  border: none;
  cursor: pointer;
  font-size: 26px;
  font-weight: 600;
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "auto")};
  background-image: ${({ disabled }) =>
    disabled
      ? "linear-gradient(to right, #fff, #fff)"
      : "linear-gradient(to right, #fff,#fff)"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  &:hover {
    background-color: ${({ disabled }) => (disabled ? "gray" : "#7769cf")};
  }

  #addwgtbtn:hover {
    background-color: #213f7d;
  }
`;

export default Button;
