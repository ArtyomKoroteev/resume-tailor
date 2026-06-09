import React from "react";

interface ButtonProps {
  text?: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, icon, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white text-sm px-3 py-1 rounded-sm hover:bg-blue-600"
      onClick={onClick}
    >
      {icon} {text}
    </button>
  );
};
