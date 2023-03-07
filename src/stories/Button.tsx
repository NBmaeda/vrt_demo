import React from "react";
import { css, SerializedStyles } from "@emotion/react";

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
  const styleButton = css`
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  `;

  const styleButtonPrimary = css`
    color: white;
    background-color: #fd1ebe;
  `;
  const styleButtonSecondary = css`
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 5px inset;
  `;
  const styleButtonMode = primary ? styleButtonPrimary : styleButtonSecondary;

  const styleButtonSize = new Map<string, SerializedStyles>([
    [
      "small",
      css`
        font-size: 14px;
        padding: 12px 18px;
      `,
    ],
    [
      "medium",
      css`
        font-size: 18px;
        padding: 14px 26px;
      `,
    ],
    [
      "large",
      css`
        font-size: 22px;
        padding: 16px 38px;
      `,
    ],
  ]);

  return (
    <button
      type="button"
      css={[styleButton, styleButtonMode, styleButtonSize.get(size)]}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
