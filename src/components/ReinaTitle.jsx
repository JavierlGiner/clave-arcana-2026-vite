import { useEffect, useState } from "react";
import * as Motion from "framer-motion";
import reina from "../images/reina Jirgev.webp";
import potion from "../images/pink potion logo-1.webp";
import styled from "styled-components";
import "../stylesBack.css";

// Definir los estilos con styled-components
const ReinaTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--second-color);
  font-family: var(--font);
  height: 100%;
  overflow: hidden;

  /* Estilo para las imágenes */
  img {
    height: 300px;
    width: auto;
    margin: 20px auto;
  }

  /* Estilo para el texto */
  h1 {
    font-size: 2rem;
  }

  @media (max-width: 760px) {
    img {
      height: 250px;
    }
  }
  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    img {
      height: 150px;
    }
    h1 {
      font-size: 1.25rem;
    }
  }
`;

const ReinaTitle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const elements = [
    <></>,
    <img src={reina} loading="lazy" alt="Reina Jirgev" />,
    <img src={potion} alt="Potion Logo" />,
    <h1>PRESENTS</h1>,
    <></>,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % elements.length);
    }, 1800);

    return () => clearInterval(interval);
  }, [elements.length]);

  return (
    <ReinaTitles>
      <Motion.motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3.5 }}
      >
        {elements[currentIndex]}
      </Motion.motion.div>
    </ReinaTitles>
  );
};

export default ReinaTitle;
