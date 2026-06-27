import { useState } from "react";
import styled from "styled-components";
import { usePWAInstall } from "../hooks/usePWAInstall";
import { useTextos } from "../contexts/LanguageContext";

export default function InstallPWAButton() {
  const { isInstallable, installApp, isInstalled, platform } = usePWAInstall();

  const { installMessage } = useTextos();

  const [showModal, setShowModal] = useState(false);

  if (isInstalled) return null;

  const handleInstall = async () => {
    await installApp();
    setShowModal(false);
  };

  const renderContent = () => {
    switch (platform) {
      case "ios":
        return (
          <>
            <Body>{installMessage.ios}</Body>

            <SecondaryButton onClick={() => setShowModal(false)}>
              {installMessage.dismiss}
            </SecondaryButton>
          </>
        );

      case "firefox":
        return (
          <>
            <Body>{installMessage.firefox}</Body>

            <SecondaryButton onClick={() => setShowModal(false)}>
              {installMessage.dismiss}
            </SecondaryButton>
          </>
        );

      default:
        return (
          <>
            <Body>{installMessage.body}</Body>

            <BenefitList>
              <Benefit>◆ {installMessage.benefits.fullscreen}</Benefit>
              <Benefit>◆ {installMessage.benefits.homescreen}</Benefit>
              <Benefit>◆ {installMessage.benefits.offline}</Benefit>
              <Benefit>◆ {installMessage.benefits.quicklaunch}</Benefit>
            </BenefitList>

            <ButtonGroup>
              <PrimaryButton onClick={handleInstall}>
                {installMessage.action}
              </PrimaryButton>

              <SecondaryButton onClick={() => setShowModal(false)}>
                {installMessage.dismiss}
              </SecondaryButton>
            </ButtonGroup>
          </>
        );
    }
  };

  return (
    <>
      {(isInstallable || platform !== "chromium") && (
        <InstallLink onClick={() => setShowModal(true)}>
          ⬇ {installMessage.title}
        </InstallLink>
      )}

      {showModal && (
        <Overlay onClick={() => setShowModal(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <CloseIcon onClick={() => setShowModal(false)}>✕</CloseIcon>

            <Title>{installMessage.action}</Title>

            {renderContent()}
          </Modal>
        </Overlay>
      )}
    </>
  );
}
const InstallLink = styled.button`
  margin-top: 18px;
  padding: 10px 18px;

  background: rgba(71, 49, 30, 0.85);
  border: 2px solid var(--second-color);
  border-radius: 10px;

  color: var(--second-color);

  font-family: "Aubrey", serif;
  font-weight: 700;
  letter-spacing: 1px;

  display: flex;
  align-items: center;
  gap: 10px;

  transition: 0.25s;

  animation: pulseInstall 2.5s infinite;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 15px rgba(113, 135, 198, 0.35);
    background: var(--third-color);
    color: white;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    font-size: 0.9rem;
    padding: 10px 12px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;

  background: linear-gradient(
    135deg,
    rgba(32, 32, 32, 0.6),
    rgba(0, 0, 0, 0.82)
  );

  backdrop-filter: blur(8px);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9999;

  animation: fadeIn 0.25s ease;
`;

const Modal = styled.div`
  position: relative;
  width: min(500px, 92vw);

  background: var(--instruction-bg);
  border: 2px solid var(--second-color);
  border-radius: 12px;

  padding: 30px;
  color: var(--second-color);

  font-family: var(--font);
  display: flex;
  flex-direction: column;
  gap: 22px;

  animation: modalAppear 0.25s ease;

  @keyframes modalAppear {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  /* 📱 MOBILE */
  @media (max-width: 480px) {
    padding: 18px;
    gap: 14px;
    border-radius: 10px;
  }

  @media (max-width: 360px) {
    padding: 14px;
    gap: 12px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-family: var(--retro-font);
  font-size: 1rem;
  color: var(--second-color);

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
const Body = styled.p`
  text-align: center;
  line-height: 1.7;
  color: white;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PrimaryButton = styled.button`
  height: 48px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  background: var(--third-color);
  color: white;

  font-family: var(--font);
  font-size: 1rem;
  font-weight: bold;

  transition: 0.25s;

  &:hover {
    background: var(--second-color);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    height: 44px;
    font-size: 0.95rem;
  }
`;

const SecondaryButton = styled.button`
  height: 42px;
  background: transparent;

  border: 2px solid var(--second-color);
  border-radius: 8px;

  color: var(--second-color);
  font-family: var(--font);
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    color: white;
  }

  @media (max-width: 480px) {
    height: 40px;
    font-size: 0.9rem;
  }
`;

const BenefitList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 8px 0;

  @media (max-width: 480px) {
    gap: 10px;
    padding: 4px 0;
  }
`;

const Benefit = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    gap: 8px;
  }
`;

const CloseIcon = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  background: none;
  border: none;

  color: var(--second-color);
  font-size: 24px;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: rotate(90deg);
    color: white;
  }

  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
    font-size: 20px;
  }
`;
