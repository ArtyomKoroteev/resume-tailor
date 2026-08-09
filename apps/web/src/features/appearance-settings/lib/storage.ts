import { DEFAULT_APPEARANCE_SETTINGS, type AppearanceSettings } from '../model';

const STORAGE_KEY = 'appearanceSettings';

/** Shape persisted before the typography/spacing/colors split. */
type LegacyAppearanceSettings = {
  fontFamily?: string;
  fontSize?: number | string;
  lineHeight?: number | string;
  headingColor?: string;
  textColor?: string;
  accentColor?: string;
  pagePadding?: number | string;
  sectionSpacing?: number | string;
  listIndent?: number | string;
};

const toNumber = (value: unknown, fallback: number): number => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const migrateLegacySettings = (legacy: LegacyAppearanceSettings): AppearanceSettings => {
  const defaults = DEFAULT_APPEARANCE_SETTINGS;
  const bodyFont = legacy.fontFamily || defaults.typography.bodyFont;

  return {
    typography: {
      headingFont: bodyFont,
      bodyFont,
      scale: {
        ...defaults.typography.scale,
        body: {
          ...defaults.typography.scale.body,
          size: toNumber(legacy.fontSize, defaults.typography.scale.body.size),
          lineHeight: toNumber(legacy.lineHeight, defaults.typography.scale.body.lineHeight),
        },
      },
    },
    spacing: {
      ...defaults.spacing,
      pagePadding: toNumber(legacy.pagePadding, defaults.spacing.pagePadding),
      sectionSpacing: toNumber(legacy.sectionSpacing, defaults.spacing.sectionSpacing),
      listIndent: toNumber(legacy.listIndent, defaults.spacing.listIndent),
    },
    colors: {
      text: legacy.textColor || defaults.colors.text,
      heading: legacy.headingColor || defaults.colors.heading,
      accent: legacy.accentColor || defaults.colors.accent,
    },
  };
};

/** Merges stored values over defaults so newly added fields stay populated. */
const mergeWithDefaults = (stored: Partial<AppearanceSettings>): AppearanceSettings => {
  const defaults = DEFAULT_APPEARANCE_SETTINGS;

  return {
    typography: {
      ...defaults.typography,
      ...stored.typography,
      scale: { ...defaults.typography.scale, ...stored.typography?.scale },
    },
    spacing: { ...defaults.spacing, ...stored.spacing },
    colors: { ...defaults.colors, ...stored.colors },
  };
};

export const loadAppearanceSettings = (): AppearanceSettings => {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return DEFAULT_APPEARANCE_SETTINGS;

  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') {
      return DEFAULT_APPEARANCE_SETTINGS;
    }
    if ('fontSize' in parsed || 'textColor' in parsed) {
      return migrateLegacySettings(parsed as LegacyAppearanceSettings);
    }
    return mergeWithDefaults(parsed as Partial<AppearanceSettings>);
  } catch {
    return DEFAULT_APPEARANCE_SETTINGS;
  }
};

export const saveAppearanceSettings = (settings: AppearanceSettings): void => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
};
