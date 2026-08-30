import React from 'react';
import { Link, type LinkProps } from 'react-router';

export const TextLink: React.FC<LinkProps> = ({ className, ...rest }) => (
  <Link className={`text-primary font-medium hover:underline ${className ?? ''}`} {...rest} />
);
