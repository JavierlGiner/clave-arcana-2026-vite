import { useEffect, useState } from "react";

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  const [isInstalled, setIsInstalled] = useState(() => {
    return (
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true
    );
  });

  const [sessionDismissed, setSessionDismissed] = useState(() => {
    return sessionStorage.getItem("pwa_dismissed") === "true";
  });

  const ua = navigator.userAgent.toLowerCase();

  const platform = /iphone|ipad|ipod/.test(ua)
    ? "ios"
    : /firefox/.test(ua)
      ? "firefox"
      : "chromium";

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    const handleInstalled = () => {
      setDeferredPrompt(null);
      setIsInstallable(false);
      setIsInstalled(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );

      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  const installApp = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    const result = await deferredPrompt.userChoice;

    if (result.outcome === "accepted") {
      setDeferredPrompt(null);
      setIsInstallable(false);
      sessionStorage.removeItem("pwa_dismissed");
    } else {
      // 👇 SOLO sesión actual
      sessionStorage.setItem("pwa_dismissed", "true");
      setSessionDismissed(true);
      setDeferredPrompt(null);
    }
  };

  return {
    isInstallable: isInstallable && !sessionDismissed,
    isInstalled,
    installApp,
    platform,
  };
}
