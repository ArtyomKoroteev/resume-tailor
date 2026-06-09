import { Link } from "react-router";
import { FileText, Palette, Download } from "lucide-react";
import { Header } from "./shared/ui/header";

const features = [
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Write in Markdown",
    description: "Draft your resume in plain markdown and see a live preview.",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Customize Appearance",
    description: "Tune fonts, colors, spacing, and layout to match your style.",
  },
  {
    icon: <Download className="w-5 h-5" />,
    title: "Export Anywhere",
    description: "Download your resume as PDF, HTML, or Markdown.",
  },
];

function App() {
  return (
    <>
      <Header title="Preview" />
      <main>
        <div className="flex flex-col items-center justify-center w-full px-6 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Build your resume in minutes
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mb-8">
            Paste your markdown, customize the look, and export a polished
            resume in PDF, HTML, or Markdown — all in your browser.
          </p>

          <Link
            to="/editor"
            className="bg-blue-500 text-white text-base px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Get Started
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-3xl">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center gap-2"
              >
                <div className="text-blue-500">{feature.icon}</div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
