import { FichasProvider } from "../contexts/FichasContextEasy";
import Hexagonos from "../components/Hexagonos/HexagonosEasy";
import StartGameModal from "../components/StartGameModal";
import "../stylesBack.css";
import { useState } from "react";
import CountProvider from "../contexts/CountProvider";

const EasyBoard = () => {
  /*START GAME MODAL */
  const [isStartModalOpen, setIsStartModalOpen] = useState(true);

  return (
    <FichasProvider>
      <CountProvider>
        <div className="board-background">
          {isStartModalOpen && (
            <StartGameModal setIsStartModalOpen={setIsStartModalOpen} />
          )}
          <Hexagonos initCount={!isStartModalOpen} />
        </div>
      </CountProvider>
    </FichasProvider>
  );
};

export default EasyBoard;
/*
los hexagonos deben numerarse con las fichas para que coincidan

al inicio el array de fichas deben posicionarse de manera aleatoria

las fichas deben tener una clase de css pasiva para cuando estan giradas, eso se deberia comprobar por un booleano
cuando estan en false se ve la cara B

condiciones:
la cara de los hexagonos que mira al centro, llevara el mismo nombre de la ficha X.
*/
