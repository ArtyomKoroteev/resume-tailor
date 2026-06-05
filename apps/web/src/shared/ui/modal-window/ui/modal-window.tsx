import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  diffSourcePlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { FileCode, X, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "../../button";
import { useResumeStore } from "../../../../stores";

export const ModalWindow: React.FC<{
  isOpen: boolean;
  title: string;
  onClose: () => void;
}> = ({ title, onClose }) => {
  const navigate = useNavigate();
  const [isExpanded, toggleExpanded] = useState(false);
  const [markdown, updateMarkdown] = useState("");
  const toggleExpandMode = () => {
    toggleExpanded(!isExpanded);
  };
  const setMarkdown = useResumeStore((state) => state.updateMarkdown);
  const markdownUpdate = (mdContent: string) => {
    updateMarkdown(mdContent);
  };
  return (
    <>
      <div className="fixed inset-0 bg-black/70 flex justify-center items-center min-h-screen min-w-screen">
        <div
          className={`bg-white rounded-md  pl-4 pr-4 pt-4 pb-0 ${isExpanded ? "w-full h-full" : "w-4xl max-h-11/12"}`}
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
          <div className="modal-content ">
            <MDXEditor
              markdown={markdown}
              className="overflow-y-auto max-h-128"
              plugins={[
                diffSourcePlugin({
                  viewMode: "source",
                }),
                headingsPlugin(),
                listsPlugin(),
                quotePlugin(),
                thematicBreakPlugin(),
              ]}
              onChange={(e) => markdownUpdate(e)}
            />
          </div>
          <div className="modal-footer flex justify-end items-center gap-2 p-2">
            <Button
              text="Save"
              onClick={() => {
                setMarkdown(markdown);
                onClose();
                navigate("/editor");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
