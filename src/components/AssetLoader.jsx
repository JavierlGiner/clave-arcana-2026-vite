import { useEffect } from "react";

import Loader from "./Loader";
import { useAssets } from "../contexts/AssetContext";

import { coreImages, coreAudios } from "../assets/coreAssets";

const AssetLoader = ({ children }) => {
  const { assetsLoaded, setAssetsLoaded, progress, setProgress } = useAssets();

  useEffect(() => {
    const loadCoreAssets = async () => {
      const total = coreImages.length + coreAudios.length;

      let loaded = 0;

      const updateProgress = () => {
        loaded++;

        setProgress(Math.round((loaded / total) * 100));
      };

      const imagePromises = coreImages.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();

            img.onload = () => {
              updateProgress();
              resolve();
            };

            img.onerror = () => {
              updateProgress();
              resolve();
            };

            img.src = src;
          }),
      );

      const audioPromises = coreAudios.map(
        (src) =>
          new Promise((resolve) => {
            const audio = new Audio();

            audio.oncanplaythrough = () => {
              updateProgress();
              resolve();
            };

            audio.onerror = () => {
              updateProgress();
              resolve();
            };

            audio.src = src;
            audio.load();
          }),
      );

      await Promise.all([...imagePromises, ...audioPromises]);

      setAssetsLoaded(true);
    };

    loadCoreAssets();
  }, [setAssetsLoaded, setProgress]);

  if (!assetsLoaded) {
    return <Loader progress={progress} />;
  }

  return children;
};

export default AssetLoader;
