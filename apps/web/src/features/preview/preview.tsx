import { useResumeStore } from '../../stores';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { toCssVariables, type AppearanceSettings } from '../appearance-settings';

interface PreviewProps {
  appearanceSettings: AppearanceSettings;
}
export const Preview: React.FC<PreviewProps> = ({ appearanceSettings }) => {
  const markdown = useResumeStore((state) => state.markdown);

  return (
    <div>
      <div
        className="w-[768px] min-h-[1024px] bg-white m-auto wysiwyg-content"
        style={toCssVariables(appearanceSettings)}
      >
        <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
      </div>
    </div>
  );
};
