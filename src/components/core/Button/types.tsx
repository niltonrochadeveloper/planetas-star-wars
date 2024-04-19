import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<any> {
  loading?: boolean;
  setValue?: (e: string) => void;
}
