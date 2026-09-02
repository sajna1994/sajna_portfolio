import { useEffect, useState } from "react";

import "./CursorGlow.css";

const CursorGlow = () => {

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {

    const move = (event) => {

      setPosition({
        x: event.clientX,
        y: event.clientY
      });

    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () => {

      window.removeEventListener(
        "mousemove",
        move
      );

    };

  }, []);

  return (
    <div
      className="cursor-glow"

      style={{
        left: position.x,
        top: position.y
      }}
    />
  );
};

export default CursorGlow;