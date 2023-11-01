import { ButtonProps } from "@/types";
import React from "react";

export default function Button({
  title,
  containerStyles,
  handleClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
