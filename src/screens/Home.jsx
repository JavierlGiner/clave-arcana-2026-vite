import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import AboutModal from "../components/AboutModal";
import ReinaTitle from "../components/ReinaTitle";
import GameMenu from "../components/GameMenu";
import Footer from "../components/Footer";
import InstallPWAButton from "../components/InstallPWAButton";
import "../styles.css";
import { useNavigate } from "react-router-dom";
import LangSwitchModal from "../components/LangSwitchModal";
import InstruccionesModal from "../components/InstructionsModal";
import playSound from "../assets/RumblePlay.mp3";
import instruSound from "../assets/Instruction Click.mp3";
import langSound from "../assets/Click FX.mp3";
import InstructionsPromptModal from "../components/InstructionsPromptModal";

// import Loader from "../components/Loader";
// import reina from "../images/reina Jirgev.png";
// import potion from "../images/pink potion logo-1.png";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100dvh;
  background-color: var(--first-color);
  padding: 30px;

  /* Estilos para dispositivos móviles */
  @media (max-width: 480px) {
    padding: 20px;
  }

  /* Estilos para tablets */
  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    padding: 20px;
  }
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 30px;
  height: 100%;
  padding-bottom: 30px;
`;

const Home = () => {
  const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState(true);

  /****EFECTO LOADER */
  // useEffect(() => {
  //   const handleLoad = () => setIsLoading(false);

  //   // Si la página ya cargó antes de que el efecto corra
  //   if (document.readyState === "complete") {
  //     setIsLoading(false);
  //   } else {
  //     window.addEventListener("load", handleLoad);
  //   }

  //   return () => window.removeEventListener("load", handleLoad);
  // }, []);

  /*MOSTRAR EL LOGO DE TOTEM */
  const [showReinaTitle, setShowReinaTitle] = useState(true);

  /*ELEGIR NIVELES DE DIFICULTAD*/
  const [showHardBtn, setShowHardBtn] = useState(true);
  const [showNormalBtn, setShowNormalBtn] = useState(true);

  /*OCULTAR LOS BOTONES PRINCIPALES */
  const [showPlayBtn, setShowPlayBtn] = useState(true);
  const [showInstructionBtn, setShowInstructionBtn] = useState(true);

  /*ABRIR ABOUT MODAL */
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  //ABRIR MODAL LENGUAJE
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  //ABRIR MODAL INSTRUCCIONES
  const [isInstructsModalOpen, setIsInstructsModalOpen] = useState(false);
  const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);

  //audios

  const playAudioRef = useRef(new Audio(playSound));
  const instruAudioRef = useRef(new Audio(instruSound));
  const langAudioRef = useRef(new Audio(langSound));

  // Función genérica para reproducir audios cortos sin que se superpongan
  const playSoundEffect = (audioRef) => {
    const audio = audioRef.current;
    audio.pause();
    audio.currentTime = 0;
    audio
      .play()
      .catch((err) => console.error("Error al reproducir sonido:", err));
  };

  const playGameSound = () => playSoundEffect(playAudioRef);
  const playInstruSound = () => playSoundEffect(instruAudioRef);
  const playLangSound = () => playSoundEffect(langAudioRef);
  //EFECTO DE TRANSICION INICIO
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShowReinaTitle(false);
    }, 8000);
    return () => clearTimeout(timeOut);
  }, []);

  //ABRIR MODAL LENGUAJE
  const handleLangBtnClick = () => {
    playLangSound();
    setIsLangModalOpen(true);
  };
  const closeLangModalOpen = () => {
    setIsLangModalOpen(false);
  };

  /*ACTIVANDO EL BOTON PLAY: APARECEN LOS BOTONES DE NIVEL */
  const handlePlayClick = () => {
    setTimeout(() => {
      setShowPlayBtn(false);
      setShowInstructionBtn(false);
      setShowNormalBtn(true);
      setShowHardBtn(true);
    }, 500);
  };

  /*ELIGIENDO DIFICULTAD DEL JUEGO*/
  const handleNormalBtn = () => {
    setTimeout(() => {
      playGameSound();
      navigate("/normalgame");
    }, 1000);
  };
  const handleHardBtn = () => {
    setTimeout(() => {
      playGameSound();
      navigate("/hardgame");
    }, 1000);
  };

  /*ABRIR INSTRUCCIONES DEL JUEGO*/
  const handleInstructionClick = () => {
    playInstruSound();
    setIsPromptModalOpen(true);
  };

  /*LOGICA PARA CONTINUAR INSTRUCCIONES */
  const handleContinueFromPrompt = () => {
    setIsPromptModalOpen(false);
    setIsInstructsModalOpen(true);
  };

  const handleCancelPrompt = () => {
    setIsPromptModalOpen(false);
  };

  /*CERRAR INSTRUCCIONES DEL JUEGO*/
  const closeInstructionsModal = () => {
    setIsInstructsModalOpen(false);
  };

  return (
    <div className="home">
      <>
        {isAboutModalOpen && (
          <AboutModal setIsAboutModalOpen={setIsAboutModalOpen} />
        )}
        {isInstructsModalOpen && (
          <InstruccionesModal closeInstructionsModal={closeInstructionsModal} />
        )}
        {isLangModalOpen && (
          <LangSwitchModal closeLangModalOpen={closeLangModalOpen} />
        )}
        {isPromptModalOpen && (
          <InstructionsPromptModal
            onContinue={handleContinueFromPrompt}
            onClose={handleCancelPrompt}
          />
        )}
        <Container>
          <Header
            setIsAboutModalOpen={setIsAboutModalOpen}
            handleLangBtnClick={handleLangBtnClick}
          />

          <Main>
            {showReinaTitle && <ReinaTitle />}
            {!showReinaTitle && (
              <GameMenu
                handlePlayClick={handlePlayClick}
                handleNormalBtn={handleNormalBtn}
                handleHardBtn={handleHardBtn}
                showHardBtn={showHardBtn}
                showNormalBtn={showNormalBtn}
                showInstructionBtn={showInstructionBtn}
                handleInstructionClick={handleInstructionClick}
                handleContinueFromPrompt={handleContinueFromPrompt}
                handleCancelPrompt={handleCancelPrompt}
                showPlayBtn={showPlayBtn}
              />
            )}
            <InstallPWAButton />
          </Main>
          <Footer />
        </Container>
      </>
    </div>
  );
};

export default Home;
