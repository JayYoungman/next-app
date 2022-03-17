import React, { ReactNode } from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <button className={styles.button}>{children}</button>;
};
