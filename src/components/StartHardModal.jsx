import React, { useEffect } from "react";
import ficha8 from "../images/Ficha-8-false.webp";
import hardlvl from "../assets/hardlvl.mp4";
import { useTextos } from "../contexts/LanguageContext";
import styled from "styled-components";
import "../styles.css";

const StartHardModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  /* Cuando el dispositivo es móvil y está en orientación vertical */
  @media (max-width: 480px) and (orientation: portrait) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  /* Cuando el dispositivo es móvil y está en orientación horizontal */
  @media (max-width: 480px) and (orientation: landscape) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const StartBtn = styled.button`
  background-color: var(--second-color);
  font-family: var(--font);
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--first-color);
  border: none;
  /* padding: 16px 20px; */
  border-radius: 15px;
  width: 120px;
  height: 60px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s,
    border 0.3s;
  opacity: 0;
  animation: fadeIn 1s 2s forwards;

  &:hover {
    background-color: var(--modal-bg);
    color: var(--first-color-beta);
    border: 2px solid var(--first-color-beta);
  }

  /* Ajustes para pantallas móviles en modo vertical */
  @media (max-width: 720px) and (orientation: portrait) {
    width: 70px;
    height: 35px;
    font-size: 16px;
  }

  /* Ajustes para pantallas móviles en modo horizontal */
  @media (max-width: 480px) and (orientation: landscape) {
    width: 180px;
    height: 80px;
    font-size: 22px;
  }

  @media (max-width: 950px) and (max-height: 520px) and (orientation: landscape) {
    width: 80px;
    height: 40px;
    font-size: 16px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 800px;
  width: 900px;
  background-color: transparent;
  font-family: "Aubrey", serif;

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  .img-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 260px;
    opacity: 0;
    animation: fadeIn 1s 0.5s forwards;
    padding-bottom: 18px;

    .coin {
      width: 200px;
      height: auto;
      border-radius: 50%;
      border: 2px solid rgba(255, 0, 255, 0.7);
      background: radial-gradient(
        circle,
        rgba(128, 0, 128, 0.8),
        rgba(0, 0, 0, 0.9)
      ); /* Fondo brillante oscuro */
      box-shadow:
        0 0 15px 5px rgba(255, 0, 255, 0.7),
        0 0 30px rgba(255, 0, 255, 0.5); /* Resplandor */
      transform: scale(1.1);
      opacity: 0.8;
    }

    .gif {
      width: 350px;
      height: 250px;
      border-radius: 8px;
    }
  }

  .dialogue-box {
    border-radius: 8px;
    width: auto;
    height: 200px;
    opacity: 0;
    animation: fadeIn 1s 1s forwards;
    font-size: 24px;
    background-color: transparent;
    text-align: center;
  }

  p {
    color: var(--modal-bg);
    font-weight: 700;
    /* white-space: nowrap; */
    letter-spacing: 1px;
    animation:
      typing 3s steps(30) 1s forwards,
      blink 0.75s step-end infinite;
  }

  @keyframes typing {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }

  /* Estilos para la orientación vertical del móvil */
  @media (max-width: 720px) and (orientation: portrait) {
    height: auto;

    .container {
      gap: 0px;
      justify-content: space-evenly;
    }
    .img-box {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: auto;
      height: auto;
      opacity: 0;
      animation: fadeIn 1s 0.5s forwards;
      gap: 30px;

      .coin {
        width: 80px;
        height: auto;
      }

      .gif {
        width: auto;
        height: 135px;
      }
    }

    .dialogue-box {
      width: auto;
      max-width: 320px;
      text-align: center;
      height: auto;
      font-size: 16px;
      padding-bottom: 15px;
    }
    .desktop-text {
      display: none;
    }
  }

  /* Estilos para la orientación horizontal del móvil */
  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    height: 100%;
    width: auto;
    justify-content: space-evenly;
    padding: 10px;

    .container {
      flex-direction: column;
      justify-content: center;
      gap: 0px;
      height: 280px;
      padding-bottom: 8px;
    }
    .img-box {
      display: flex;
      justify-content: space-between;
      width: auto;
      height: auto;
      gap: 30px;
      opacity: 0;
      animation: fadeIn 1s 0.5s forwards;
      .coin {
        width: 100px;
        height: auto;
      }

      .gif {
        width: auto;
        height: 120px;
      }
    }
    .dialogue-box p {
      font-size: 14px;
      text-align: center;
    }
    .dialogue-box {
      padding-top: 0px;
      height: auto;
      width: 460px;
    }
  }
`;

const StartHardGameModal = ({ setIsStartModalOpen }) => {
  const { startHardGame, playBtn, cambiarIdioma } = useTextos();

  useEffect(() => {
    const langSelected = localStorage.getItem("idioma");
    if (langSelected) {
      cambiarIdioma(langSelected);
    }
  }, [cambiarIdioma]);

  const handleStartGame = () => {
    setTimeout(() => {
      setIsStartModalOpen(false);
    }, 1500);
  };

  return (
    <StartHardModal>
      <Modal>
        <div className="container">
          <div className="img-box">
            <img src={ficha8} alt="ficha" className="coin" />
            <video
              src={hardlvl}
              alt="gif"
              className="gif"
              autoPlay
              loop
              muted
            />
          </div>
          <div className="dialogue-box">
            <p>{startHardGame.text1}</p>
            <p>
              <br />
              {startHardGame.text2}
              <br />
              {startHardGame.text3}
            </p>
          </div>
        </div>
        <StartBtn onClick={handleStartGame}>{playBtn}</StartBtn>
      </Modal>
    </StartHardModal>
  );
};

export default StartHardGameModal;
