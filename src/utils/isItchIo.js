export const isRunningOnItchIo = () => {
  if (typeof window === "undefined") return false;

  const hostname = window.location.hostname;
  const referrer = document.referrer;

  return (
    hostname.includes("itch.io") ||
    hostname.includes("itch.zone") ||
    referrer.includes("itch.io")
  );
};
