export type FontWeight = 400 | 500 | 600 | 700;

export type TypeScaleKey = "h1" | "h2" | "h3" | "body" | "caption";

export type TypeStyle = {
  size: number;
  weight: FontWeight;
  lineHeight: number;
};

export type Typography = {
  headingFont: string;
  bodyFont: string;
  scale: Record<TypeScaleKey, TypeStyle>;
};

export type Spacing = {
  pagePadding: number;
  sectionSpacing: number;
  paragraphSpacing: number;
  listIndent: number;
  listItemSpacing: number;
};

export type Colors = {
  text: string;
  heading: string;
  accent: string;
};

export type AppearanceSettings = {
  typography: Typography;
  spacing: Spacing;
  colors: Colors;
};

export const DEFAULT_APPEARANCE_SETTINGS: AppearanceSettings = {
  typography: {
    headingFont: "Georgia, 'Times New Roman', serif",
    bodyFont: "Inter, system-ui, sans-serif",
    scale: {
      h1: { size: 26, weight: 700, lineHeight: 1.2 },
      h2: { size: 18, weight: 700, lineHeight: 1.3 },
      h3: { size: 15, weight: 600, lineHeight: 1.4 },
      body: { size: 13, weight: 400, lineHeight: 1.5 },
      caption: { size: 12, weight: 400, lineHeight: 1.4 },
    },
  },
  spacing: {
    pagePadding: 40,
    sectionSpacing: 20,
    paragraphSpacing: 8,
    listIndent: 18,
    listItemSpacing: 4,
  },
  colors: {
    text: "#111827",
    heading: "#111827",
    accent: "#2563eb",
  },
};

export const TYPE_SCALE_ROWS: Array<{
  key: TypeScaleKey;
  label: string;
  sample: string;
  isHeading: boolean;
}> = [
  { key: "h1", label: "Name", sample: "Display", isHeading: true },
  { key: "h2", label: "Section title", sample: "Heading 1", isHeading: true },
  { key: "h3", label: "Job title", sample: "Heading 2", isHeading: true },
  {
    key: "body",
    label: "Body text",
    sample: "Body — the quick brown fox.",
    isHeading: false,
  },
  {
    key: "caption",
    label: "Caption",
    sample: "Caption / label text",
    isHeading: false,
  },
];

export const SPACING_ROWS: Array<{
  key: keyof Spacing;
  label: string;
  token: string;
  min: number;
  max: number;
}> = [
  { key: "pagePadding", label: "Page padding", token: "page", min: 0, max: 80 },
  {
    key: "sectionSpacing",
    label: "Section spacing",
    token: "section",
    min: 0,
    max: 48,
  },
  {
    key: "paragraphSpacing",
    label: "Paragraph spacing",
    token: "para",
    min: 0,
    max: 32,
  },
  { key: "listIndent", label: "List indent", token: "indent", min: 0, max: 48 },
  {
    key: "listItemSpacing",
    label: "List item spacing",
    token: "item",
    min: 0,
    max: 24,
  },
];

export const FONT_WEIGHT_OPTIONS: Array<{ value: FontWeight; label: string }> = [
  { value: 400, label: "Regular" },
  { value: 500, label: "Medium" },
  { value: 600, label: "Semibold" },
  { value: 700, label: "Bold" },
];

/**
 * Web-safe stacks only — the app does not load any webfonts, so anything
 * outside these families would silently fall back to a system font.
 */
export const FONT_OPTIONS: Array<{ value: string; label: string }> = [
  { value: "Inter, system-ui, sans-serif", label: "Inter" },
  { value: "Georgia, 'Times New Roman', serif", label: "Georgia" },
  { value: "'Times New Roman', Times, serif", label: "Times New Roman" },
  { value: "Arial, Helvetica, sans-serif", label: "Arial" },
  { value: "Verdana, Geneva, sans-serif", label: "Verdana" },
  { value: "'Courier New', Courier, monospace", label: "Courier New" },
];

export const TYPE_SIZE_LIMITS = { min: 8, max: 48 } as const;
export const LINE_HEIGHT_LIMITS = { min: 1, max: 2.5, step: 0.1 } as const;
