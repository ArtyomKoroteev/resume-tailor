export type AuthErrors = Partial<
  Record<'name' | 'email' | 'password' | 'confirmPassword', string>
>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

export const validateEmail = (email: string): string | undefined => {
  if (!email.trim()) return 'Email is required.';
  if (!EMAIL_PATTERN.test(email)) return 'Enter a valid email address.';
};

export const validatePassword = (password: string): string | undefined => {
  if (!password) return 'Password is required.';
  if (password.length < MIN_PASSWORD_LENGTH)
    return `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
};

export const validateName = (name: string): string | undefined => {
  if (!name.trim()) return 'Name is required.';
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string,
): string | undefined => {
  if (!confirmPassword) return 'Please confirm your password.';
  if (password !== confirmPassword) return 'Passwords do not match.';
};
