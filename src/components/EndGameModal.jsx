// import React, { useState } from "react";
import jirgev from "../images/youngJirveg.webp";
import reina from "../images/reina Jirgev.webp";
import potion from "../images/pink potion logo-1.webp";
import styled from "styled-components";
import "../styles.css";
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
  transition:
    opacity 1s ease,
    visibility 1s ease;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
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
    font-size: 48px;
    font-weight: 700;
    text-align: center;
  }
  .endgame-modal {
    display: flex;
    flex-direction: row;
    gap: 15px;
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
    padding: 5px;
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
      width: 100%;
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
      font-family: "Aubrey", serif;
    }
    .links-msg {
      border-radius: 6px;
      font-size: 1.1rem;
      text-align: left;
    }
  }
  .score-container-2 {
    width: 96%;
    min-height: 210px;
    padding: 10px;
    border: 4px solid black;
    border-radius: 8px;
    background-color: var(--instruction-bg);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
  }

  .final-step-content {
    width: 100%;
    min-height: 165px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .links-msg,
  .premium-container {
    width: 100%;
    min-height: 165px;
    padding: 12px;
    border-radius: 6px;
    background-color: var(--button-bg-hover);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .links-msg p,
  .premium-container p {
    margin: 0;
    padding: 0;
    background: transparent;
    text-align: center;
    width: 100%;
  }

  .links-msg p {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.25;
  }

  .redes-container {
    width: auto;
    display: flex;
    justify-content: center;
    gap: 28px;
    margin-top: 18px;
  }

  .redes-container img {
    width: 76px;
    height: 76px;
    border-radius: 50%;
    object-fit: cover;
  }

  .donation-title {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }

  .donation-text {
    margin-top: 10px;
    font-size: 15px;
    line-height: 1.35;
    text-align: center;
  }

  .donationBtn {
    margin-top: 14px;
  }

  .slider-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .dot {
    width: 11px;
    height: 11px;
    border: 2px solid black;
    border-radius: 50%;
    background: #777;
    cursor: pointer;
  }

  .dot.active {
    background: white;
    transform: scale(1.25);
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

  @media (min-width: 1024px) {
    display: flex;
    background-color: var(--modal-bg);
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 800px;
    padding: 20px;
    gap: 25px;

    .title {
      font-size: 48px;
      font-weight: 700;
      text-align: center;
    }
    .endgame-modal {
      display: flex;
      flex-direction: row;
      gap: 15px;
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
      font-weight: 600;
      padding: 5px;
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
        width: 100%;
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
        font-family: "Aubrey", serif;
      }
      .links-msg {
        border-radius: 6px;
        font-size: 1.1rem;
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
      padding: 6px;
      height: auto;
      width: 96%;
      background-color: var(--instruction-bg);
      gap: 15px;

      p {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 6px;
        background-color: var(--button-bg-hover);
        height: auto;
        padding: 8px;
        text-align: justify;
        align-items: center;
        text-transform: uppercase;
        font-weight: 600;
        width: 100%;
      }

      .links-msg {
        border-radius: 6px;
        font-weight: 700;
        font-size: 18px;
        text-align: center;
        height: auto;
        width: 100%;
      }
      .premium-container {
        height: auto;
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
        font-size: 16px;
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
        font-size: 12px;
        text-decoration: none;
        width: auto;
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
  }
  @media (max-width: 1024px) {
    height: auto;
    width: auto;
    max-width: 520px;
    padding: 4px 8px;
    gap: 10px;
    .title {
      font-size: 26px;
    }

    .endgame-modal {
      height: 100%;
      flex-direction: row;
      justify-content: space-around;
      margin: 0;
    }
    .score-container {
      font-size: 1rem;
      font-weight: 600;
      height: 180px;
      width: 320px;
      background-color: var(--instruction-bg);
      gap: 10px;

      p {
        height: 100%;
        padding: 8px;
      }
      span {
        margin: 15px;
        width: 110px;
        font-size: 2.125rem;
      }
      .links-msg {
        border-radius: 6px;
        font-size: 12px;
        font-weight: 700;
      }
    }

    .score-container-2 {
      height: auto;
      background-color: var(--instruction-bg);
      gap: 5px;
      margin: 4px 0;

      p {
        font-size: 12px;
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
          font-size: 14px;
          padding-bottom: 0;
        }
      }

      .donation-text {
        font-size: 12px;
      }
      .donationBtn {
        height: 30px;
        width: auto;
        font-size: 10px;
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
  @media (max-width: 1024px) and (max-height: 480px) and (orientation: landscape) {
    width: 550px;
    padding: 6px;
    gap: 4px;
    .title {
      font-size: 22px;
    }
    .score-container-2 {
      p {
        padding: 4px;
      }
    }
    .image-container {
      border-radius: 8px;
      height: auto;
      width: auto;
      border: 4px solid black;
      background-color: var(--instruction-bg);

      img {
        border-radius: 8px;
        width: 160px;
        height: 160px;
      }
    }
  }

  @media (max-width: 720px) and (orientation: portrait) {
    width: 350px;
    height: auto;
    padding: 5px;
    gap: 0px;
    .title {
      font-size: 30px;
    }
    .endgame-modal {
      flex-direction: column;
      justify-content: space-around;
      gap: 10px;
      margin: 15px 0;
      height: auto;
    }

    .donationBtn {
      width: auto;
      font-size: 10px;
      padding: 8px;
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

      p {
        height: auto;
        text-transform: uppercase;

        padding-top: 6px;
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
      width: 100%;
      min-height: 190px;
      padding: 8px;
    }

    .final-step-content,
    .links-msg,
    .premium-container {
      min-height: 145px;
    }

    .links-msg p {
      font-size: 13px;
      line-height: 1.25;
    }

    .redes-container {
      gap: 24px;
      margin-top: 14px;
    }

    .redes-container img {
      width: 54px;
      height: 54px;
    }

    .donation-title {
      font-size: 15px;
    }

    .donation-text {
      font-size: 12px;
      line-height: 1.3;
    }

    .donationBtn {
      font-size: 10px;
      padding: 8px;
      margin-top: 10px;
    }
  }
`;

const StyledButton = styled.button`
  background-color: var(--second-color);
  font-family: "Aubrey", serif;
  color: var(--first-color);
  border: 2px solid var(--third-color);
  border-radius: 5px;
  height: 60px;
  width: 200px;
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;

  /* Transición suave para el hover */
  transition:
    background-color 0.3s,
    color 0.3s,
    border 0.3s;

  /* Estilos para el hover */
  &:hover {
    background-color: var(--modal-bg);
    color: var(--first-color-beta);
    border: 2px solid var(--first-color-beta); /* Borde dorado en hover */
  }

  @media (min-width: 720px) and (max-width: 1024px) {
    height: 35px;
    width: 110px;
    font-size: 18px;
  }

  @media (max-width: 720px) {
    width: 80px;
    height: 30px;
    font-size: 16px;
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
  const [page, setPage] = useState(0);
  const { endGame, playBtn, exitBtn, aboutText, instructNav2 } = useTextos();
  const [showFinalStep, setShowFinalStep] = useState(false);

  const isItchIo =
    typeof window !== "undefined" &&
    window.location.hostname.endsWith(".itch.io");

  const handleContinue = () => {
    setPage(0);
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
                  <div className="final-step-content">
                    {page === 0 ? (
                      <div className="links-msg">
                        <p>{endGame.text2}</p>

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
                      </div>
                    ) : (
                      <div className="premium-container">
                        {isItchIo ? (
                          <>
                            <p className="donation-title">
                              {endGame.thanksTitle}
                            </p>

                            <p className="donation-text">
                              {endGame.thanksText}
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="donation-title">
                              {aboutText.donationTitle}
                            </p>

                            <p className="donation-text">
                              {aboutText.donationText}
                            </p>

                            <a
                              href="https://reinajirveg.itch.io/arcane-code"
                              target="_blank"
                              rel="noreferrer"
                              className="donationBtn"
                            >
                              ☕ {aboutText.donationBtn}
                            </a>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="slider-dots">
                    <button
                      type="button"
                      className={page === 0 ? "dot active" : "dot"}
                      onClick={() => setPage(0)}
                    />

                    <button
                      type="button"
                      className={page === 1 ? "dot active" : "dot"}
                      onClick={() => setPage(1)}
                    />
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

                {page === 0 ? (
                  <StyledButton onClick={() => setPage(1)}>
                    {instructNav2}
                  </StyledButton>
                ) : (
                  <StyledButton onClick={handleRestartBtnClick}>
                    {playBtn}
                  </StyledButton>
                )}
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
