import React, { ReactNode } from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export const Button = ({ className, children }: ButtonProps) => (
  <button className={`${styles.button} ${className}`}>{children}</button>
);
