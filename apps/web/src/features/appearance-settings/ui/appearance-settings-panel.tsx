import { RotateCcw } from 'lucide-react';
import { useState } from 'react';
import { Tabs } from '../../../shared/ui/tabs';
import type { AppearanceSettingsController } from '../model/use-appearance-settings';
import { ColorsTab } from './colors-tab';
import { SpacingTab } from './spacing-tab';
import { TypographyTab } from './typography-tab';

type TabId = 'typography' | 'spacing' | 'colors';

const TABS: Array<{ id: TabId; label: string }> = [
  { id: 'typography', label: 'Typography' },
  { id: 'spacing', label: 'Spacing' },
  { id: 'colors', label: 'Colors' },
];

export const AppearanceSettingsPanel: React.FC<AppearanceSettingsController> = ({
  settings,
  updateTypography,
  updateTypeStyle,
  updateSpacing,
  updateColors,
  resetSettings,
}) => {
  const [activeTab, setActiveTab] = useState<TabId>('typography');

  return (
    <div className="flex flex-col gap-3 p-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-bold text-sm">Appearance</h3>
          <p className="text-xs text-muted">Type, spacing and colors — applied instantly.</p>
        </div>
        <button
          type="button"
          title="Reset to defaults"
          className="text-muted hover:text-foreground"
          onClick={resetSettings}
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      <Tabs tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'typography' && (
        <TypographyTab
          typography={settings.typography}
          onFontChange={updateTypography}
          onTypeStyleChange={updateTypeStyle}
        />
      )}
      {activeTab === 'spacing' && (
        <SpacingTab spacing={settings.spacing} onChange={updateSpacing} />
      )}
      {activeTab === 'colors' && <ColorsTab colors={settings.colors} onChange={updateColors} />}
    </div>
  );
};
