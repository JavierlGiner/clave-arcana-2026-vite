import styled from "styled-components";
import { useTextos } from "../contexts/LanguageContext";

const Wrapper = styled.div`
  display: none;

  @media (max-width: 480px) and (max-height: 550px) and (orientation: portrait),
    (max-width: 720px) and (max-height: 335px) and (orientation: landscape) {
    display: flex;
    width: 100%;
    height: 100dvh;
    padding: 24px;
    background: var(--first-color);
    color: var(--second-color);

    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 18px;
  }

  h2 {
    font-family: var(--retro-font);
    font-size: 1rem;
  }

  p {
    color: white;
    line-height: 1.5;
    font-size: 0.9rem;
  }

  @media (max-width: 720px) and (max-height: 360px) and (orientation: landscape) {
    padding: 16px;
    gap: 10px;

    h2 {
      font-size: 0.8rem;
    }

    p {
      font-size: 0.72rem;
      line-height: 1.35;
    }
  }
`;

const ExitButton = styled.button`
  background-color: var(--second-color);
  font-family: "Aubrey", serif;
  font-weight: 600;
  color: var(--first-color);
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
`;

const UnsupportedScreen = ({ onExit }) => {
  const { unsupportedScreen, exitBtn } = useTextos();

  return (
    <Wrapper className="unsupported-screen">
      <h2>{unsupportedScreen.title}</h2>
      <p className=" goldman-regular">{unsupportedScreen.text1}</p>
      <p className=" goldman-regular">{unsupportedScreen.text2}</p>

      <ExitButton onClick={onExit}>{exitBtn}</ExitButton>
    </Wrapper>
  );
};

export default UnsupportedScreen;
