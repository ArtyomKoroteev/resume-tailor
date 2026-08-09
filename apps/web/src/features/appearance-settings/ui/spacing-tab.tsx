import { SPACING_ROWS, type Spacing } from '../model';
import { SpacingRow } from './spacing-row';

interface SpacingTabProps {
  spacing: Spacing;
  onChange: (patch: Partial<Spacing>) => void;
}

export const SpacingTab: React.FC<SpacingTabProps> = ({ spacing, onChange }) => {
  return (
    <div>
      <h4 className="text-[10px] font-semibold uppercase tracking-wide text-muted mb-2">
        Spacing scale
      </h4>
      {SPACING_ROWS.map((row) => (
        <SpacingRow
          key={row.key}
          label={row.label}
          token={row.token}
          value={spacing[row.key]}
          min={row.min}
          max={row.max}
          onChange={(value) => onChange({ [row.key]: value })}
        />
      ))}
    </div>
  );
};
