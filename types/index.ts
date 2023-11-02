import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export interface ButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    disabled?:boolean;
    type?: "button" | "submit"
}