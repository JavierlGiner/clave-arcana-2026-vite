import { useState } from "react";
import styled from "styled-components";
import CustomButton from "./CustomButton";
import logoArcane from "../images/logoarcane.webp";

import { useTextos } from "../contexts/LanguageContext";

const StartMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: var(--font);
  text-align: center;
  align-items: center;
  justify-content: center;
  color: var(--second-color);
  opacity: 0;
  transition: opacity 3s ease-in-out;
  animation: fadeIn 3s ease-in-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 720px) {
    justify-content: space-evenly;

    .menu-btn {
      display: grid;
      gap: 1.5rem;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }
    .game-title {
      img {
        height: auto;
        width: 360px;
      }
    }
  }
  @media (min-width: 720px) and (max-width: 1024px) {
    .game-title {
      img {
        height: auto;
        width: 500px;
      }
    }
    margin-block: 20px;
    margin-top: 30px;
    height: 100%;
    h1 {
      font-size: 6.5rem;
    }
    h3 {
      font-size: 1.25rem;
    }
    .author-title,
    .game-title {
      margin-bottom: 8px;
    }

    .author-title h3 {
      margin: 0; /* Eliminar márgenes predeterminados de los encabezados */
    }

    .menu-btn {
      display: flex;
      gap: 1.5rem;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      margin-top: 20px;
    }
  }
  @media (min-width: 1024px) {
    margin-block: 20px;
    margin-top: 10px;
    height: 100%;
    h1 {
      font-size: 6.5rem;
    }
    h3 {
      font-size: 1.25rem;
    }
    .author-title,
    .game-title {
      margin-bottom: 8px;
    }
    .game-title {
      img {
        height: auto;
        width: 750px;
      }
    }
    .author-title h3 {
      margin: 0; /* Eliminar márgenes predeterminados de los encabezados */
    }

    .menu-btn {
      display: flex;
      gap: 1.5rem;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      margin-top: 20px;
    }
  }
  @media (max-width: 1024px) and (max-height: 550px) and (orientation: landscape) {
    .menu-btn {
      display: flex;
      gap: 1.5rem;
      align-items: center;
      justify-content: center;
      padding: 1.25rem;
    }
    .game-title {
      img {
        height: auto;
        width: 360px;
      }
    }
  }
  @media (max-width: 480px) {
    .game-title {
      img {
        height: auto;
        width: 290px;
      }
    }
  }
`;
const CampaignButtonWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover .tooltip,
  &:focus-within .tooltip {
    opacity: 1;
    visibility: visible;
  }

  .tooltip {
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #222;
    color: #fff;
    padding: 0.75rem;
    border-radius: 0.5rem;
    font-size: 0.85rem;
    white-space: pre-wrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease;
    width: 220px;
    z-index: 10;
  }
`;
const BackButton = styled.button`
  background: none;
  border: none;
  color: var(--second-color);
  cursor: pointer;
  font-size: 2rem;
  width: 30px;
  height: 30px;
  padding: 0;
  border-radius: 50%;
  justify-content: center;

  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    transform: translateX(-4px);
    opacity: 0.8;
  }
  @media (max-width: 720px) {
    margin-bottom: 0px;
    width: 25px;
    height: 25px;
  }
`;

const GameMenu = ({
  handleHardBtn,
  handleInstructionClick,
  handleNormalBtn,
}) => {
  const { normalBtn, hardBtn, instructBtn, playBtn, campainBtn, campainInfo } =
    useTextos();
  const [showOptions, setShowOptions] = useState(false);

  const handlePlayClick = () => {
    setShowOptions(true);
  };
  const handleBackClick = () => {
    setShowOptions(false);
  };

  return (
    <StartMenu>
      <section className="clave-title">
        <div className="game-title">
          <img src={logoArcane} alt="logo" />
        </div>
      </section>
      <div className="menu-btn">
        {!showOptions && (
          <CustomButton onClick={handlePlayClick} label={playBtn} />
        )}
        {showOptions && (
          <>
            <BackButton
              onClick={handleBackClick}
              aria-label="Volver"
              title="Volver"
            >
              ←
            </BackButton>

            <CustomButton onClick={handleNormalBtn} label={normalBtn} />
            <CustomButton onClick={handleHardBtn} label={hardBtn} />

            <CampaignButtonWrapper>
              <CustomButton label={campainBtn} disabled className="customBtn" />
              <div className="tooltip">{campainInfo}</div>
            </CampaignButtonWrapper>
          </>
        )}
        {showOptions ? null : (
          <CustomButton
            label={instructBtn.title}
            onClick={handleInstructionClick}
          />
        )}
      </div>
    </StartMenu>
  );
};

export default GameMenu;
