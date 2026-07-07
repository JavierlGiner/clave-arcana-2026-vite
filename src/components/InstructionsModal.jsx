import React, { useState } from "react";
import { useTextos } from "../contexts/LanguageContext";
import styled from "styled-components";
import "../styles.css";
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
const NavigationContainer = styled.div`
  position: absolute;
  bottom: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 20px;
  width: 100%;
  @media (max-width: 760px) {
    gap: 10px;
  }
`;

const ArrowButton = styled.button`
  background: transparent;
  border: none;
  font-size: 16px;
  font-weight: 700;
  color: var(--second-color);
  cursor: pointer;

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
  @media (max-width: 760px) {
    font-size: 10px;
  }
`;

const Counter = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: var(--second-color);
  @media (max-width: 760px) {
    font-size: 12px;
  }
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
    top: 0.5rem;
    right: 0.5rem;

    width: 30px;
    height: 30px;

    background-color: var(--first-color);
    color: var(--second-color);
    font-weight: bold;

    border-radius: 25%;
  }
  .container-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
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
      font-size: 18px;
      text-align: left;
      line-height: 24px;
    }
  }
  .next-btn {
    position: absolute;
    right: 20px;
    bottom: 5px;

    font-size: 15px;
    background-color: transparent;
    border: none;
    color: var(--second-color);
    margin: 0;
  }
  .landscape-message {
    display: none;
  }

  @media (min-width: 761px) and (max-width: 1100px),
    (min-width: 761px) and (max-height: 760px) {
    width: min(720px, 86vw);
    height: min(560px, 82dvh);
    padding: 18px 24px;
    gap: 8px;

    .titles {
      padding-top: 0;
    }

    h1 {
      font-size: 26px;
    }

    .container-info {
      gap: 12px;
    }

    .image-box {
      height: 195px;

      img {
        height: 185px;
        width: auto;
      }
    }

    .rules-box {
      height: 190px;
      margin: 6px 0 22px;
      padding: 8px 0;

      h2 {
        font-size: 18px;
      }

      p {
        font-size: 15px;
        line-height: 21px;
        padding: 8px 10px;
      }
    }

    .next-btn {
      right: 18px;
      bottom: 5px;
      font-size: 16px;
    }

    .close-button {
      width: 26px;
      height: 26px;
    }
  }
  /* Estilos para dispositivos móviles */
  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    padding: 5px 8px;
    width: 320px;
    height: 520px;
    justify-content: center;
    h1 {
      font-size: 20px;
      font-weight: 700;

      padding: 0px;
    }
    .container-info {
      height: auto;
      justify-content: center;
      gap: 5px;
    }
    .rules-box {
      margin-bottom: 22px;
      height: 200px;
      scrollbar-width: auto;

      p {
        width: 100%;
        font-size: 14px;
        line-height: 20px;
      }
      h2 {
        font-size: 16px;
      }
    }
    .image-box {
      position: relative;
      overflow: hidden;
      height: 200px;
      img {
        height: 125px;
        width: auto;
      }
    }
    .next-btn {
      font-size: 10px;
      right: 15px;
      bottom: 7px;
    }

    .landscape-message {
      display: none;
    }
  }

  @media (max-width: 950px) and (max-height: 500px) and (orientation: landscape) {
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
    width: 12px;
    height: 12px;
  }
  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    display: none;
  }
`;
const ImageDotsContainer = styled.div`
  display: none;

  @media (max-width: 760px) {
    display: flex;
    justify-content: center;
    gap: 6px;
    margin-top: 5px;
  }
`;

const ImageDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) =>
    props.$active ? "var(--first-color)" : "#999"};
`;

const InstruccionesModal = ({ closeInstructionsModal }) => {
  const { reglas, instructBtn, moreInfoBtn, instructNav1, instructNav2 } =
    useTextos();
  const [currentImage, setCurrentImage] = useState(0);
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

  const totalRules =
    currentSection === "reglasPiezas"
      ? reglas.reglasPiezas.length
      : reglas.reglasJuego.length;

  const handlePrevRule = () => {
    if (currentRule > 0) {
      setCurrentRule((prev) => prev - 1);
      setCurrentImage(0);
    }
  };

  const handleNextRule = () => {
    if (currentRule < totalRules - 1) {
      setCurrentRule((prev) => prev + 1);
      setCurrentImage(0);
    }
  };
  const handleNext = () => {
    setCurrentImage(0);

    if (currentSection === "reglasPiezas") {
      setCurrentSection("reglasJuego");
      setCurrentRule(0);
    } else {
      setCurrentSection("reglasPiezas");
      setCurrentRule(0);
    }
  };
  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;

    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (distance > 50 && currentImage < images.length - 1) {
      setCurrentImage((prev) => prev + 1);
    }

    if (distance < -50 && currentImage > 0) {
      setCurrentImage((prev) => prev - 1);
    }

    setTouchStart(null);
  };

  const images =
    currentSection === "reglasPiezas"
      ? reglas.reglasPiezas[currentRule].img
      : reglas.reglasJuego[currentRule].img;

  return (
    <Container>
      <InstructionsBox>
        <button
          className="close-button goldman-regular"
          onClick={closeInstructionsModal}
        >
          X
        </button>
        <div className="titles goldman-bold">
          <h1>{instructBtn.title}</h1>
        </div>
        <NavigationContainer>
          <ArrowButton
            className="goldman-regular"
            onClick={handlePrevRule}
            disabled={currentRule === 0}
          >
            {instructNav1}
          </ArrowButton>

          <Counter className="goldman-regular">
            {currentRule + 1} / {totalRules}
          </Counter>

          <ArrowButton
            onClick={handleNextRule}
            className="goldman-regular"
            disabled={currentRule === totalRules - 1}
          >
            {instructNav2}
          </ArrowButton>
        </NavigationContainer>
        <p className="landscape-message goldman-regular">
          {instructBtn.message}
        </p>
        <div className="container-info goldman-regular">
          <div className="image-box">
            {window.innerWidth <= 760 ? (
              <img
                src={images[currentImage]}
                alt={`instruction-${currentImage}`}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              />
            ) : (
              images.map((image, index) => (
                <img
                  src={images[currentImage]}
                  alt={`instruction-${currentImage}`}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                />
              ))
            )}
          </div>
          {images.length > 1 && (
            <ImageDotsContainer>
              {images.map((_, index) => (
                <ImageDot
                  key={index}
                  $active={currentImage === index}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </ImageDotsContainer>
          )}
          <div className="rules-box">
            <div>
              <h2>
                {currentSection === "reglasPiezas"
                  ? reglas.reglasPiezas[currentRule].title
                  : reglas.reglasJuego[currentRule].title}
              </h2>
              <p className="">
                {currentSection === "reglasPiezas"
                  ? reglas.reglasPiezas[currentRule].text
                  : reglas.reglasJuego[currentRule].text}
              </p>
            </div>
          </div>
        </div>

        <button className="next-btn goldman-regular" onClick={handleNext}>
          {moreInfoBtn}
        </button>
      </InstructionsBox>
    </Container>
  );
};

export default InstruccionesModal;
