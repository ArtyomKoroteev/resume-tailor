import { useCallback, useState } from 'react';
import {
  DEFAULT_APPEARANCE_SETTINGS,
  type AppearanceSettings,
  type Colors,
  type Spacing,
  type TypeScaleKey,
  type TypeStyle,
  type Typography,
} from '.';
import { loadAppearanceSettings, saveAppearanceSettings } from '../lib/storage';

export type AppearanceSettingsController = {
  settings: AppearanceSettings;
  updateTypography: (
    patch: Partial<Pick<Typography, 'headingFont' | 'bodyFont'>>,
  ) => void;
  updateTypeStyle: (key: TypeScaleKey, patch: Partial<TypeStyle>) => void;
  updateSpacing: (patch: Partial<Spacing>) => void;
  updateColors: (patch: Partial<Colors>) => void;
  resetSettings: () => void;
};

export const useAppearanceSettings = (): AppearanceSettingsController => {
  const [settings, setSettings] = useState<AppearanceSettings>(
    loadAppearanceSettings,
  );

  const applySettings = useCallback(
    (next: (current: AppearanceSettings) => AppearanceSettings) => {
      setSettings((current) => {
        const updated = next(current);
        saveAppearanceSettings(updated);
        return updated;
      });
    },
    [],
  );

  const updateTypography = useCallback(
    (patch: Partial<Pick<Typography, 'headingFont' | 'bodyFont'>>) => {
      applySettings((current) => ({
        ...current,
        typography: { ...current.typography, ...patch },
      }));
    },
    [applySettings],
  );

  const updateTypeStyle = useCallback(
    (key: TypeScaleKey, patch: Partial<TypeStyle>) => {
      applySettings((current) => ({
        ...current,
        typography: {
          ...current.typography,
          scale: {
            ...current.typography.scale,
            [key]: { ...current.typography.scale[key], ...patch },
          },
        },
      }));
    },
    [applySettings],
  );

  const updateSpacing = useCallback(
    (patch: Partial<Spacing>) => {
      applySettings((current) => ({
        ...current,
        spacing: { ...current.spacing, ...patch },
      }));
    },
    [applySettings],
  );

  const updateColors = useCallback(
    (patch: Partial<Colors>) => {
      applySettings((current) => ({
        ...current,
        colors: { ...current.colors, ...patch },
      }));
    },
    [applySettings],
  );

  const resetSettings = useCallback(() => {
    applySettings(() => DEFAULT_APPEARANCE_SETTINGS);
  }, [applySettings]);

  return {
    settings,
    updateTypography,
    updateTypeStyle,
    updateSpacing,
    updateColors,
    resetSettings,
  };
};
