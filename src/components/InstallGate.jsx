import { usePWAInstall } from "../hooks/usePWAInstall";

export default function InstallGate({ onContinue }) {
  const { isInstallable, installApp } = usePWAInstall();

  if (!isInstallable) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.box}>
        <h2>Instalar Clave Arcana</h2>
        <p>Instalá la aplicación para una mejor experiencia sin conexión.</p>

        <button onClick={installApp} style={styles.primary}>
          Instalar
        </button>

        <button onClick={onContinue} style={styles.secondary}>
          Continuar sin instalar
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.85)",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    background: "#111",
    color: "#fff",
    padding: 24,
    maxWidth: 360,
    textAlign: "center",
    borderRadius: 8,
  },
  primary: {
    width: "100%",
    padding: 12,
    marginTop: 16,
  },
  secondary: {
    width: "100%",
    padding: 12,
    marginTop: 8,
    opacity: 0.7,
  },
};
