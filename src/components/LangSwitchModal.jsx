import { useEffect } from "react";
import { useTextos } from "../contexts/LanguageContext";
import styled from "styled-components";
import argflag from "../images/argentinaflag.webp";
import usaflag from "../images/usaflag.webp";
import chinaflag from "../images/chinaflag.webp";
import japflag from "../images/japanflag.webp";
import "../stylesBack.css";

const Modal = styled.div`
  z-index: 10000;
  .modal-content {
    position: relative;
    background-color: var(--modal-bg);
    font-family: var(--font);
    font-weight: 700;
    color: var(--first-color);
    width: 520px;
    padding: 30px;
    border-radius: 5px;
    border: 4px solid var(--second-color);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    display: column;
    flex-wrap: wrap;
    gap: 15px;
  }
  .modal-info {
    display: flex;
    text-align: center;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 200px;
  }

  .close-button {
    position: absolute;
    width: 36px;
    height: 36px;
    text-align: center;
    font: var(--font) bold;
    top: 0;
    right: 0;
    margin: 0.5rem;
    background-color: var(--first-color);
    border-radius: 25%;
    color: var(--second-color);
  }
  .flag-btn {
    width: 100px;
    height: 70px;
    border: none;

    img {
      width: 100%;
      height: 100%;
    }
  }
  button:hover {
    border: 2px solid black;
  }

  @media (max-width: 760px) {
    .modal-content {
      font-size: 0.9rem;
      padding: 40px;
      width: 250px;
    }
    .modal-info {
      flex-direction: column;
      gap: 20px;
      height: 360px;
    }
  }
  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    .modal-content {
      font-size: 0.9rem;
      padding: 40px;
      width: 480px;
      height: 180px;
    }
    .modal-info {
      justify-content: center;
      align-items: center;
      height: 100%;
      flex-direction: row;
      gap: 20px;
    }
    .flag-btn {
      height: 65px;
    }
  }
`;
const StyledAbout = styled.div`
  /*VENTANA MODAL DE ABOUT*/
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
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const LangSwitchModal = ({ closeLangModalOpen }) => {
  const { cambiarIdioma } = useTextos();

  useEffect(() => {
    const langSelected = localStorage.getItem("idioma");
    if (langSelected) {
      cambiarIdioma(langSelected);
    }
  }, [cambiarIdioma]);

  const handleChangeLanguage = (language) => {
    cambiarIdioma(language);
    localStorage.setItem("idioma", language);
    closeLangModalOpen();
  };

  return (
    <StyledAbout>
      <Modal>
        <div className="modal-content">
          <div className="modal-info">
            <button
              className="flag-btn"
              onClick={() => handleChangeLanguage("es")}
            >
              <img src={argflag} alt="flag" />
            </button>
            <button
              className="flag-btn"
              onClick={() => handleChangeLanguage("en")}
            >
              <img src={usaflag} alt="flag" />
            </button>
            <button
              className="flag-btn"
              onClick={() => handleChangeLanguage("jap")}
            >
              <img src={japflag} alt="flag" />
            </button>
            <button
              className="flag-btn"
              onClick={() => handleChangeLanguage("zh")}
            >
              <img src={chinaflag} alt="flag" />
            </button>
          </div>
        </div>
      </Modal>
    </StyledAbout>
  );
};

export default LangSwitchModal;
