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

const List = styled.ul`
  margin: 0 0 1.5rem 1.5rem;
`;

const Item = styled.li`
  margin-bottom: 0.5rem;
`;

const TerminosCondiciones = () => {
  const { termsConditions } = useTextos();

  return (
    <Container>
      <Title>{termsConditions.title}</Title>

      <Updated>{termsConditions.updated}</Updated>

      <Paragraph>{termsConditions.intro}</Paragraph>

      <Paragraph>{termsConditions.p1}</Paragraph>

      <Paragraph>{termsConditions.p2}</Paragraph>

      <List>
        <Item>{termsConditions.item1}</Item>
        <Item>{termsConditions.item2}</Item>
        <Item>{termsConditions.item3}</Item>
        <Item>{termsConditions.item4}</Item>
      </List>

      <Paragraph>{termsConditions.p3}</Paragraph>

      <Paragraph>{termsConditions.p4}</Paragraph>

      <Paragraph>{termsConditions.p5}</Paragraph>

      <Paragraph>{termsConditions.p6}</Paragraph>
    </Container>
  );
};

export default TerminosCondiciones;
