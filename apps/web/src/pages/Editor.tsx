import { Preview } from '../features/preview/preview';
import { FilePenLine, FileCode } from 'lucide-react';
import { useState } from 'react';
import { ModalWindow } from '../shared/ui/modal-window';
import { createPortal } from 'react-dom';
import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  diffSourcePlugin,
} from '@mdxeditor/editor';
import { useResumeStore } from '../stores';
import { Button } from '../shared/ui/button';
import { ActionPanel } from '../features/action-panel';
import { AppearanceSettingsPanel, useAppearanceSettings } from '../features/appearance-settings';

export default function Editor() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [markdown, setMarkdown] = useState(useResumeStore((state) => state.markdown));
  const appearance = useAppearanceSettings();

  const markdownUpdate = (mdContent: string) => {
    setMarkdown(mdContent);
  };
  return (
    <div className=" wysiwyg flex w-full h-[calc(100vh-49px)]">
      <aside className="w-[50px] shrink-0 border-r border-gray-200 p-4">
        <ActionPanel
          actions={[
            {
              icon: <FilePenLine className="w-4 h-4" />,
              title: 'Open Markdown Editor',
              action: () => setIsModalOpen(true),
            },
          ]}
        />
      </aside>
      <div className="wrapper flex-1 bg-gray-100 p-3 overflow-y-auto max-h-screen">
        <Preview appearanceSettings={appearance.settings} />
      </div>

      <aside className="w-[320px] shrink-0 border-l border-gray-200 overflow-y-auto">
        <AppearanceSettingsPanel {...appearance} />
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
                    viewMode: 'source',
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
