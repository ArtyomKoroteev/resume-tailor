import { create } from "zustand";
import { devtools } from "zustand/middleware";
interface ResumeStore {
  markdown: string;
  updateMarkdown: (markdown: ResumeStore["markdown"]) => void;
}
export const useResumeStore = create<ResumeStore>()(
  devtools((set) => ({
    markdown: `# John Doe
    ## Experience
    ## Company 1
    - Job Title 1
    - Job Title 2
    - Job Title 3
    ## Education
    ## University 1
    - Degree 1
    - Degree 2`,
    updateMarkdown: (markdown) => set({ markdown: markdown }),
  })),
);
