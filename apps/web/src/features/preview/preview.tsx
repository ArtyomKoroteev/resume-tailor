import { useResumeStore } from "../../stores";
import showdown from "showdown";
import { type AppearanceSettings } from "../appearance-settings";

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
        style={
          {
            "--font-size": `${appearanceSettings.fontSize}px`,
            "--line-height": appearanceSettings.lineHeight,
            "--text-color": appearanceSettings.textColor,
            "--heading-color": appearanceSettings.headingColor,
            "--page-padding": `${appearanceSettings.pagePadding}px`,
          } as React.CSSProperties
        }
      />
    </div>
  );
};
