import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Button } from '../../../shared/ui/button';
import { Input } from '../../../shared/ui/input';
import { TextLink } from '../../../shared/ui/text-link';
import { AuthCard } from './auth-card';
import { PasswordInput } from './password-input';
import { validateEmail, validatePassword, type AuthErrors } from '../model';

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<AuthErrors>({});
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: AuthErrors = {
      email: validateEmail(email),
      password: validatePassword(password),
    };

    setErrors(nextErrors);
    if (nextErrors.email || nextErrors.password) return;

    // TODO: replace with the auth API call once the server exposes /auth/login.
    setSubmitting(true);
    navigate('/resume-list');
  };

  return (
    <AuthCard
      title="Welcome back"
      subtitle="Log in to continue building your resume."
      footer={
        <>
          Don&apos;t have an account? <TextLink to="/signup">Sign up</TextLink>
        </>
      }
    >
      <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
        <Input
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          icon={<Mail className="w-4 h-4" />}
          value={email}
          error={errors.email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <PasswordInput
          label="Password"
          name="password"
          autoComplete="current-password"
          placeholder="••••••••"
          value={password}
          error={errors.password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-muted">
            <input type="checkbox" name="remember" className="accent-primary" />
            Remember me
          </label>
          <TextLink to="/forgot-password">Forgot password?</TextLink>
        </div>

        <Button
          type="submit"
          size="md"
          fullWidth
          disabled={isSubmitting}
          text={isSubmitting ? 'Logging in…' : 'Log in'}
        />
      </form>
    </AuthCard>
  );
};
