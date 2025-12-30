import React from "react";
import styled from "styled-components";
import "../stylesBack.css";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  text-align: center;
  font-family: var(--font);
  color: var(--second-color);
  background-color: var(--first-color);
  width: 300px;
  height: 4rem;
  font-size: 11px;

  @media (min-width: 1500px) {
    font-size: 16px;
    height: 4rem;
    margin-top: 40px;
  }
  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    font-size: 12px;
    margin-top: 0;
    height: 3rem;
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <h4>
        DEVELOPED BY REINA JIRVEG v1.0
        <br />
        JUNIN, BUENOS AIRES. 2023 - 2024
      </h4>
    </StyledFooter>
  );
};

export default Footer;
