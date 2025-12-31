import styled from "styled-components";

import clickSound from "../assets/Click FX.mp3";
import { useTextos } from "../contexts/LanguageContext";
import "../stylesBack.css";

const HeaderContainer = styled.header`
  position: static;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--first-color);
  width: 100%;
  height: 50px;

  /* Estilos para escritorios */
  @media (min-width: 1500px) {
    margin: 0;
    height: 80px;
  }
`;
const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  img {
    display: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  ul {
    align-items: center;
    text-align: center;
    font-family: var(--font);
    font-weight: 400;
    color: var(--second-color);
    width: 100%;
    list-style: none;
    font-size: 1.5rem;
    padding: 0;
    display: flex; /* Hacer que las etiquetas <a> estén en fila */
    justify-content: space-between; /* Espaciado uniforme entre ellas */
  }

  li {
    /* margin: 5px 0; */
  }
  button {
    text-align: center;
    font-family: var(--font);
    font-weight: 500;
    color: var(--second-color);
    background: transparent;
    border: none;
    height: 40px;
    font-size: 1.25rem;
  }

  @media (min-width: 1500px) {
    img {
      display: none;
      height: 80px;
      width: 80px;
      border-radius: 50%;
    }
    button {
      font-size: 1.5rem;
      text-align: center;
      font-family: var(--font);
      font-weight: 600;
      color: var(--second-color);
      /* margin-top: 1.5rem; */
    }
  }

  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    height: 20px;
    justify-content: space-around;
    button {
      font-size: 16px;
    }
  }
`;

const Header = ({ setIsAboutModalOpen, handleLangBtnClick }) => {
  const { language, about } = useTextos();
  const playAudio = new Audio(clickSound);

  const playClickSound = () => {
    playAudio.play();
  };
  const handleAboutClick = () => {
    playClickSound();
    setIsAboutModalOpen(true);
  };
  return (
    <HeaderContainer>
      <Navbar>
        <ul>
          <li>
            <button className="languege-btn" onClick={handleLangBtnClick}>
              {language}
            </button>
          </li>

          <li>
            <button className="about-btn" onClick={handleAboutClick}>
              {about}
            </button>
          </li>
        </ul>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
