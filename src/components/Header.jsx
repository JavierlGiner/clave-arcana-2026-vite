import styled from "styled-components";
import clickSound from "../assets/Click FX.mp3";
import { useTextos } from "../contexts/LanguageContext";
import bgMusic from "../assets/arcane_main.mp3";
import "../stylesBack.css";
import { useEffect, useRef, useState } from "react";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

const HeaderContainer = styled.header`
  position: static;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--first-color);
  width: 100%;
  height: 50px;

  /* Estilos para escritorios */
  @media (min-width: 1500px) {
    margin: 0;
    height: 80px;
  }
`;
const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  img {
    display: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  ul {
    align-items: center;
    text-align: center;

    color: var(--second-color);
    width: 100%;
    list-style: none;
    padding: 0;
    display: flex; /* Hacer que las etiquetas <a> estén en fila */
    justify-content: space-between; /* Espaciado uniforme entre ellas */
  }

  li {
    /* margin: 5px 0; */
  }
  button {
    font-size: 1.5rem;
    text-align: center;
    font-family: "Aubrey", serif;
    font-weight: 600;
    color: var(--second-color);
    background: transparent;
    border: none;
    height: 40px;
  }
  .right-controls {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  @media (min-width: 1500px) {
    img {
      display: none;
      height: 80px;
      width: 80px;
      border-radius: 50%;
    }
    button {
      font-size: 2rem;
      text-align: center;
      font-weight: 600;
      color: var(--second-color);
      /* margin-top: 1.5rem; */
    }
  }

  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    height: 20px;
    justify-content: space-around;
  }
`;
const MusicButton = styled.button`
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background: transparent;

  cursor: pointer;

  font-size: 20px;
  line-height: 1;

  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.08);
  }

  @media (max-width: 760px) {
    width: 34px;
    height: 34px;
    font-size: 18px;
  }
`;

const Header = ({ setIsAboutModalOpen, handleLangBtnClick }) => {
  const bgAudioRef = useRef(new Audio(bgMusic));
  const [isMuted, setIsMuted] = useState(false);
  const { language, about } = useTextos();
  const playAudio = new Audio(clickSound);

  useEffect(() => {
    const bgAudio = bgAudioRef.current; // Guardamos el valor de la referencia en una variable

    bgAudio.loop = true;
    bgAudio.volume = 0.7;

    // Función de limpieza
    return () => {
      if (bgAudio) {
        bgAudio.pause();
        bgAudio.currentTime = 0;
      }
    };
  }, []);

  const handlePlayMusic = () => {
    if (!isMuted) {
      bgAudioRef.current
        .play()
        .catch((err) => console.error("Error al reproducir audio:", err));
    } else {
      bgAudioRef.current.pause();
      bgAudioRef.current.currentTime = 0;
    }
    setIsMuted(!isMuted);
  };

  const playClickSound = () => {
    playAudio.play();
  };
  const handleAboutClick = () => {
    playClickSound();
    setIsAboutModalOpen(true);
  };
  return (
    <HeaderContainer>
      <Navbar>
        <ul>
          <li>
            <button className="languege-btn" onClick={handleLangBtnClick}>
              {language}
            </button>
          </li>

          <div className="right-controls">
            <MusicButton onClick={handlePlayMusic}>
              {isMuted ? <HiSpeakerWave /> : <HiSpeakerXMark />}
            </MusicButton>

            <button className="about-btn" onClick={handleAboutClick}>
              {about}
            </button>
          </div>
        </ul>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
