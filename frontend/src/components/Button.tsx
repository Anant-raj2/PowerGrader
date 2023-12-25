import React from "react";

import { useStateContext } from "../context/ContextProvider";

type ButtonProps = {
  icon?: React.ReactNode; // Assuming icon is a React component
  bgColor: string;
  color: string;
  bgHoverColor: string;
  size: string; // size could be a specific set of strings if you have predefined sizes
  text: string;
  borderRadius: string;
  width: string;

  onClick: () => void;
};

export const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
  onClick,
}: ButtonProps): JSX.Element => {
  const { setIsClicked, userProfile } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => {
        setIsClicked({ userProfile });
        onClick(); // Add this line to trigger the onClick prop
      }}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
