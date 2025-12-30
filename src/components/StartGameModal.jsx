import React, { useEffect } from "react";
import jirgev from "../images/youngJirveg.webp";
import { useTextos } from "../contexts/LanguageContext";
import styled from "styled-components";

import "../stylesBack.css";

const StartModal = styled.div`
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
  font-size: 2rem;
  color: var(--first-color);
  border: none;
  /* padding: 16px 20px; */
  border-radius: 15px;
  width: 150px;
  height: 70px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border 0.3s;
  opacity: 0;
  animation: fadeIn 1s 2s forwards;

  &:hover {
    background-color: var(--modal-bg);
    color: var(--first-color-beta);
    border: 2px solid var(--first-color-beta);
  }

  /* Ajustes para pantallas móviles en modo vertical */
  @media (max-width: 480px) and (orientation: portrait) {
    width: 100px;
    height: 50px;
    font-size: 18px;
    font-weight: 600;
  }

  /* Ajustes para pantallas móviles en modo horizontal */
  @media (max-width: 480px) and (orientation: landscape) {
    width: 180px;
    height: 80px;
    font-size: 22px;
  }

  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    width: 110px;
    height: 60px;
    font-size: 22px;
    margin-bottom: 20px;
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
  height: 700px;
  width: 900px;
  background-color: transparent;

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }

  .img-box {
    width: 260px;
    height: 260px;
    border-radius: 8px;
    opacity: 0;
    animation: fadeIn 1s 0.5s forwards;

    img {
      height: 100%;
      width: 100%;
      border-radius: 8px;
    }
  }

  .dialogue-box {
    border-radius: 8px;
    width: 500px;
    height: 100px;
    opacity: 0;
    animation: fadeIn 1s 1s forwards;
    text-align: center;
    padding: 10px;
  }

  p {
    color: var(--modal-bg);
    font-size: 48px;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    letter-spacing: 1px;
    animation: typing 3s steps(30) 1s forwards, blink 0.75s step-end infinite;
  }

  .mobile-text {
    display: none;
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
  @media (max-width: 480px) and (orientation: portrait) {
    height: 100vh;

    .container {
      gap: 20px;
    }
    .img-box {
      margin-bottom: 10px;
    }
    .dialogue-box {
      width: 340px;
      font-size: 30px;
      text-align: center;
    }
    .desktop-text {
      display: none;
    }
    .mobile-text {
      display: flex;
      margin-bottom: 20px;
      color: var(--modal-bg);
      font-size: 18px;
      font-weight: 700;
    }
    p {
      display: none;
    }
  }

  /* Estilos para la orientación horizontal del móvil */
  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    height: 360px;
    width: 600px;
    justify-content: center;
    gap: 20px;
    .container {
      flex-direction: column;
      padding: 10px;
      gap: 5px;
      height: 210px;
    }
    .img-box {
      /* margin-right: 20px; */
      width: 160px;
      height: auto;
    }
    .dialogue-box p {
      font-size: 26px;
    }
  }
`;

const StartGameModal = ({ setIsStartModalOpen }) => {
  const { startGame, playBtn, cambiarIdioma } = useTextos();

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
    <StartModal>
      <Modal>
        <div className="container">
          <div className="img-box">
            <img src={jirgev} alt="heroImg" />
          </div>
          <div className="dialogue-box">
            <span className="mobile-text aubrey-regular">
              {startGame.textMobile}
            </span>
            <p className="aubrey-regular">{startGame.text1}</p>
          </div>
        </div>
        <StartBtn onClick={handleStartGame} className="aubrey-regular">
          {playBtn}
        </StartBtn>
      </Modal>
    </StartModal>
  );
};

export default StartGameModal;
