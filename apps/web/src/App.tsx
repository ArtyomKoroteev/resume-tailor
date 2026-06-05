import { Button } from "./shared/ui/button";
import { ModalWindow } from "./shared/ui/modal-window";
import { useState } from "react";
import { createPortal } from "react-dom";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {isModalOpen &&
        createPortal(
          <ModalWindow
            isOpen={isModalOpen}
            title="Markdown Editor"
            onClose={() => setIsModalOpen(false)}
          />,
          document.body,
        )}
      <div className="flex flex-col items-center justify-center align-middle">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the Resume Builder
        </h1>
        <p className="text-l text-gray-500 text-center max-w-lg mb-8">
          Paste your markdown here and get a preview of your resume. Set your
          preferences and export your resume in PDF, HTML, or Markdown.
        </p>
        <Button text="Click me" onClick={() => setIsModalOpen(true)} />
      </div>
    </>
  );
}

export default App;
