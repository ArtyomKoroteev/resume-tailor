import React from 'react';
import { Link } from 'react-router';
import { FileText, ExternalLink } from 'lucide-react';

const REPO_URL = 'https://github.com/ArtyomKoroteev/resume-tailor';

const columns: Array<{ heading: string; links: Array<{ label: string; to: string }> }> = [
  {
    heading: 'Product',
    links: [
      { label: 'Editor', to: '/editor' },
      { label: 'Your resumes', to: '/resume-list' },
    ],
  },
  {
    heading: 'Account',
    links: [
      { label: 'Log in', to: '/login' },
      { label: 'Sign up', to: '/signup' },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-background text-foreground antialiased">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2 lg:col-span-2">
          <Link to="/" className="flex items-center gap-2 font-bold text-primary">
            <FileText className="w-4 h-4" />
            Resume Builder
          </Link>
          <p className="max-w-xs text-sm text-muted">
            Markdown in, polished resume out. Write, style and export an ATS-friendly resume without
            leaving your browser.
          </p>
        </div>

        {columns.map((column) => (
          <nav key={column.heading} className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold">{column.heading}</h2>
            {column.links.map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-muted hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </nav>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 px-6 py-4 text-sm text-muted sm:flex-row">
          <p>&copy; 2026 Resume Builder</p>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="View the source on GitHub"
            className="flex items-center gap-2 hover:text-foreground"
          >
            <ExternalLink className="w-4 h-4" />
            Source
          </a>
        </div>
      </div>
    </footer>
  );
};
