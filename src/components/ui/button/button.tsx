import React from "react";
import { Link } from "react-router-dom";

export type ButtonProps = {
  content: string;
  icon?: string;
  type: "button" | "submit";
  form?: string;
  onClick: () => void;
};
export const Button = ({ content, icon, type, form, onClick }: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        form={form}
        type={type}
        className="btn btn-dark rounded-5"
      >
        {icon && <i className={icon}></i>}
        {content}
      </button>
    </>
  );
};
