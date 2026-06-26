import { useState } from "react";
import styled from "styled-components";

import { FichasProvider } from "../contexts/FichasContextEasy";
import CountProvider from "../contexts/CountProvider";
import Hexagonos from "../components/Hexagonos/HexagonosEasy";
import StartGameModal from "../components/StartGameModal";

const BoardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  transition: opacity 700ms ease;
  width: 100%;
  height: 100%;
`;

const EasyBoard = () => {
  // fases claras del juego
  const [phase, setPhase] = useState("start");
  // start → transition → playing

  const handleStartGame = () => {
    // 1. arranca salida del modal
    setPhase("transition");

    // 2. en el próximo frame activamos el tablero
    requestAnimationFrame(() => {
      setPhase("playing");
    });
  };

  return (
    <FichasProvider>
      <CountProvider>
        <div className="board-background">
          {phase !== "playing" && <StartGameModal onStart={handleStartGame} />}

          <BoardWrapper $visible={phase === "playing"}>
            <Hexagonos initCount={phase === "playing"} />
          </BoardWrapper>
        </div>
      </CountProvider>
    </FichasProvider>
  );
};

export default EasyBoard;
