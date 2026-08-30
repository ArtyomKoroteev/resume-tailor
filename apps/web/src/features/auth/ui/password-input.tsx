import React, { useState } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';
import { Input } from '../../../shared/ui/input';

type PasswordInputProps = Omit<React.ComponentProps<typeof Input>, 'type' | 'icon' | 'trailing'>;

export const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <Input
      type={isVisible ? 'text' : 'password'}
      icon={<Lock className="w-4 h-4" />}
      trailing={
        <button
          type="button"
          aria-label={isVisible ? 'Hide password' : 'Show password'}
          className="p-1 text-muted hover:text-foreground"
          onClick={() => setVisible((visible) => !visible)}
        >
          {isVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      }
      {...props}
    />
  );
};
