import React from "react";
import { Link } from "react-router";

interface HeaderProps {
  title: string;
  rightContent?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ title, rightContent }) => {
  return (
    <header className="bg-background text-foreground antialiased p-2 flex justify-between items-center border-b border-gray-200">
      <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
        <Link to="/">{title}</Link>
      </h1>
      {rightContent}
    </header>
  );
};
