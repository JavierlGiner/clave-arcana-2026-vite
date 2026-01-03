import React, { useContext, useEffect, useRef, useState } from "react";
import { FichasContext } from "../../contexts/FichasContextNormal";
import { useCountContext } from "../../contexts/CountContext";
import { useTextos } from "../../contexts/LanguageContext";
import Ficha from "../Ficha/Ficha";
import Contador from "../Contador";
import arcanemusic from "../../assets/arcanegame.mp3";
import styled from "styled-components";
import "../../stylesBack.css";
// import SaveScoreModal from "../SaveScoreModal";
import { useNavigate } from "react-router-dom";
import EndGameModal from "../EndGameModal";

//BOTON RESTART ESTILOS
const StyledButton = styled.button`
  display: flex;
  /* Estilos básicos del botón */
  background-color: var(--second-color);
  font-family: var(--font);
  font-weight: 500;
  color: var(--first-color);
  border: none;
  padding: 6px 10px;
  border-radius: 8px;
  width: auto;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  /* Transición suave para el hover */
  transition: background-color 0.3s, color 0.3s, border 0.3s;

  /* Estilos para el hover */
  &:hover {
    background-color: var(--modal-bg);
    color: var(--first-color-beta);
    border: 2px solid var(--first-color-beta); /* Borde dorado en hover */
  }
  @media (max-width: 900px) and (orientation: portrait) {
    position: absolute;
    width: 45px;
    height: 25px;
    font-size: 11px;
    /* top: 20px; */
    padding-left: 8px;
    transform: rotate(90deg);
  }
`;
const MusicButton = styled.button`
  position: absolute;
  bottom: 25px;
  left: 40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  font-size: 24px;
  box-shadow: 2px 2px 10px rgba(151, 182, 247, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 900px) and (orientation: portrait) {
    top: 2rem;
    left: 20px;
    width: 30px;
    height: 30px;
    rotate: 90deg;
    box-shadow: none;
    border: none;
  }

  @media (max-width: 920px) and (orientation: landscape) {
    bottom: 1rem;
    left: 20px;
    width: 22px;
    height: 22px;
    box-shadow: none;
    border: none;
  }
`;
const Hexagonos = ({ initCount }) => {
  const { fichas, handleFichaClick } = useContext(FichasContext);
  const { formattedTempo, stopCounting, startCounting } = useCountContext();
  const { exitBtn } = useTextos();
  const navigate = useNavigate();

  const [gameOver, setGameOver] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const audioRef = useRef(new Audio(arcanemusic));

  const hexagono1Fichas = fichas.slice(0, 6);
  const hexagono2Fichas = fichas.slice(6, 11);

  /* ---------- INICIO DEL CONTADOR ---------- */
  useEffect(() => {
    if (!initCount) return;
    startCounting();
  }, [initCount, startCounting]);

  /* ---------- FIN DEL JUEGO (estado derivado) ---------- */
  const finishGameHexa1 = hexagono1Fichas.every(
    (ficha) => ficha.value === ficha.id
  );

  const finishGameHexa2 = hexagono2Fichas.every(
    (ficha) => ficha.value === ficha.id
  );

  const endGameAnimation = finishGameHexa1 && finishGameHexa2;

  useEffect(() => {
    if (!endGameAnimation) return;

    stopCounting();

    const timeout = setTimeout(() => {
      setGameOver(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [endGameAnimation, stopCounting]);

  /* ---------- AUDIO (UN SOLO EFFECT) ---------- */
  const handleMuteToggle = () => {
    setIsMuted((prev) => !prev);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.7;

    if (isMuted) {
      audio.pause();
      audio.currentTime = 0;
      return;
    }

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // AbortError esperado
      });
    }

    return () => {
      audio.pause();
    };
  }, [isMuted]);

  /* ---------- RESTART ---------- */
  const handleRestartBtnClick = () => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="tablero">
      <div className="piezas">
        <Contador initCount={initCount} gameOver={gameOver} />
        <div className="contenido-hexagono1">
          <div className="hexagono1">
            {hexagono1Fichas.map((ficha) => (
              <div
                key={ficha.id}
                id={ficha.id}
                className={`carahexa cara${ficha.id}`}
              >
                <Ficha
                  ficha={ficha}
                  handleFichaClick={handleFichaClick}
                  boolean={ficha.boolean}
                  endGameAnimation={endGameAnimation}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="contenido-hexagono2">
          <div className="hexagono2">
            {hexagono2Fichas.map((ficha) => (
              <div
                key={ficha.id}
                id={ficha.id}
                className={`carahexa cara${ficha.id}`}
              >
                <Ficha
                  ficha={ficha}
                  handleFichaClick={handleFichaClick}
                  boolean={ficha.boolean}
                  endGameAnimation={endGameAnimation}
                />
              </div>
            ))}
            <div className="repeated-face8"></div>
          </div>
        </div>
      <MusicButton onClick={handleMuteToggle}>
        {isMuted ? "🔊" : "🔇"}
      </MusicButton>
      <StyledButton onClick={handleRestartBtnClick} className="reset-btn">
        {exitBtn}
      </StyledButton>
      </div>
      {gameOver && <EndGameModal formattedTempo={formattedTempo} />}
    </div>
  );
};

export default Hexagonos;
