import React from 'react';
import { Link } from 'react-router';
import { FileText } from 'lucide-react';

export interface Resume {
  id: string;
  title: string;
  excerpt?: string;
  updatedAt?: string;
}

export const ResumeCard: React.FC<{ resume: Resume }> = ({ resume }) => {
  return (
    <Link
      to="/editor"
      className="group flex flex-col gap-3 rounded-md border border-border bg-background p-4 transition-colors hover:border-primary"
    >
      <div className="flex items-center gap-2">
        <FileText className="w-4 h-4 text-primary shrink-0" />
        <h2 className="font-semibold truncate group-hover:text-primary">
          {resume.title}
        </h2>
      </div>

      {resume.excerpt && (
        <p className="text-sm text-muted line-clamp-3">{resume.excerpt}</p>
      )}

      {resume.updatedAt && (
        <span className="text-xs text-muted mt-auto">
          Updated {resume.updatedAt}
        </span>
      )}
    </Link>
  );
};
