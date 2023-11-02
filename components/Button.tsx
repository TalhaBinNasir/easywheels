import { ButtonProps } from "@/types";
import React from "react";

export default function Button({
  title,
  containerStyles,
  handleClick,
  disabled,
  type,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type={type || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
