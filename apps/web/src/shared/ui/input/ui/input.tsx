import React, { useId } from 'react';

interface InputProps extends Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'id'
> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
  trailing?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  trailing,
  className,
  ...rest
}) => {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>

      <div className="relative flex items-center">
        {icon && (
          <span className="absolute left-3 text-muted pointer-events-none flex items-center">
            {icon}
          </span>
        )}

        <input
          id={id}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`w-full rounded-md border bg-background text-foreground text-sm py-2 transition-colors placeholder:text-muted hover:border-muted/60 ${
            icon ? 'pl-9' : 'pl-3'
          } ${trailing ? 'pr-10' : 'pr-3'} ${
            error ? 'border-red-500' : 'border-border'
          } ${className ?? ''}`}
          {...rest}
        />

        {trailing && (
          <span className="absolute right-2 flex items-center">{trailing}</span>
        )}
      </div>

      {error && (
        <p id={errorId} className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};
