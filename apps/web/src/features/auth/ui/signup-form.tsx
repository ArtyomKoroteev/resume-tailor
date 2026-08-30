import React, { useState } from 'react';
import { Mail, User } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Button } from '../../../shared/ui/button';
import { Input } from '../../../shared/ui/input';
import { TextLink } from '../../../shared/ui/text-link';
import { AuthCard } from './auth-card';
import { PasswordInput } from './password-input';
import {
  validateConfirmPassword,
  validateEmail,
  validateName,
  validatePassword,
  type AuthErrors,
} from '../model';

export const SignupForm: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<AuthErrors>({});
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: AuthErrors = {
      name: validateName(name),
      email: validateEmail(email),
      password: validatePassword(password),
      confirmPassword: validateConfirmPassword(password, confirmPassword),
    };

    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    // TODO: replace with the auth API call once the server exposes /auth/signup.
    setSubmitting(true);
    navigate('/resume-list');
  };

  return (
    <AuthCard
      title="Create your account"
      subtitle="Start building a polished resume in minutes."
      footer={
        <>
          Already have an account? <TextLink to="/login">Log in</TextLink>
        </>
      }
    >
      <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
        <Input
          label="Name"
          name="name"
          autoComplete="name"
          placeholder="Jane Doe"
          icon={<User className="w-4 h-4" />}
          value={name}
          error={errors.name}
          onChange={(event) => setName(event.target.value)}
        />

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
          autoComplete="new-password"
          placeholder="At least 8 characters"
          value={password}
          error={errors.password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <PasswordInput
          label="Confirm password"
          name="confirmPassword"
          autoComplete="new-password"
          placeholder="Repeat your password"
          value={confirmPassword}
          error={errors.confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />

        <Button
          type="submit"
          size="md"
          fullWidth
          disabled={isSubmitting}
          text={isSubmitting ? 'Creating account…' : 'Create account'}
        />

        <p className="text-xs text-muted text-center">
          By creating an account you agree to our terms of service.
        </p>
      </form>
    </AuthCard>
  );
};
