import styled from "styled-components";
import "../stylesBack.css";

const StyledButton = styled.button`
  /* Estilos básicos del botón */
  height: 50px;
  width: 150px;
  background-color: var(--second-color);
  font-family: var(--font);
  font-size: 18px;
  font-weight: 500;
  color: var(--first-color);
  border: none;
  border-radius: 5px;

  /* Transición suave para el hover */
  transition: background-color 0.3s, color 0.3s, border 0.3s;

  /* Estilos para el hover */
  &:hover {
    background-color: var(--modal-bg);
    color: var(--first-color-beta);
    border: 2px solid var(--first-color-beta); /* Borde dorado en hover */
  }

  @media (min-width: 1500px) {
    height: 60px;
    width: 200px;
    font-size: 24px;
    font-weight: 600;
  }
  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    height: 40px;
    width: 120px;
    font-size: 14px;
  }
`;
const CustomButton = ({ onClick, label }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default CustomButton;
