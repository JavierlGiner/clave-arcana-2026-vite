import styled from "styled-components";
import reina from "../images/reina Jirgev.webp";
import pink from "../images/pink potion logo-1.webp";
import { useTextos } from "../contexts/LanguageContext";
import "../stylesBack.css";

const StyledAbout = styled.div`
  /* =========================
     MODAL OVERLAY
  ========================== */
  .modal {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(
      135deg,
      rgba(32, 32, 32, 0.6),
      rgba(0, 0, 0, 0.8)
    );
    backdrop-filter: blur(8px);
  }

  /* =========================
     MODAL CONTAINER
  ========================== */
  .modal-content {
    position: relative;
    width: 660px;
    height: 600px;
    padding: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    background-color: var(--modal-bg);
    color: var(--first-color);
    font-size: 22px;
    font-weight: 700;
    text-align: justify;

    border-radius: 8px;
    border: 4px solid var(--second-color);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  /* =========================
     CLOSE BUTTON
  ========================== */
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

  /* =========================
     CONTENT
  ========================== */
  .modal-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .author-box {
    text-align: justify;
    font-family: "Aubrey", serif;
    font-size: 30px;
  }

  /* =========================
     REDES
  ========================== */
  .redes {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    width: 100%;
    height: 80px;
    margin: 10px 0;

    a {
      width: 80px;
      height: 80px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }

  /* =========================
     SEPARATOR
  ========================== */
  .separador {
    width: 100%;
    margin: 25px 0;
    border: 3px dashed var(--modal-color);
  }

  /* =========================
     DONATIONS
  ========================== */
  .donation-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 24px;
    padding: 0 10px;
  }

  .donation-text {
    font-size: 18px;
    margin: 10px 0;
    text-align: justify;
  }
  .donation-title {
    margin-bottom: 4px;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
  }
  .donationBtn {
    margin-top: 6px;
    width: 190px;
    align-self: center;
    display: flex;
    justify-content: space-evenly;
    background-color: #c017a4;
    color: white;
    padding: 8px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
  }

  /* =========================
     LEGAL
  ========================== */
  .legal-info {
    font-size: 8px;
    font-weight: 700;
    text-align: center;
    padding: 0 8px;
  }

  /* =========================
     MOBILE
  ========================== */
  @media (max-width: 720px) {
    .modal-content {
      width: 350px;
      height: 600px;
      font-size: 13px;
      gap: 5px;
    }
    .donation-title {
      font-size: 14px;
    }

    .donation-text {
      font-size: 14px;
    }
    .donationBtn {
      font-size: 12px;
      width: 170px;
    }

    .author-box {
      font-size: 18px;
    }

    .close-button {
      width: 24px;
      height: 24px;
    }

    .redes {
      height: 65px;

      a {
        width: 60px;
        height: 60px;
      }
    }
  }

  /* =========================
     LANDSCAPE SMALL HEIGHT
  ========================== */
  @media (max-width: 1024px) and (max-height: 640px) and (orientation: landscape) {
    .modal-content {
      width: 600px;
      height: 340px;
      padding: 8px;
      font-size: 15px;
    }
    .redes {
      height: 65px;

      a {
        width: 60px;
        height: 60px;
      }
    }

    .separador {
      margin: 8px 0;
    }

    .donation-container {
      font-size: 15px;
    }

    .donation-text {
      font-size: 11px;
      margin: 2px 0;
    }
    .donation-title {
      font-size: 15px;
    }

    .donationBtn {
      width: 180px;
      padding: 8px;
      font-size: 12px;
    }

    .author-box {
      font-size: 18px;
      margin: 5px;
    }
    .legal-info {
      font-size: 8px;
    }
  }
`;

const AboutModal = ({ setIsAboutModalOpen }) => {
  const { aboutText } = useTextos();

  return (
    <StyledAbout>
      <div className="modal">
        <div className="modal-content ">
          <button
            className="close-button "
            onClick={() => setIsAboutModalOpen(false)}
          >
            X
          </button>
          <div className="modal-info">
            <div className="author-box">
              <p>{aboutText.text1}</p>

              <br />
              <p> {aboutText.text2}</p>
            </div>
            <div className="redes">
              <a
                href="https://www.instagram.com/reinajirveg"
                target="_blank"
                rel="noreferrer"
              >
                <img src={reina} alt="redes" />
              </a>
              <a
                href="https://www.instagram.com/pink.potion.argentina"
                target="_blank"
                rel="noreferrer"
              >
                <img src={pink} alt="redes" />
              </a>
            </div>

            {/* Sección de donaciones */}
            <div className="separador" />
            <div className="donation-container  ">
              <p className="donation-title">
                {aboutText.donationTitle}
                <br />
              </p>
              <p className="donation-text"> {aboutText.donationText}</p>
              <a
                href="https://reinajirveg.itch.io/arcane-code"
                target="_blank"
                rel="noreferrer"
                className="donationBtn"
              >
                ☕ {aboutText.donationBtn}
              </a>
            </div>
            <p className="legal-info">
              <br /> <br />
              {aboutText.legal}
            </p>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};

export default AboutModal;
