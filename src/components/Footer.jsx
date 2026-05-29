import React from "react";
import styled from "styled-components";
import "../stylesBack.css";
import { Link } from "react-router-dom";
import PoliticayPrivacidad from "../screens/PoliticayPrivacidad";
import TerminosCondiciones from "../screens/TerminosCondiciones";

const StyledFooter = styled.footer`
  position: relative;
  bottom: 0;
  text-align: center;
  font-family: "Aubrey", serif;
  color: var(--second-color);
  background-color: var(--first-color);
  width: 100%;
  height: 4rem;
  font-size: 12px;

  @media (min-width: 1500px) {
    font-size: 16px;
    height: 4rem;
    margin-top: 40px;
  }
  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    font-size: 10px;
    margin-top: 0;
    height: 3rem;
  }
`;
const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  a {
    color: var(--second-color);
    text-decoration: none;
    font-size: 10px;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h4>DEVELOPED BY REINA JIRVEG | JUNIN, BUENOS AIRES | 2026</h4>
      <LinksContainer>
        <Link to="/terms">Términos y Condiciones</Link>
        <Link to="/privacy">Política de Privacidad</Link>
      </LinksContainer>
    </StyledFooter>
  );
};

export default Footer;
