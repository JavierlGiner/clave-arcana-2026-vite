import React from "react";
import { FichasProvider } from "../contexts/FichasContextNormal";
import "../stylesBack.css";
import Hexagonos from "../components/Hexagonos/HexagonosNormal";
import { useState } from "react";
import CountProvider from "../contexts/CountProvider";
import StartHardGameModal from "../components/StartHardModal";

const NormalBoard = () => {
  /*START GAME MODAL */
  const [isStartModalOpen, setIsStartModalOpen] = useState(true);
  return (
    <div className="board-background">
      <FichasProvider>
        <CountProvider>
          {isStartModalOpen && (
            <StartHardGameModal setIsStartModalOpen={setIsStartModalOpen} />
          )}
          <Hexagonos initCount={!isStartModalOpen} />
        </CountProvider>
      </FichasProvider>
    </div>
  );
};

export default NormalBoard;
/*
MISMO INICIO PERO SE AGREGA AL MINUTO UNA RESTRICCION A CUALQUIERA DE LAS FICHAS EXCEPTO LA CENTRAL
*/
