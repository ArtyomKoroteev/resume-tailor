import type { Colors } from '../model';

interface ColorsTabProps {
  colors: Colors;
  onChange: (patch: Partial<Colors>) => void;
}

const COLOR_ROWS: Array<{ key: keyof Colors; label: string }> = [
  { key: 'text', label: 'Text' },
  { key: 'heading', label: 'Headings' },
  { key: 'accent', label: 'Accent / links' },
];

export const ColorsTab: React.FC<ColorsTabProps> = ({ colors, onChange }) => {
  return (
    <div>
      <h4 className="text-[10px] font-semibold uppercase tracking-wide text-muted mb-2">Palette</h4>
      {COLOR_ROWS.map((row) => (
        <div key={row.key} className="flex justify-between items-center gap-2 py-1.5">
          <label htmlFor={`color-${row.key}`} className="text-sm">
            {row.label}
          </label>
          <div className="flex items-center gap-1 border border-gray-200 rounded-md px-1 py-0.5">
            <input
              type="color"
              id={`color-${row.key}`}
              value={colors[row.key]}
              onChange={(e) => onChange({ [row.key]: e.target.value })}
            />
            <span className="text-xs">{colors[row.key]}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
