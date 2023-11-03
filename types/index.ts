import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export interface ButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    disabled?:boolean;
    type?: "button" | "submit"
    rightIcon?: string;
    textStyles?: string;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  }

  export interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
  }

  export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
  }

  export interface SearchProps {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
  }