import { useRef } from "react";

import "./MagneticButton.css";

const MagneticButton = ({
  children,
  href = "#"
}) => {

  const buttonRef = useRef(null);

  const handleMouseMove = (event) => {

    const button =
      buttonRef.current;

    if (!button) return;

    const rect =
      button.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left -
      rect.width / 2;

    const y =
      event.clientY -
      rect.top -
      rect.height / 2;

    button.style.transform =
      `translate(${x * 0.12}px, ${y * 0.12}px)`;
  };

  const handleMouseLeave = () => {

    buttonRef.current.style.transform =
      "translate(0px, 0px)";
  };

  return (

    <a
      ref={buttonRef}

      href={href}

      className="magnetic-button"

      onMouseMove={handleMouseMove}

      onMouseLeave={handleMouseLeave}
    >

      {children}

    </a>

  );
};

export default MagneticButton;