import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../stylesBack.css";
import { useCountContext } from "../contexts/CountContext";

const GameCounter = styled.div`
  background-color: var(--second-color);
  color: var(--first-color);
  padding: 10px 10px;
  border-radius: 5px;
`;

const Contador = () => {
  const [tempo, setTempo] = useState(0);
  const { formattedTempo, updateFormattedTempo, isCounting } =
    useCountContext();

  useEffect(() => {
    if (!isCounting) return;

    const interval = setInterval(() => {
      setTempo((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isCounting]);

  useEffect(() => {
    const minutes = Math.floor(tempo / 60);
    const seconds = tempo % 60;

    const newTempo = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;

    updateFormattedTempo(newTempo);
  }, [tempo, updateFormattedTempo]);

  return <GameCounter className="contador">{formattedTempo}</GameCounter>;
};
export default Contador;
