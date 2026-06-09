import { Preview } from "../features/preview/preview";
import {
  FilePenLine,
  Type,
  Ruler,
  PanelTopBottomDashed,
  Paintbrush,
  Heading,
  FileCode,
} from "lucide-react";
import { useState } from "react";
import { ModalWindow } from "../shared/ui/modal-window";
import { createPortal } from "react-dom";
import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  diffSourcePlugin,
} from "@mdxeditor/editor";
import { useResumeStore } from "../stores";
import { Button } from "../shared/ui/button";
import { ActionPanel } from "../features/action-panel";
import { type AppearanceSettings } from "../features/appearance-settings";

export default function Editor() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [markdown, setMarkdown] = useState(
    useResumeStore((state) => state.markdown),
  );
  const [appearanceSettings, setAppearanceSettings] =
    useState<AppearanceSettings>(
      JSON.parse(
        window.localStorage.getItem("appearanceSettings") ||
          JSON.stringify({
            fontFamily: "Inter",
            fontSize: 16,
            lineHeight: 1.5,
            headingColor: "#2563eb",
            textColor: "#111827",
            accentColor: "#2563eb",
            pagePadding: 24,
            sectionSpacing: 24,
          }),
      ),
    );

  const updateSettings = (
    currentKey: keyof AppearanceSettings,
    value: string | number,
  ) => {
    const updatedSettings = {
      ...appearanceSettings,
      [currentKey]: value,
    };

    setAppearanceSettings(updatedSettings);
    window.localStorage.setItem(
      "appearanceSettings",
      JSON.stringify(updatedSettings),
    );
  };
  const markdownUpdate = (mdContent: string) => {
    setMarkdown(mdContent);
  };
  return (
    <div className=" wysiwyg flex w-full h-[calc(100vh-49px)]">
      <aside className="w-[50px] border-r border-gray-200 p-4">
        <ActionPanel
          actions={[
            {
              icon: <FilePenLine className="w-4 h-4" />,
              title: "Open Markdown Editor",
              action: () => setIsModalOpen(true),
            },
          ]}
        />
      </aside>
      <div className="wrapper w-10/12 bg-gray-100 p-3 overflow-y-auto max-h-screen">
        <Preview appearanceSettings={appearanceSettings} />
      </div>

      <aside className="w-2/12 border-l border-gray-200 pl-3 pr-3">
        <div className="appearance-settings border-b border-gray-200 pb-3 pt-3 mb-4">
          <h3 className="font-bold text-sm">Appearance</h3>
        </div>

        <div className="input-wrapper flex flex-col gap-1 mb-3">
          <div className="label-container flex justify-between items-center text-sm">
            <label htmlFor="fontSize" className="flex items-center gap-1">
              <Type className="w-4 h-4" /> Font Size
            </label>
            <span className="text-xs border border-gray-200 rounded-md px-1 py-1">
              {appearanceSettings.fontSize}px
            </span>
          </div>
          <input
            type="range"
            min={10}
            max={20}
            value={appearanceSettings.fontSize}
            name="fontSize"
            id="fontSize"
            onChange={(e) => updateSettings("fontSize", e.target.value)}
          />
        </div>

        <div className="input-wrapper flex flex-col gap-1 mb-3">
          <div className="label-container flex justify-between items-center text-sm">
            <label htmlFor="lineHeight" className="flex items-center gap-1">
              <Ruler className="w-4 h-4" /> Line height
            </label>
            <span className="text-xs border border-gray-200 rounded-md px-1 py-1">
              {appearanceSettings.lineHeight}
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={2}
            step={0.1}
            value={appearanceSettings.lineHeight}
            name="lineHeight"
            id="lineHeight"
            onChange={(e) => updateSettings("lineHeight", e.target.value)}
          />
        </div>

        <div className="input-wrapper flex flex-col gap-1 mb-3">
          <div className="label-container flex justify-between items-center text-sm">
            <label htmlFor="pagePadding" className="flex items-center gap-1">
              <PanelTopBottomDashed className="w-4 h-4" /> Page padding
            </label>
            <span className="text-xs border border-gray-200 rounded-md px-1 py-1">
              {appearanceSettings.pagePadding}px
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={20}
            value={appearanceSettings.pagePadding}
            name="pagePadding"
            id="pagePadding"
            onChange={(e) => updateSettings("pagePadding", e.target.value)}
          />
        </div>

        <div className="input-wrapper flex justify-between items-center mb-3">
          <div className="label-container flex justify-between items-center text-sm">
            <label htmlFor="textColor" className="flex items-center gap-1">
              <Paintbrush className="w-4 h-4" /> Text color
            </label>
          </div>

          <div className="input-color-wrapper flex items-center gap-1 border border-gray-200 rounded-md px-1 py-0.5">
            <input
              type="color"
              value={appearanceSettings.textColor}
              name="textColor"
              id="textColor"
              onChange={(e) => updateSettings("textColor", e.target.value)}
            />
            <span className="text-xs">{appearanceSettings.textColor}</span>
          </div>
        </div>

        <div className="input-wrapper flex justify-between items-center mb-3">
          <div className="label-container flex justify-between items-center text-sm">
            <label htmlFor="headingColor" className="flex items-center gap-1">
              <Heading className="w-4 h-4" /> Heading color
            </label>
          </div>

          <div className="input-color-wrapper flex items-center gap-1 border border-gray-200 rounded-md px-1 py-0.5">
            <input
              type="color"
              value={appearanceSettings.headingColor}
              name="headingColor"
              id="headingColor"
              onChange={(e) => updateSettings("headingColor", e.target.value)}
            />
            <span className="text-xs">{appearanceSettings.headingColor}</span>
          </div>
        </div>
      </aside>
      {isModalOpen &&
        createPortal(
          <ModalWindow
            isOpen={isModalOpen}
            title="Markdown Editor"
            icon={<FileCode className="w-4 h-4" />}
            onClose={() => setIsModalOpen(false)}
            content={
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
            }
            footer={
              <Button
                text="Save"
                onClick={() => {
                  useResumeStore.getState().updateMarkdown(markdown);
                  setIsModalOpen(false);
                }}
              />
            }
          />,
          document.body,
        )}
    </div>
  );
}
