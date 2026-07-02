import styled from "styled-components";
import arcano from "../images/Ficha-3-false1.webp";

const Card = styled.section`
  width: min(560px, 92vw);
  max-height: calc(100dvh - 140px);
  overflow-y: auto;
  padding: 1.5rem;
  border: 3px solid var(--second-color);
  border-radius: 14px;
  background: var(--instruction-bg);
  color: var(--second-color);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: fadeIn 0.6s ease forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(14px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  h2 {
    margin: 0;
    font-size: 1.35rem;
    letter-spacing: 1px;
  }

  p {
    margin: 0;
    color: white;
    line-height: 1.55;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 0.8rem;

    h2 {
      font-size: 1.05rem;
    }

    p,
    li {
      font-size: 0.86rem;
      line-height: 1.4;
    }
  }

  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    max-height: calc(100dvh - 90px);
    padding: 0.8rem;
    gap: 0.55rem;

    h2 {
      font-size: 0.95rem;
    }

    p,
    li {
      font-size: 0.75rem;
      line-height: 1.3;
    }
  }
`;

const ArcanoImage = styled.img`
  width: 86px;
  height: 86px;
  object-fit: contain;
  margin: 0 auto;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.18));

  @media (max-width: 480px) {
    width: 68px;
    height: 68px;
  }

  @media (max-width: 950px) and (max-height: 480px) and (orientation: landscape) {
    width: 52px;
    height: 52px;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.4rem;

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled.button`
  min-height: 44px;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 2px solid var(--third-color);
  background: var(--second-color);
  color: var(--first-color);
  font-family: var(--font);
  font-weight: 700;
  cursor: pointer;
`;

const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  color: var(--second-color);
  border-color: var(--second-color);
`;

const Steps = styled.ol`
  margin: 0;
  padding-left: 1.3rem;
  color: white;
  text-align: left;
  line-height: 1.55;
`;

export default function InstallIntroCard({
  title,
  body,
  body2,
  primaryLabel,
  secondaryLabel,
  showSteps,
  stepsTitle,
  steps,
  doneLabel,
  backLabel,
  onPrimaryClick,
  onSecondaryClick,
  onBackClick,
}) {
  return (
    <Card className="goldman-regular">
      {!showSteps ? (
        <>
          <h2>{title}</h2>

          <ArcanoImage src={arcano} alt="Arcano" />

          <p>{body}</p>
          <p>{body2}</p>

          <Actions>
            <PrimaryButton onClick={onPrimaryClick}>
              {primaryLabel}
            </PrimaryButton>

            <SecondaryButton onClick={onSecondaryClick}>
              {secondaryLabel}
            </SecondaryButton>
          </Actions>
        </>
      ) : (
        <>
          <h2>{stepsTitle}</h2>

          <Steps>
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </Steps>

          <Actions>
            <PrimaryButton onClick={onSecondaryClick}>
              {doneLabel}
            </PrimaryButton>

            <SecondaryButton onClick={onBackClick}>{backLabel}</SecondaryButton>
          </Actions>
        </>
      )}
    </Card>
  );
}
