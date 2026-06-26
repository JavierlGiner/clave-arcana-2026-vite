import React, { useState } from "react";
import { FichasProvider } from "../contexts/FichasContextNormal";
import CountProvider from "../contexts/CountProvider";
import Hexagonos from "../components/Hexagonos/HexagonosNormal";
import StartHardGameModal from "../components/StartHardModal";
import "../stylesBack.css";
import styled from "styled-components";

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

const NormalBoard = () => {
  const [phase, setPhase] = useState("start");
  // start | transition | playing

  const handleStart = () => {
    setPhase("transition");

    requestAnimationFrame(() => {
      setPhase("playing");
    });
  };

  return (
    <div className="board-background">
      <FichasProvider>
        <CountProvider>
          {phase !== "playing" && <StartHardGameModal onStart={handleStart} />}

          <BoardWrapper $visible={phase === "playing"}>
            <Hexagonos initCount={phase === "playing"} />
          </BoardWrapper>
        </CountProvider>
      </FichasProvider>
    </div>
  );
};

export default NormalBoard;
