import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import reina from "../images/reina Jirgev.webp";
import potion from "../images/pink potion logo-1.webp";
import styled from "styled-components";
import "../stylesBack.css";

const ReinaTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--second-color);
  font-family: "Aubrey", serif;
  height: 100%;
  overflow: hidden;

  img {
    height: 300px;
    width: auto;
    margin: 20px auto;
    display: block;
  }

  h1 {
    font-size: 2.5rem;
    margin: 0;
  }

  @media (max-width: 760px) {
    img {
      height: 250px;
    }
  }

  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    img {
      height: 150px;
    }

    h1 {
      font-size: 1.75rem;
    }
  }
`;

const MotionContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReinaTitle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sequence = useMemo(
    () => ["empty", "reina", "potion", "title", "empty"],
    [],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sequence.length);
    }, 1800);

    return () => clearInterval(interval);
  }, [sequence.length]);

  const renderContent = () => {
    switch (sequence[currentIndex]) {
      case "reina":
        return <img src={reina} alt="Reina Jirgev" draggable={false} />;

      case "potion":
        return <img src={potion} alt="Potion Logo" draggable={false} />;

      case "title":
        return <h1>PRESENTS</h1>;

      default:
        return null;
    }
  };

  return (
    <ReinaTitles>
      <AnimatePresence mode="wait">
        <MotionContainer
          key={currentIndex}
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.04,
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
        >
          {renderContent()}
        </MotionContainer>
      </AnimatePresence>
    </ReinaTitles>
  );
};

export default ReinaTitle;
