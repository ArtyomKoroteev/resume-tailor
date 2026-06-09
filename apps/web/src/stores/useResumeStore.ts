import { create } from "zustand";
import { devtools } from "zustand/middleware";
interface ResumeStore {
  markdown: string;
  updateMarkdown: (markdown: ResumeStore["markdown"]) => void;
}
export const useResumeStore = create<ResumeStore>()(
  devtools((set) => ({
    markdown: `# John Doe
test description
* test 1
* test 2
* test 3`,
    updateMarkdown: (markdown) => set({ markdown: markdown }),
  })),
);
