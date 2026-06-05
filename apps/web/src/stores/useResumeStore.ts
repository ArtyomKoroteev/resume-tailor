import { create } from "zustand";
import { devtools } from "zustand/middleware";
interface ResumeStore {
    markdown: string;
    updateMarkdown: (markdown: ResumeStore['markdown']) => void;
}
export const useResumeStore = create<ResumeStore>()(devtools((set) => ({
    markdown: '',
    updateMarkdown: (markdown) => set({ markdown: markdown})
})));