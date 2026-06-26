import React from "react";
import styled from "styled-components";
import { useTextos } from "../contexts/LanguageContext";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  color: #000000;
  line-height: 1.7;

  height: 100vh;
  overflow-y: auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`;

const Updated = styled.p`
  text-align: center;
  font-style: italic;
  opacity: 0.8;
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

const PoliticayPrivacidad = () => {
  const { privacyPolicy } = useTextos();

  return (
    <Container>
      <Title>{privacyPolicy.title}</Title>

      <Updated>{privacyPolicy.updated}</Updated>

      <Paragraph>{privacyPolicy.intro}</Paragraph>
      <Paragraph>{privacyPolicy.p1}</Paragraph>
      <Paragraph>{privacyPolicy.p2}</Paragraph>
      <Paragraph>{privacyPolicy.p3}</Paragraph>
      <Paragraph>{privacyPolicy.p4}</Paragraph>
      <Paragraph>{privacyPolicy.p5}</Paragraph>
      <Paragraph>{privacyPolicy.p6}</Paragraph>
    </Container>
  );
};

export default PoliticayPrivacidad;
