import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  position: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 1000px) {
    height: 1100px;
  }

  @media screen and (max-width: 768px) {
    height: 1500px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 400px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  max-height: 160px;
  width: auto;
  margin-bottom: 10px;

  @media screen and (max-width: 1000px) {
    max-height: 200px;
    width: auto;
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 20px;
`;

export const ServicesP1 = styled.p`
  color: #fff;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 20px;
`;

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
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  bottom:   0;
  margin-bottom: 10px;
  text-decoration: none;

  &:hover{
    transition: all 0.2 ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#2474a4")};
  }
`;
