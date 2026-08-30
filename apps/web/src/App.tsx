import { Link } from 'react-router';
import {
  FileText,
  Palette,
  Download,
  Sparkles,
  ShieldCheck,
  MonitorSmartphone,
} from 'lucide-react';
import { Header } from './shared/ui/header';
import { Footer } from './shared/ui/footer';
import { TextLink } from './shared/ui/text-link';

const features = [
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'Write in Markdown',
    description:
      'Draft your resume in plain markdown — or paste what an AI tool wrote for you — and watch the styled preview update as you type.',
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: 'Customize Appearance',
    description:
      'Tune typography, spacing and colors from a live panel. Every change applies instantly, no theme files to edit.',
  },
  {
    icon: <Download className="w-5 h-5" />,
    title: 'Export Anywhere',
    description:
      'Save a print-ready PDF straight from your browser, or take the HTML and markdown with you.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'ATS-friendly by default',
    description:
      'Clean, semantic markup with no tables or graphics — the kind of structure applicant tracking systems can actually read.',
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: 'One source, many versions',
    description:
      'Keep a resume per role. Tailor the wording for each application without rebuilding the layout every time.',
  },
  {
    icon: <MonitorSmartphone className="w-5 h-5" />,
    title: 'Runs in your browser',
    description:
      'No installs and no plugins. Open a tab, edit your resume, and export when it looks right.',
  },
];

const steps = [
  {
    title: 'Paste your markdown',
    description:
      'Start from your existing resume, a template, or output from your favorite AI tool.',
  },
  {
    title: 'Make it yours',
    description: 'Adjust fonts, spacing and colors until the preview matches the tone you want.',
  },
  {
    title: 'Export and apply',
    description: 'Download a polished PDF and send it off — the markdown stays yours to reuse.',
  },
];

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header
        title="Resume Builder"
        rightContent={
          <nav className="flex items-center gap-4 text-sm">
            <TextLink to="/login">Log in</TextLink>
            <Link
              to="/signup"
              className="bg-blue-500 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Sign up
            </Link>
          </nav>
        }
      />

      <main className="flex-1">
        <section className="flex flex-col items-center px-6 py-20 text-center">
          <span className="mb-4 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
            Markdown in, polished resume out
          </span>
          <h1 className="text-5xl font-bold mb-4 max-w-2xl">Build your resume in minutes</h1>
          <p className="text-lg text-muted max-w-xl mb-8">
            Write in markdown, customize the look, and export a clean, ATS-friendly resume as PDF,
            HTML, or markdown — all in your browser.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/editor"
              className="bg-blue-500 text-white text-base font-medium px-6 py-2.5 rounded-md hover:bg-blue-600 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/resume-list"
              className="border border-border text-base font-medium px-6 py-2.5 rounded-md hover:bg-gray-50 transition-colors"
            >
              See your resumes
            </Link>
          </div>

          <p className="mt-4 text-xs text-muted">No signup required to try the editor.</p>
        </section>

        <section className="border-t border-border bg-gray-50 px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-2xl font-bold mb-2">
              Everything you need, nothing else
            </h2>
            <p className="text-center text-muted mb-10">
              A focused editor built around one job: getting your resume out the door.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col gap-2 rounded-md border border-border bg-background p-5"
                >
                  <div className="text-primary">{feature.icon}</div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-2xl font-bold mb-10">How it works</h2>

            <ol className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <li key={step.title} className="flex flex-col items-center gap-2 text-center">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 font-semibold text-white">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-border px-6 py-16">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold">Ready to write yours?</h2>
            <p className="text-muted">
              Open the editor and start from the sample resume — you can always create an account
              later to save your work.
            </p>
            <Link
              to="/editor"
              className="bg-blue-500 text-white text-base font-medium px-6 py-2.5 rounded-md hover:bg-blue-600 transition-colors"
            >
              Open the editor
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
