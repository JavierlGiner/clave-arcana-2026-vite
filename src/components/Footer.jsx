import React from "react";
import styled from "styled-components";
import "../styles.css";
import { useTextos } from "../contexts/LanguageContext";
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
  height: 2rem;
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
    font-size: 11px;
  }

  a:hover {
    text-decoration: underline;
  }
  @media (min-width: 1024px) {
    a {
      font-size: 14px;
    }
  }
`;

const Footer = () => {
  const { footer } = useTextos();

  return (
    <StyledFooter>
      <h4>{footer.developed}</h4>

      <LinksContainer>
        <Link to="/terms">{footer.terms}</Link>
        <Link to="/privacy">{footer.privacy}</Link>
      </LinksContainer>
    </StyledFooter>
  );
};

export default Footer;
