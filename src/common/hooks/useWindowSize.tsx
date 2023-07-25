
import React from "react";

function getWindowSize() {
  return {
    width:1000,
    height: document.documentElement.offsetHeight
  };
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState({ width:0,height: 0});

  function changeWindowSize() {
    setWindowSize(getWindowSize());
  }

  React.useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}