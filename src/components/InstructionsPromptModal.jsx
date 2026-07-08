import React from "react";
import styled from "styled-components";
import "../styles.css";

import { useTextos } from "../contexts/LanguageContext";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(32, 32, 32, 0.6),
    rgba(0, 0, 0, 0.8)
  );
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const ModalContainer = styled.div`
  position: relative;

  width: min(500px, 92vw);
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 24px;

  background-color: var(--modal-bg);

  border-radius: 16px;
  border: 2px solid var(--second-color);

  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.4),
    0 0 15px rgba(255, 215, 0, 0.15);

  .header {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: start;
    gap: 12px;
  }

  .titles {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3 {
      margin: 0;
      color: var(--first-color-beta);
      font-size: 1.4rem;
    }

    p {
      margin: 0;
      line-height: 1.5;
      font-size: 0.75rem;
    }
  }

  .close-button {
    top: 0.5rem;
    right: 0.5rem;

    width: 30px;
    height: 30px;

    background-color: var(--first-color);
    color: var(--second-color);
    font-weight: bold;

    border-radius: 25%;
  }

  .info-box {
    display: flex;
    justify-content: center;
  }

  .continue-button {
    background: transparent;
    border: none;

    color: var(--first-color-beta);

    font-size: 16px;
    font-weight: 700;

    cursor: pointer;

    transition: 0.2s ease;

    &:hover {
      opacity: 0.8;
      transform: translateY(-1px);
    }
  }

  @media (max-width: 768px) {
    padding: 18px;
    gap: 18px;

    .titles {
      h3 {
        font-size: 1.2rem;
      }

      p {
        font-size: 0.95rem;
      }
    }

    .close-button {
      width: 25px;
      height: 25px;
    }
  }

  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    width: min(500px, 90vw);

    .titles {
      h3 {
        font-size: 1.2rem;
      }

      p {
        font-size: 0.85rem;
      }
    }
  }
`;

const StyledButton = styled.button`
  width: 230px;
  height: 55px;

  border: none;
  border-radius: 10px;

  background: linear-gradient(135deg, #ff0000, #c50000);

  color: white;

  font-family: var(--font);
  font-size: 18px;
  font-weight: 700;

  cursor: pointer;

  transition: 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 48px;
    font-size: 15px;
  }
`;

const InstructionsPromptModal = ({ onContinue, onClose }) => {
  const { instructPrompt, idioma } = useTextos();

  const spanishVideo = "https://www.youtube.com/watch?v=p_GXOmm7zjw";
  const englishVideo = "https://www.youtube.com/watch?v=LSmSKIg1QoQ";

  const tutorialVideos = {
    es: spanishVideo,
    en: englishVideo,
    jap: englishVideo,
    zh: englishVideo,
  };

  const tutorialVideo = tutorialVideos[idioma] ?? englishVideo;

  const handleOpenTutorial = () => {
    window.open(tutorialVideo, "_blank", "noopener,noreferrer");
  };

  return (
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <div className="header">
          <div className="titles goldman-regular">
            <h3>{instructPrompt.title}</h3>
            <p>{instructPrompt.text1}</p>
          </div>

          <button className="close-button" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="info-box goldman-regular">
          <StyledButton onClick={handleOpenTutorial}>
            ▶ {instructPrompt.text3}
          </StyledButton>
        </div>

        <button
          className="continue-button goldman-regular"
          onClick={onContinue}
        >
          {instructPrompt.text2}
        </button>
      </ModalContainer>
    </ModalBackground>
  );
};

export default InstructionsPromptModal;
