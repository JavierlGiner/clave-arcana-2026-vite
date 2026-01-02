import React, { useState } from "react";
import { useTextos } from "../contexts/LanguageContext";
import styled from "styled-components";
import "../stylesBack.css";
// import Loader from "./Loader";

const Container = styled.div`
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
  z-index: 9999;
`;

const InstructionsBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 660px;
  padding: 25px 30px;
  width: 850px;
  background-color: var(--instruction-bg);
  border-radius: 12px;
  gap: 10px;
  border: 2px solid var(--second-color);
  .titles {
    padding-top: 5px;
    color: var(--second-color);
  }
  .close-button {
    position: absolute;
    width: 30px;
    height: 30px;
    text-align: center;
    font-size: 20px;
    top: 10px;
    right: 5px;
    margin: 0.5rem;
    background-color: var(--first-color);
    border-radius: 25%;
    color: var(--second-color);
  }
  .container-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    background-color: transparent;
    width: 100%;
    gap: 20px;
  }
  .image-box {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: var(--modal-bg);
    height: 250px;
    width: 100%;
    border-radius: 8px;
    img {
      height: 240px;
      width: auto;
    }
  }
  .rules-box {
    background-color: var(--modal-bg);
    display: block;
    align-items: center;
    height: 240px;
    width: 100%;
    text-align: center;
    overflow-y: scroll;
    scrollbar-width: none;
    margin: 10px 0;
    padding: 10px 0;
    border-radius: 8px;

    p {
      padding: 8px;
      font-size: 20px;
      font-weight: 600;
      text-align: left;
      line-height: 24px;
    }
  }
  .next-btn {
    position: absolute;
    right: 20px;
    bottom: 5px;
    font-weight: 700;
    font-size: 18px;
    background-color: transparent;
    border: none;
    color: var(--second-color);
    margin: 0;
  }
  .landscape-message {
    display: none;
  }
  /* Estilos para dispositivos móviles */
  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    padding: 5px 8px;
    width: 320px;
    height: 590px;
    justify-content: center;
    gap: 0;
    h1 {
      font-size: 22px;
      font-weight: 700;
    }
    .container-info {
      justify-content: center;
      gap: 10px;
    }
    .rules-box {
      margin-bottom: 8px;
      height: 200px;
      p {
        font-size: 16px;
        line-height: 20px;
      }
      h2 {
        font-size: 18px;
      }
    }
    .image-box {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-evenly;
      background-color: var(--modal-bg);
      width: 100%;
      border-radius: 8px;
      height: 270px;
      img {
        /* flex-grow: 1; */
        height: 125px;
        width: auto;
      }
    }
    .next-btn {
      font-size: 12px;
      right: 15px;
      bottom: 5px;
    }
    .close-button {
      width: 24px;
      height: 24px;
      font-size: 16px;
      padding-bottom: 4px;
    }
    .landscape-message {
      display: none;
    }
  }

  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    position: relative;
    align-items: center;
    /* justify-content: center; */
    height: 170px;
    padding: 5px 15px;
    width: 400px;
    h1 {
      font-size: 22px;
      padding-top: 0;
    }
    .container-info {
      display: none;
    }
    .next-btn {
      display: none;
    }
    .landscape-message {
      display: block;
      justify-content: center;
      text-align: center;
      width: 340px;
      height: 80px;
      color: var(--modal-bg);
      border-radius: 8px;
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .close-button {
      width: 20px;
      height: 20px;
      font-size: 14px;
      padding-bottom: 4px;
    }
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 40px;

  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    display: none;
  }
  @media (max-width: 480px) {
    height: 20px;
    margin: 0;
    bottom: 5px;
  }
`;

const Dot = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "var(--first-color)" : "#bbb"};
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--second-color);
  }
  @media (max-width: 480px) {
    width: 14px;
    height: 14px;
  }
  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    display: none;
  }
`;

const InstruccionesModal = ({ closeInstructionsModal }) => {
  const { reglas, instructBtn, moreInfoBtn } = useTextos();
  const [currentRule, setCurrentRule] = useState(0);
  const [currentSection, setCurrentSection] = useState("reglasPiezas");
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Verifica si todas las imágenes han cargado
  //   const allImages = document.querySelectorAll(".image-box img");
  //   let loadedImages = 0;

  //   const checkImageLoad = () => {
  //     loadedImages++;
  //     if (loadedImages === allImages.length) {
  //       setLoading(false); // Oculta el loader cuando todas las imágenes se hayan cargado
  //     }
  //   };

  //   allImages.forEach((image) => {
  //     if (image.complete) {
  //       checkImageLoad(); // Si la imagen ya está cargada, contamos como cargada
  //     } else {
  //       image.addEventListener("load", checkImageLoad);
  //     }
  //   });

  //   // Cleanup event listeners when component is unmounted or images change
  //   return () => {
  //     allImages.forEach((image) => {
  //       image.removeEventListener("load", checkImageLoad);
  //     });
  //   };
  // }, [currentRule, currentSection]);

  const handleDotClick = (index) => {
    setCurrentRule(index);
  };
  const handleNext = () => {
    if (currentSection === "reglasPiezas") {
      setCurrentSection("reglasJuego");
      setCurrentRule(0);
    } else if (currentSection === "reglasJuego") {
      setCurrentSection("reglasPiezas");
      setCurrentRule(0);
    }
  };
  const images =
    currentSection === "reglasPiezas"
      ? reglas.reglasPiezas[currentRule].img
      : reglas.reglasJuego[currentRule].img;

  return (
    <Container>
      <InstructionsBox>
        <button className="close-button" onClick={closeInstructionsModal}>
          X
        </button>
        <div className="titles aubrey-regular">
          <h1>{instructBtn.title}</h1>
        </div>

        <p className="landscape-message aubrey-regular">
          {instructBtn.message}
        </p>
        <div className="container-info">
          <div className="image-box">
            {images.map((image, index) => (
              <img src={image} alt={index} key={index} loading="lazy" />
            ))}
          </div>
          <div className="rules-box">
            <div>
              <h2>
                {currentSection === "reglasPiezas"
                  ? reglas.reglasPiezas[currentRule].title
                  : reglas.reglasJuego[currentRule].title}
              </h2>
              <p className=" aubrey-regular">
                {currentSection === "reglasPiezas"
                  ? reglas.reglasPiezas[currentRule].text
                  : reglas.reglasJuego[currentRule].text}
              </p>
            </div>
          </div>
        </div>
        <DotsContainer>
          {currentSection === "reglasPiezas"
            ? reglas.reglasPiezas.map((_, index) => (
                <Dot
                  key={index}
                  $active={currentRule === index}
                  onClick={() => handleDotClick(index)}
                />
              ))
            : reglas.reglasJuego.map((_, index) => (
                <Dot
                  key={index}
                  $active={currentRule === index}
                  onClick={() => handleDotClick(index)}
                />
              ))}
        </DotsContainer>
        <button className="next-btn" onClick={handleNext}>
          {moreInfoBtn}
        </button>
      </InstructionsBox>
    </Container>
  );
};

export default InstruccionesModal;
