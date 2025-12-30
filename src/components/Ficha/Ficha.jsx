import "../../stylesBack.css";
import { coinsImages } from "./coinsImages";

const Ficha = ({ ficha, handleFichaClick, endGameAnimation }) => {
  const imageNameTrue = `${ficha.value}-true`;
  const imageNameFalse = `${ficha.value}-false`;

  const findImageTrue = coinsImages[imageNameTrue];
  const findImageFalse = coinsImages[imageNameFalse];

  return (
    <button
      key={ficha.id}
      id={ficha.id}
      className={`ficha ficha${ficha.id} ${ficha.isSelected ? "selected" : ""}${
        endGameAnimation ? "endgame" : ""
      }${ficha.isLocked ? "locked" : ""}`}
      onClick={() => {
        handleFichaClick(ficha);
        console.log("Ficha seleccionada:", ficha);
      }}
    >
      <div className="ficha-images-container">
        <img
          key={`${ficha.value}-true`}
          src={findImageTrue}
          className={`ficha-img ${ficha.boolean ? "" : "hidden"}`}
          alt={`${ficha.value} true`}
        />
        <img
          key={`${ficha.value}-false`}
          src={findImageFalse}
          className={`ficha-img ${ficha.boolean ? "hidden" : ""}`}
          alt={`${ficha.value} false`}
        />
      </div>
    </button>
  );
};

export default Ficha;
