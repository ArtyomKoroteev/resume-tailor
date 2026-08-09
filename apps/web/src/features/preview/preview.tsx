import { useResumeStore } from '../../stores';
import showdown from 'showdown';
import { toCssVariables, type AppearanceSettings } from '../appearance-settings';

interface PreviewProps {
  appearanceSettings: AppearanceSettings;
}
export const Preview: React.FC<PreviewProps> = ({ appearanceSettings }) => {
  const markdown = useResumeStore((state) => state.markdown);
  const converter = new showdown.Converter();
  const html = converter.makeHtml(markdown);

  return (
    <div>
      <div
        className="w-[768px] min-h-[1024px] bg-white m-auto wysiwyg-content"
        dangerouslySetInnerHTML={{ __html: html }}
        style={toCssVariables(appearanceSettings)}
      />
    </div>
  );
};
