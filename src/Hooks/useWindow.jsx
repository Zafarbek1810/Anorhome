import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    function handleResize() {
      const { innerWidth } = window;
      setWidth(innerWidth);
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
