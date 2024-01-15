import React from "react";

type ButtonProps = {
  text: string;
  disabled: boolean;
  type?: "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export const Button = ({ text, disabled, type, onClick }: ButtonProps) => {
  const buttonStyles =
    "rounded p-2.5 px-5 bg-secondary w-auto  cursor-pointer transition text-white" +
    " hover:bg-secondaryDrk hover:shadow-md active:translate-y-px" +
    " disabled:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <button className={buttonStyles} disabled={disabled} type={type} onClick={onClick}>
      {text}
    </button>
  );
};
