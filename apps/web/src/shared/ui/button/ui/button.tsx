import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md';

interface ButtonProps extends Omit<
  React.ComponentPropsWithoutRef<'button'>,
  'children'
> {
  text?: string;
  icon?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  secondary:
    'border border-border text-foreground bg-background hover:bg-gray-50',
  ghost: 'text-muted hover:text-foreground',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'text-sm px-3 py-1 rounded-sm',
  md: 'text-sm font-medium px-4 py-2 rounded-md',
};

export const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  variant = 'primary',
  size = 'sm',
  fullWidth,
  className,
  ...rest
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
        variants[variant]
      } ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className ?? ''}`}
      {...rest}
    >
      {icon} {text}
    </button>
  );
};
