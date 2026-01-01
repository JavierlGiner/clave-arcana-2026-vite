import { useState } from "react";
import styled from "styled-components";
import { usePWAInstall } from "../hooks/usePWAInstall";
import { useTextos } from "../contexts/LanguageContext";

export default function InstallButton({ onContinue }) {
  const { installMessage } = useTextos();
  const { isInstallable, installApp } = usePWAInstall();
  const [showInfo, setShowInfo] = useState(true);

  const ua = navigator.userAgent;
  const isIOS = /iphone|ipad|ipod/i.test(ua);
  const isFirefox = /firefox/i.test(ua);

  const handleClose = () => {
    setShowInfo(false);
    onContinue?.();
  };

  // Caso 1: Chromium
  if (isInstallable) {
    return (
      <Overlay>
        <CloseButton onClick={handleClose}>✕</CloseButton>
        <Content>
          <PrimaryButton
            onClick={async () => {
              await installApp();
              onContinue?.();
            }}
          >
            {installMessage.title}
          </PrimaryButton>
        </Content>
      </Overlay>
    );
  }

  // Caso 2: iOS Safari
  if (isIOS && showInfo) {
    return (
      <Overlay>
        <CloseButton onClick={handleClose}>✕</CloseButton>
        <Content>
          <p>{installMessage.ios}</p>
        </Content>
      </Overlay>
    );
  }

  // Caso 3: Firefox
  if (isFirefox && showInfo) {
    return (
      <Overlay>
        <CloseButton onClick={handleClose}>✕</CloseButton>
        <Content>
          <p>{installMessage.firefox}</p>
        </Content>
      </Overlay>
    );
  }

  return null;
}
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 24px;
`;

const Content = styled.div`
  color: white;
  text-align: center;
  font-size: 18px;
  line-height: 1.5;
  max-width: 320px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    font-size: 16px;
    max-width: 280px;
  }
`;

const PrimaryButton = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 6px;

  @media (max-width: 480px) {
    width: 100%;
    font-size: 15px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;
