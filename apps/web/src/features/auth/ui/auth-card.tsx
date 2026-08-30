import React from 'react';

interface AuthCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}

export const AuthCard: React.FC<AuthCardProps> = ({
  title,
  subtitle,
  children,
  footer,
}) => {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6 rounded-lg border border-border bg-background p-8">
          <div className="flex flex-col gap-1 text-center">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm text-muted">{subtitle}</p>
          </div>

          {children}
        </div>

        <p className="mt-6 text-center text-sm text-muted">{footer}</p>
      </div>
    </div>
  );
};
