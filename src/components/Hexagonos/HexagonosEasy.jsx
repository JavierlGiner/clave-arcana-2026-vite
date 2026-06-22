import { useContext, useEffect, useRef, useState } from "react";
import { FichasContext } from "../../contexts/FichasContextEasy";
import { useCountContext } from "../../contexts/CountContext";
import { useTextos } from "../../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import Ficha from "../Ficha/Ficha";
import Contador from "../Contador";
import styled from "styled-components";
import EndGameModal from "../EndGameModal";
import "../../styles.css";
// import Loader from "../Loader";
import arcanemusic from "../../assets/arcanegame.mp3";

// import SaveScoreModal from "../SaveScoreModal";

//BOTON RESTART ESTILOS
const StyledButton = styled.button`
  display: flex;
  /* Estilos básicos del botón */
  background-color: var(--second-color);
  font-family: "Aubrey", serif;
  font-weight: 600;
  color: var(--first-color);
  border: none;
  padding: 6px 8px;
  border-radius: 8px;
  width: auto;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  /* Transición suave para el hover */
  transition:
    background-color 0.3s,
    color 0.3s,
    border 0.3s;

  /* Estilos para el hover */
  &:hover {
    background-color: var(--modal-bg);
    color: var(--first-color-beta);
    border: 2px solid var(--first-color-beta); /* Borde dorado en hover */
  }
`;
const MusicButton = styled.button`
  position: absolute;

  background-color: transparent;
  cursor: pointer;
  border: none;
  font-size: 28px;
  transition: all 0.3s ease;
  z-index: 1000;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 720px) {
    font-size: 20px;
  }
`;

const Hexagonos = ({ initCount }) => {
  const { fichas, handleFichaClick, isMuted, setIsMuted } =
    useContext(FichasContext);
  const { formattedTempo, stopCounting } = useCountContext();
  const { exitBtn } = useTextos();
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(true);

  //controla si el juego termino
  const [gameOver, setGameOver] = useState(false);

  const audioRef = useRef(new Audio(arcanemusic));

  //inicio del contador
  const { startCounting } = useCountContext();

  useEffect(() => {
    if (!initCount) return;
    startCounting();
  }, [initCount, startCounting]);

  const hexagono1Fichas = fichas.slice(0, 6); // Obtener las primeras 6 fichas
  const hexagono2Fichas = fichas.slice(6, 11);

  //RESTART BUTTON
  const handleRestartBtnClick = () => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  //JUEGO TERMINADO
  const finishGameHexa1 = hexagono1Fichas.every(
    (ficha) => ficha.value === ficha.id,
  );

  const finishGameHexa2 = hexagono2Fichas.every(
    (ficha) => ficha.value === ficha.id,
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

  //BOTON MUSICA
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
        // AbortError es normal si React limpia el effect
      });
    }

    return () => {
      audio.pause();
    };
  }, [isMuted]);

  return (
    <div className="tablero">
      <div className="piezas">
        {/* {loading ? (
          <Loader />
        ) : ( */}
        <>
          <Contador />
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
        </>
        {/* )} */}
        <MusicButton onClick={handleMuteToggle} className="music-board-btn">
          {isMuted ? "🔇" : "🔊"}
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
