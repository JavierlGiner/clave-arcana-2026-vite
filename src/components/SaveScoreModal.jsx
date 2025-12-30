import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useTextos } from "../contexts/LanguageContext";
import EndGameModal from "./EndGameModal";

const StyledContainer = styled.div`
  /* Estilo del contenedor */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999;
  transition: opacity 1s ease, visibility 1s ease;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  height: 320px;
  width: 560px;
  padding: 15px;
  background-color: var(--modal-bg);
  border: 6px solid var(--second-color);
  box-shadow: 0 0 15px var(--border-color);
  border-radius: 8px;
  align-items: center;
  justify-content: space-evenly;
  color: #fff;
  font-family: var(--font-scores);

  h2 {
    color: black;
    font-size: 28px;
    text-align: center;
    font-weight: 700;
  }

  p {
    font-size: 16px;
    margin: 10px 0;
  }

  input {
    width: 120px;
    height: 60px;
    font-size: 40px;
    text-align: center;
    background-color: var(--modal-bg);
    color: black;
    border: 3px solid var(--second-color);
    border-radius: 6px;
    margin: 10px 0;
    outline: none;
    font-family: var(--font-scores);

    &:focus {
      box-shadow: 0 0 10pxrgb (234, 231, 76);
    }
  }

  button {
    padding: 10px 20px;
    background-color: var(--second-color);
    font-family: var(--font);
    font-size: 18px;
    font-weight: 500;
    color: var(--first-color);
    border: 2px solid transparent;
    border-radius: 5px;

    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, border 0.3s;

    /* Estilos para el hover */
    &:hover {
      background-color: var(--modal-bg);
      color: var(--first-color-beta);
      border: 2px solid var(--first-color-beta); /* Borde dorado en hover */
    }

    &:disabled {
      background-color: #444;
      border-color: #444;
      color: #888;
      cursor: not-allowed;
    }
  }

  @media (max-width: 480px) {
    width: 320px;
  }

  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    height: 260px;
    width: 460px;
    h2 {
      font-size: 22px;
    }
  }
`;

const SaveScoreModal = ({ formattedTempo, onClose }) => {
  const [topScores, setTopScores] = useState([]);
  const [isQualified, setIsQualified] = useState(null);
  const [playerName, setPlayerName] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [loadingScores, setLoadingScores] = useState(true);
  const [showEndGameModal, setShowEndGameModal] = useState(false);

  const { scoreText } = useTextos();

  useEffect(() => {
    axios
      .get("http://localhost:5000/top20")
      .then((response) => {
        const scores = response.data;
        setTopScores(scores);

        if (
          scores.length < 20 ||
          formattedTempo < scores[scores.length - 1].time
        ) {
          setIsQualified(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching top scores:", error);
      })
      .finally(() => {
        setLoadingScores(false); // Finalizamos la carga
      });
  }, [formattedTempo]);

  if (loadingScores) {
    return <StyledContainer>...</StyledContainer>;
  }

  const handleSaveScore = () => {
    if (!playerName.trim()) return;

    setIsSaving(true);
    axios
      .post("http://localhost:5000/check-score", {
        username: playerName,
        time: formattedTempo,
      })
      .then(() => {
        // Solicitar la lista actualizada de puntajes al backend
        return axios.get("http://localhost:5000/top20");
      })
      .then((response) => {
        setTopScores(response.data); // Actualizar el estado con los datos más recientes
        setShowEndGameModal(true); // Mostrar EndGameModal
      })
      .catch((error) => {
        console.error("Error saving or fetching scores:", error);
      })
      .finally(() => {
        setIsSaving(false);
      });
  };

  if (showEndGameModal) {
    return (
      <EndGameModal formattedTempo={formattedTempo} topScores={topScores} />
    );
  }

  return (
    <StyledContainer>
      {isQualified ? (
        <Modal>
          <h2 className="">{scoreText.text1}</h2>

          <input
            type="text"
            placeholder="- - -"
            value={playerName}
            maxLength={3}
            onChange={(e) => setPlayerName(e.target.value.toUpperCase())}
          />
          <button
            className="btn-save"
            onClick={handleSaveScore}
            disabled={isSaving}
          >
            {isSaving ? "..." : "OK"}
          </button>
        </Modal>
      ) : (
        <EndGameModal formattedTempo={formattedTempo} topScores={topScores} />
      )}
    </StyledContainer>
  );
};

export default SaveScoreModal;
