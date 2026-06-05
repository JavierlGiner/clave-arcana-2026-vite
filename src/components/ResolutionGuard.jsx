import { useEffect, useState } from "react";

export default function ResolutionGuard({ children }) {
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    const checkResolution = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const valid =
        // Desktop
        width >= 1024 ||
        // Tablet
        (width >= 720 && width < 1024) ||
        // Mobile diseñado
        (width <= 720 && height >= 750);

      setSupported(valid);
    };

    checkResolution();

    window.addEventListener("resize", checkResolution);

    return () => window.removeEventListener("resize", checkResolution);
  }, []);

  if (!supported) {
    return (
      <div className="resolution-warning">
        <h1>⚠️ Resolution not supported</h1>
        <p>Please rotate your device or resize your browser window.</p>
      </div>
    );
  }

  return children;
}
