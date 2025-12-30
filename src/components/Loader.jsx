import React from "react";
import styled from "styled-components";
import ficha4true from "../images/Ficha-3-true.webp";
import ficha4false from "../images/Ficha-3-false.webp";

// Estilos del contenedor del loader
const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
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
    background-color: #f0f0f0;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .back {
    background-color: #f0f0f0;
    border-radius: 50%;
    transform: rotateY(180deg);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Animación de rotación */
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
      width: 50px;
      height: 50px;
    }
  }
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <CoinLoader className="coin-container">
        <div className="coin">
          <div className="coin-face front">
            <img src={ficha4true} alt="Cara de la moneda" />
          </div>
          <div className="coin-face back">
            <img src={ficha4false} alt="Cruz de la moneda" />
          </div>
        </div>
      </CoinLoader>
    </LoaderContainer>
  );
};

export default Loader;
