import React from "react";
import styled from "styled-components";
import ficha4true from "../images/Ficha-3-true.webp";
import ficha4false from "../images/Ficha-3-false.webp";

const LoaderContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: black;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 25px;

  z-index: 9999;
`;

const CoinLoader = styled.div`
  .coin-container {
    perspective: 800px;
  }

  .coin {
    width: 100px;
    height: 100px;
    position: relative;
    transform-style: preserve-3d;
    animation: rotateCoin 3s infinite linear;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .coin-face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .front {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .back {
    border-radius: 50%;
    transform: rotateY(180deg);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @keyframes rotateCoin {
    0% {
      transform: rotateX(0deg);
    }

    100% {
      transform: rotateY(360deg);
    }
  }

  @media (max-width: 920px) {
    .coin {
      width: 60px;
      height: 60px;
    }
  }
`;

const LoadingText = styled.p`
  color: white;
  font-family: var(--font);
  font-size: 18px;
  margin: 0;
`;

const ProgressContainer = styled.div`
  width: 280px;
  height: 10px;

  border-radius: 50px;
  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 920px) {
    width: 220px;
  }
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${({ progress }) => progress}%;

  background: linear-gradient(90deg, #d4af37, #f5d76e);

  transition: width 0.3s ease;
`;

const Percentage = styled.p`
  color: #d4af37;
  font-size: 14px;
  margin: 0;
`;

const Loader = ({ progress = 0 }) => {
  return (
    <LoaderContainer>
      <CoinLoader className="coin-container">
        <div className="coin">
          <div className="coin-face front">
            <img src={ficha4true} alt="Ficha verdadera" />
          </div>

          <div className="coin-face back">
            <img src={ficha4false} alt="Ficha falsa" />
          </div>
        </div>
      </CoinLoader>

      <LoadingText>Cargando Clave Arcana...</LoadingText>

      <ProgressContainer>
        <ProgressFill progress={progress} />
      </ProgressContainer>

      <Percentage>{progress}%</Percentage>
    </LoaderContainer>
  );
};

export default Loader;
