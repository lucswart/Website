import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Button = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#2474a4" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: color: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: ${({ buttonnodisplay }) => (buttonnodisplay ? "none" : "flex")};;
  justify-content: center;
  align-items: center;
  transition: all 0.2 ease-in-out;
  text-decoration: none;

  &:hover{
    transition: all 0.2 ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#2474a4")};
  }
`;
