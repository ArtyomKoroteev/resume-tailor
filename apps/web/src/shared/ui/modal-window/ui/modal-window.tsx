import React, { useState } from "react";
import "@mdxeditor/editor/style.css";
import { FileCode, X, Maximize2, Minimize2 } from "lucide-react";

export const ModalWindow: React.FC<{
  isOpen: boolean;
  title: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
  onClose: () => void;
}> = ({ title, content, footer, onClose }) => {
  const [isExpanded, toggleExpanded] = useState(false);
  const toggleExpandMode = () => {
    toggleExpanded(!isExpanded);
  };
  return (
    <>
      <div className="fixed inset-0 bg-black/70 flex justify-center items-center min-h-screen min-w-screen">
        <div
          className={`bg-white rounded-md  pl-4 pr-4 pt-4 pb-0 ${isExpanded ? "w-full h-full" : "w-4xl min-h-6/12 flex flex-col"}`}
        >
          <div className="modal-header flex justify-between items-center">
            <span className="text-m font-bold flex items-center gap-2">
              <FileCode className="w-4 h-4" /> {title}
            </span>
            <div className="btn-group flex items-center gap-2">
              <button onClick={toggleExpandMode}>
                {isExpanded ? (
                  <Minimize2 className="w-3 h-3" />
                ) : (
                  <Maximize2 className="w-3 h-3" />
                )}
              </button>
              <button onClick={onClose}>
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="modal-content flex-1">{content}</div>
          <div className="modal-footer flex justify-end items-center gap-2 p-2">
            {footer}
          </div>
        </div>
      </div>
    </>
  );
};
