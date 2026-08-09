interface SpacingRowProps {
  label: string;
  token: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

export const SpacingRow: React.FC<SpacingRowProps> = ({
  label,
  token,
  value,
  min,
  max,
  onChange,
}) => {
  const inputId = `spacing-${token}`;

  return (
    <div className="flex flex-col gap-1 py-1.5">
      <div className="flex items-baseline justify-between gap-2 text-xs">
        <label htmlFor={inputId} className="text-muted">
          <span className="font-mono">{token}</span> · {label}
        </label>
        <span className="border border-gray-200 rounded-md px-1.5 py-0.5">{value}px</span>
      </div>
      <input
        id={inputId}
        type="range"
        className="accent-primary"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
};
