import React from 'react';

interface ButtonProps {
  text?: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, icon, onClick }) => {
  return (
    <button className="bg-blue-500 text-white p-2 rounded-md" onClick={onClick}>
      {icon} {text}
    </button>
  );
};
