import { useState } from 'react';
import { Link } from 'react-router';
import { Plus } from 'lucide-react';
import { ResumeCard, type Resume } from '../features/resume-list';

export default function ResumeList() {
  const [resumes] = useState<Resume[]>([
    {
      id: '1',
      title: 'Senior Frontend Developer',
      excerpt:
        'React, TypeScript and design systems. 7 years building product UIs.',
      updatedAt: 'Aug 21, 2026',
    },
    {
      id: '2',
      title: 'Senior Fullstack Developer',
      excerpt: 'React on the front, NestJS and Postgres on the back.',
      updatedAt: 'Aug 12, 2026',
    },
  ]);

  return (
    <div className="w-full px-6 py-8">
      <div className="mx-auto max-w-4xl flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Your resumes</h1>
          <Link
            to="/editor"
            className="flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
          >
            <Plus className="w-4 h-4" />
            New resume
          </Link>
        </div>

        {resumes.length === 0 ? (
          <p className="rounded-md border border-dashed border-border p-12 text-center text-sm text-muted">
            No resumes yet. Create your first one to get started.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
