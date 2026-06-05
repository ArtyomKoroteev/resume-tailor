import { useResumeStore } from "../stores";
import showdown from "showdown";

export default function Editor() {
  const markdown = useResumeStore((state) => state.markdown);
  const converter = new showdown.Converter();
  const html = converter.makeHtml(markdown);
  return (
    <div className="w-full h-full wysiwyg p-2">
      <div
        className="wysiwyg-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
