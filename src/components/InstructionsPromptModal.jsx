import React from "react";
import styled from "styled-components";

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
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  border: 4px solid var(--second-color);
  max-width: 600px;
  text-align: center;
  background-color: var(--modal-bg);
  .info-box {
    margin: 20px 0px;
  }
  .close-button {
    position: absolute;
    width: 30px;
    height: 30px;
    text-align: center;
    font: var(--font) bold;
    top: 0;
    right: 0;
    margin: 0.5rem;
    background-color: var(--first-color);
    border-radius: 25%;
    color: var(--second-color);
  }
  .continue-button {
    background: none;
    border: none;
    font: var(--font) bold;
    font-size: 15px;
  }
  .titles {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  @media (max-width: 760px) {
    max-width: 360px;
    .titles {
      font-size: 15px;
      h3 {
        font-size: 16px;
      }
    }
  }
  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    max-width: 420px;
    height: 220px;

    .titles {
      font-size: 12px;
    }
  }
`;
const StyledButton = styled.button`
  background-color: var(--second-color);
  font-family: var(--font);
  color: var(--first-color);
  border: 2px solid var(--third-color);
  border-radius: 5px;
  height: 50px;
  width: 180px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  /* Transición suave para el hover */
  transition: background-color 0.3s, color 0.3s, border 0.3s;

  /* Estilos para el hover */
  &:hover {
    background-color: var(--modal-bg);
    color: var(--first-color-beta);
    border: 2px solid var(--first-color-beta); /* Borde dorado en hover */
  }
  @media (max-width: 480px) {
    width: 105px;
    height: 40px;
    font-size: 14px;
  }
  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    height: 40px;
    width: 110px;
    font-size: 15px;
  }
`;

const InstructionsPromptModal = ({ onContinue, onClose }) => {
  const { instructPrompt } = useTextos();

  return (
    <ModalBackground>
      <ModalContainer>
        <div className="titles">
          <h3>{instructPrompt.title}</h3>
          <p>{instructPrompt.text1}</p>
        </div>
        <div className="info-box">
          <StyledButton
            onClick={() =>
              window.open("https://youtu.be/p_GXOmm7zjw", "_blank")
            }
          >
            {instructPrompt.text3}
          </StyledButton>
        </div>
        <button className="continue-button" onClick={onContinue}>
          {instructPrompt.text2}
        </button>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </ModalContainer>
    </ModalBackground>
  );
};

export default InstructionsPromptModal;
