import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "primary" : "secondary";
  return (
    <button
      type="button"
      className={`${styles["storybook-button"]} 
      ${styles[`storybook-button--${mode}`]} 
      ${styles[`storybook-button--${size}`]}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
