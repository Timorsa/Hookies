import { useState, useRef, useEffect } from "react";

const useFullScreen = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const element = useRef<any>();

  const handleEnterFullScreen = () => {
    const el = element.current;
    if (el) {
      el.requestFullscreen && el.requestFullscreen();
    }
  };

  const handleExitFullScreen = () => {
    const elFS = element.current.ownerDocument.fullscreen;
    if (isFullScreen && elFS) {
      document.exitFullscreen();
      document.exitFullscreen && document.exitFullscreen();
    }
  };
  
  useEffect(() => {
    const eventHandler = () => {
      setIsFullScreen((val) => !val);
    };
    document.addEventListener("fullscreenchange", eventHandler);
    return () => {
      document.removeEventListener("fullscreenchange", eventHandler);
    };
  }, [setIsFullScreen])

  return [isFullScreen, handleEnterFullScreen, handleExitFullScreen];
};

export default useFullScreen;