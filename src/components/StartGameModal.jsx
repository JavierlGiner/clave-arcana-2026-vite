import React, { useEffect, useState } from "react";
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
  z-index: 99999;
  opacity: ${({ opening, closing }) => {
    if (closing) return 0;
    return opening ? 0 : 1;
  }};

  transition: opacity 700ms ease;

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
  font-family: "Aubrey", serif;
  padding: 16px 20px;
  border-radius: 15px;
  width: 150px;
  height: 70px;
  font-weight: 600;
  cursor: pointer;
  transform: ${({ opening, closing }) => {
    if (closing) return "scale(.8)";

    return opening ? "translateY(30px) scale(.8)" : "translateY(0) scale(1)";
  }};

  opacity: ${({ opening, closing }) => {
    if (closing) return 0;

    return opening ? 0 : 1;
  }};

  transition:
    transform 0.5s ease 0.35s,
    opacity 0.5s ease 0.35s;

  &:hover {
    background-color: var(--modal-bg);
    color: var(--first-color-beta);
    border: 2px solid var(--first-color-beta);
  }

  /* Ajustes para pantallas móviles en modo vertical */
  @media (max-width: 480px) and (orientation: portrait) {
    width: 100px;
    height: 50px;
    font-size: 22px;
    padding: 0px;
  }

  @media (max-width: 950px) and (max-height: 580px) and (orientation: landscape) {
    width: 70px;
    height: 40px;
    font-size: 20px;
    padding: 6px;
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
  font-family: "Aubrey", serif;

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

    transform: ${({ opening, closing }) => {
      if (closing) return "translateY(-15px)";

      return opening ? "translateY(25px)" : "translateY(0)";
    }};

    opacity: ${({ opening, closing }) => {
      if (closing) return 0;

      return opening ? 0 : 1;
    }};

    transition:
      transform 900ms ease,
      opacity 900ms ease;

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
    text-align: center;
    padding: 10px;

    transform: ${({ opening, closing }) => {
      if (closing) return "translateY(-20px)";

      return opening ? "translateY(20px)" : "translateY(0)";
    }};

    opacity: ${({ opening, closing }) => {
      if (closing) return 0;

      return opening ? 0 : 1;
    }};

    transition:
      transform 700ms ease,
      opacity 700ms ease;
  }

  p {
    color: var(--modal-bg);
    font-size: 48px;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    letter-spacing: 1px;
    animation:
      typing 3s steps(30) 1s forwards,
      blink 0.75s step-end infinite;
    opacity: ${({ closing }) => (closing ? 0 : 1)};

    transform: ${({ closing }) =>
      closing ? "translateY(-15px)" : "translateY(0)"};

    transition:
      opacity 700ms ease,
      transform 700ms ease;
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
      width: 200px;
      height: 200px;
    }
    .dialogue-box {
      width: 320px;
      font-size: 30px;
      text-align: center;
    }
    .desktop-text {
      display: none;
    }
    .mobile-text {
      display: flex;
      margin-bottom: 0px;
      color: var(--modal-bg);
      font-size: 18px;
      font-weight: 700;
    }
    p {
      display: none;
    }
  }

  /* Estilos para la orientación horizontal del móvil */
  @media (max-width: 950px) and (max-height: 580px) and (orientation: landscape) {
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

const StartGameModal = ({ onStart }) => {
  const [closing, setClosing] = useState(false);
  const [opening, setOpening] = useState(true);

  const { startGame, playBtn, cambiarIdioma } = useTextos();

  useEffect(() => {
    const langSelected = localStorage.getItem("idioma");
    if (langSelected) cambiarIdioma(langSelected);
  }, [cambiarIdioma]);

  useEffect(() => {
    const t = setTimeout(() => setOpening(false), 50);
    return () => clearTimeout(t);
  }, []);

  const handleStartGame = () => {
    setClosing(true);

    // dejamos que termine la animación visual del botón/modal
    setTimeout(() => {
      onStart(); // <- transición controlada desde el padre
    }, 650);
  };

  return (
    <StartModal closing={closing} opening={opening}>
      <Modal opening={opening} closing={closing}>
        <div className="container">
          <div className="img-box">
            <img src={jirgev} alt="heroImg" />
          </div>

          <div className="dialogue-box">
            <span className="mobile-text">{startGame.textMobile}</span>
            <p>{startGame.text1}</p>
          </div>
        </div>

        <StartBtn closing={closing} onClick={handleStartGame}>
          {playBtn}
        </StartBtn>
      </Modal>
    </StartModal>
  );
};

export default StartGameModal;
