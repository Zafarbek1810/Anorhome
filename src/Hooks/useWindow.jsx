import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  const [windowSize, setWindowSize] = useState({width: 1000, height: 500});

  useEffect(() => {
    function handleResize() {
      const { innerWidth, innerHeight } = window;
      setWindowSize({width: innerWidth, height: innerHeight});
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
