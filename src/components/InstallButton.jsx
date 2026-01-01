import { useState } from "react";
import { usePWAInstall } from "../hooks/usePWAInstall";

export default function InstallButton({ onContinue }) {
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
      <button
        onClick={async () => {
          await installApp();
          onContinue?.();
        }}
        style={styles.primary}
      >
        Instalar aplicación
      </button>
    );
  }

  // Caso 2: iOS Safari
  if (isIOS && showInfo) {
    return (
      <div style={styles.overlay}>
        <button style={styles.close} onClick={handleClose}>
          ✕
        </button>
        <div style={styles.content}>
          <p>
            Para instalar esta app:
            <br />
            tocá <strong>Compartir</strong> y luego
            <br />
            <strong>“Agregar a pantalla de inicio”</strong>
          </p>
        </div>
      </div>
    );
  }

  // Caso 3: Firefox
  if (isFirefox && showInfo) {
    return (
      <div style={styles.overlay}>
        <button style={styles.close} onClick={handleClose}>
          ✕
        </button>
        <div style={styles.content}>
          <p>
            Podés instalar esta app desde el menú del navegador:
            <br />
            <strong>☰ → Instalar aplicación</strong>
          </p>
        </div>
      </div>
    );
  }

  return null;
}

const styles = {
  primary: {
    padding: "12px 20px",
    fontSize: 16,
    cursor: "pointer",
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },

  content: {
    fontSize: 18,
    textAlign: "center",
    maxWidth: 320,
    lineHeight: 1.5,
  },

  close: {
    position: "absolute",
    top: 16,
    right: 16,
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: 24,
    cursor: "pointer",
  },
};
