// import React, { useState } from "react";
import jirgev from "../images/youngJirveg.webp";
import reina from "../images/reina Jirgev.webp";
import potion from "../images/pink potion logo-1.webp";
import styled from "styled-components";
import "../stylesBack.css";
import { useNavigate } from "react-router-dom";
import { useTextos } from "../contexts/LanguageContext";
import { useState } from "react";

const StyledContainer = styled.div`
  /* VENTANA MODAL DE ABOUT */
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
  z-index: 9999999;
  transition: opacity 1s ease, visibility 1s ease;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  height: 560px;
  width: 900px;
  padding: 20px 30px;
  background-color: var(--modal-bg);
  border-radius: 8px;
  align-items: center;
  justify-content: center;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* Animación de aparición */
  opacity: 0;
  animation: fadeIn 2.5s forwards;

  .title {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
  }
  .endgame-modal {
    display: flex;
    flex-direction: row;
    gap: 25px;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .score-container {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    border-style: double;
    align-items: center;
    justify-content: center;
    border: 4px solid black;
    font-size: 1.5rem;

    padding: 10px;
    height: 260px;
    width: 480px;
    background-color: var(--instruction-bg);
    gap: 15px;

    p {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 6px;
      background-color: var(--button-bg-hover);
      height: 100%;
      padding: 8px;
      text-align: center;
      align-items: center;
      text-transform: uppercase;
    }
    span {
      margin: 15px 0;
      display: flex;
      justify-content: center;
      border-radius: 6px;
      background-color: var(--second-color);
      height: auto;
      width: 160px;
      font-size: 3.5rem;
      color: var(--first-color);
    }
    .links-msg {
      border-radius: 6px;
      font-size: 1.1rem;
      font-weight: 700;
      text-align: left;
    }
  }
  .score-container-2 {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    border-style: double;
    align-items: center;
    justify-content: center;
    border: 4px solid black;
    padding: 8px;
    height: 370px;
    width: 95%;
    background-color: var(--instruction-bg);
    gap: 15px;

    p {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 6px;
      background-color: var(--button-bg-hover);
      height: 100%;
      padding: 8px;
      text-align: justify;
      align-items: center;
      text-transform: uppercase;
      width: 100%;
    }

    .links-msg {
      border-radius: 6px;
      font-weight: 700;
      font-size: 18px;
      text-align: center;
      height: auto;
    }
    .premium-container {
      height: 100%;
      background-color: var(--button-bg-hover);
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      p {
        display: flex;
        flex-direction: column;
        height: auto;
        border-radius: 6px;
        background-color: var(--button-bg-hover);
        text-align: justify;
      }
    }
    .donation-text {
      font-size: 18px;
    }
    .donation-title {
      font-size: 18px;
    }

    .donationBtn {
      background-color: #c017a4;
      color: white;
      padding: 10px;
      border-radius: 8px;
      font-weight: bold;
      font-size: 16px;
      text-decoration: none;
      width: 200px;
      margin-bottom: 8px;
    }
  }
  .image-container {
    border-radius: 8px;
    height: auto;
    width: 260px;
    border: 4px solid black;
    background-color: var(--instruction-bg);

    img {
      border-radius: 8px;
      width: 100%;
      height: auto;
    }
  }
  .buttons-container {
    display: flex;
    width: 95%;
    justify-content: space-between;
  }
  .redes-container {
    display: flex;
    width: 180px;
    align-items: center;
    margin-top: 5px;
    justify-content: space-between;
  }
  .redes-container img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
  }

  @media (max-width: 480px) {
    width: 350px;
    height: 600px;
    padding: 15px;

    .title {
      font-size: 34px;
    }
    .endgame-modal {
      flex-direction: column;
      gap: 10px;
      height: 470px;
    }

    .donationBtn {
      width: 120px;
    }
    .image-container {
      height: 200px;
      width: 200px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .score-container {
      height: auto;
      width: 280px;
      font-size: 14px;
      padding: 4px;

      p {
        height: auto;
        text-transform: uppercase;
        overflow-y: scroll;
      }
      span {
        width: 100px;
        font-size: 2.25rem;
      }
      .links-msg {
        font-size: 14px;
        height: 160px;
      }
    }

    .score-container-2 {
      padding: 5px;
      background-color: var(--instruction-bg);
      gap: 10px;
      height: 450px;
      p {
        height: 100%;
        padding: 8px;
        font-size: 1rem;
        width: 100%;
      }
      .redes-container img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
      }
      .redes-container {
        display: flex;
        width: 150px;
        align-items: center;
        margin-top: 5px;
        justify-content: space-between;
      }
      .donation-text {
        font-size: 1rem;
      }
      .donation-title {
        padding-bottom: 0;
      }
    }
  }

  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    height: 340px;
    width: 650px;

    .title {
      font-size: 26px;
    }

    .endgame-modal {
      height: 100%;
    }
    .score-container {
      font-size: 1.25rem;
      padding: 0 5px;
      height: 180px;
      width: 420px;
      background-color: var(--instruction-bg);
      gap: 10px;

      p {
        height: 95%;
        padding: 8px;
      }
      span {
        margin: 15px;
        width: 110px;
        font-size: 2.125rem;
      }
      .links-msg {
        border-radius: 6px;
        font-size: 11px;
        font-weight: 700;
      }
    }

    .score-container-2 {
      height: 240px;
      background-color: var(--instruction-bg);
      gap: 5px;
      p {
        width: 100%;
        font-size: 0.75rem;
      }
      .redes-container img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
      }
      .redes-container {
        display: flex;
        width: 150px;
        align-items: center;
        margin-top: 5px;
        justify-content: space-between;
      }
      .premium-container {
        height: auto;
        background-color: var(--button-bg-hover);
        border-radius: 6px;
        p {
          display: flex;
          flex-direction: column;
          height: auto;
          border-radius: 6px;
          background-color: var(--button-bg-hover);
          text-align: justify;
        }
        .donation-title {
          font-size: 1rem;
          padding-bottom: 0;
        }
      }

      .donation-text {
        font-size: 0.75rem;
      }
      .donationBtn {
        height: 35px;
        width: auto;
        font-size: 1rem;
        margin-bottom: 5px;
      }
    }

    .image-container {
      height: 180px;
      width: 200px;

      img {
        border-radius: 8px;
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const StyledButton = styled.button`
  background-color: var(--second-color);
  font-family: var(--font);
  color: var(--first-color);
  border: 2px solid var(--third-color);
  border-radius: 5px;
  height: 60px;
  width: 200px;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;

  /* Transición suave para el hover */
  transition: background-color 0.3s, color 0.3s, border 0.3s;

  /* Estilos para el hover */
  &:hover {
    background-color: var(--modal-bg);
    color: var(--first-color-beta);
    border: 2px solid var(--first-color-beta); /* Borde dorado en hover */
  }
  @media (max-width: 480px) {
    width: 105px;
    height: 40px;
    font-size: 14px;
  }
  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    height: 40px;
    width: 120px;
    font-size: 18px;
  }
`;
// const BlackScreen = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: black;
//   color: white;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   z-index: 10000;

//   .topscore-list {
//     list-style: none;
//     padding: 0;
//     margin: 0;
//     width: 700px;
//     display: flex;
//     flex-direction: column;
//     height: auto;
//     overflow-y: scroll;
//   }

//   .score-file {
//     display: flex;
//     width: 100%;
//     border: 4px solid red;
//     justify-content: space-between;
//     margin: 10px 0;
//     font-size: 22px;
//   }
//   .score-file::before {
//     content: "";
//     position: absolute;
//     top: 50%;
//     left: 0;
//     right: 0;
//     height: 1px;
//     background: repeating-linear-gradient(
//       to right,
//       black,
//       black 2px,
//       transparent 2px,
//       transparent 4px
//     );
//     z-index: -1;
//   }
// `;

const EndGameModal = ({ formattedTempo }) => {
  // const [showBlackScreen, setShowBlackScreen] = useState(false);
  const { endGame, playBtn, exitBtn, aboutText } = useTextos();
  const [showFinalStep, setShowFinalStep] = useState(false);

  const handleContinue = () => {
    setShowFinalStep(true);
  };
  const navigate = useNavigate();

  const handleBtnClick = () => {
    // setShowBlackScreen(false);

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const handleRestartBtnClick = () => {
    setTimeout(() => {
      navigate(0);
    }, 1000);
  };

  return (
    <>
      <StyledContainer>
        <Modal>
          <div className="title aubrey-regular">{endGame.title}</div>
          <div className="endgame-modal">
            {!showFinalStep ? (
              <>
                <div className="image-container">
                  <img src={jirgev} alt="reina" />
                </div>
                <div className="score-container">
                  <p className="">
                    {endGame.text1}
                    <br />
                    <span>{formattedTempo}</span>
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="score-container-2">
                  <div className="links-msg">
                    <p className="">
                      {endGame.text2}
                      <div className="redes-container">
                        <a
                          href="https://www.instagram.com/reinajirveg"
                          target="_blank"
                          rel="noreferrer"
                          className="logo"
                        >
                          <img src={reina} alt="logo" />
                        </a>
                        <a
                          href="https://www.instagram.com/pink.potion.argentina"
                          target="_blank"
                          rel="noreferrer"
                          className="logo"
                        >
                          <img src={potion} alt="logo" />
                        </a>
                      </div>
                    </p>
                  </div>
                  <div className="premium-container">
                    <p className="donation-title">{aboutText.donationTitle}</p>
                    <p className="donation-text"> {aboutText.donationText}</p>
                    <a
                      href="https://ko-fi.com/reinajirveg" // 🔁
                      target="_blank"
                      rel="noreferrer"
                      className="donationBtn"
                    >
                      ☕ {aboutText.donationBtn}
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
          {!showFinalStep ? (
            <>
              <div>
                <StyledButton onClick={handleContinue}>
                  {endGame.btn}
                </StyledButton>
              </div>
            </>
          ) : (
            <>
              <div className="buttons-container">
                <StyledButton onClick={handleBtnClick}>{exitBtn}</StyledButton>
                <StyledButton onClick={handleRestartBtnClick}>
                  {playBtn}
                </StyledButton>
              </div>
            </>
          )}
        </Modal>
      </StyledContainer>
      {/* )} */}
    </>
  );
};

export default EndGameModal;

/*********** */
/* {
        /* {showBlackScreen && (
        <BlackScreen className="score-font">
          <h1>ARCANE CODE TOP SCORES</h1>
          <ul className="topscore-list">
            {topScores.length > 0 ? (
              topScores.map((user, index) => (
                <li key={index} className="score-file">
                  <span>{index + 1}</span>
                  <span>{user.username}</span>
                  <span> {user.time}</span>
                </li>
              ))
            ) : (
              <li>{loading}</li>
            )}
          </ul>
        </BlackScreen>
      )} */
/* {!showBlackScreen && ( */
