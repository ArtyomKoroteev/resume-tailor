import {
  FONT_WEIGHT_OPTIONS,
  LINE_HEIGHT_LIMITS,
  TYPE_SIZE_LIMITS,
  type FontWeight,
  type TypeStyle,
} from '../model';

interface TypeScaleRowProps {
  label: string;
  sample: string;
  fontFamily: string;
  style: TypeStyle;
  onChange: (patch: Partial<TypeStyle>) => void;
}

export const TypeScaleRow: React.FC<TypeScaleRowProps> = ({
  label,
  sample,
  fontFamily,
  style,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1 py-2 border-b border-dashed border-gray-200 last:border-b-0">
      <div className="flex items-baseline justify-between gap-2">
        <span
          className="truncate"
          style={{
            fontFamily,
            fontSize: `${style.size}px`,
            fontWeight: style.weight,
            lineHeight: style.lineHeight,
          }}
        >
          {sample}
        </span>
        <span className="text-[10px] uppercase tracking-wide text-muted shrink-0">{label}</span>
      </div>

      <div className="flex items-center gap-1 text-xs text-muted">
        <input
          type="number"
          aria-label={`${label} font size`}
          className="w-12 border border-gray-200 rounded-sm px-1 py-0.5 text-right"
          min={TYPE_SIZE_LIMITS.min}
          max={TYPE_SIZE_LIMITS.max}
          value={style.size}
          onChange={(e) => onChange({ size: Number(e.target.value) })}
        />
        <span aria-hidden>·</span>
        <select
          aria-label={`${label} font weight`}
          className="border border-gray-200 rounded-sm px-1 py-0.5"
          value={style.weight}
          onChange={(e) => onChange({ weight: Number(e.target.value) as FontWeight })}
        >
          {FONT_WEIGHT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
        <span aria-hidden>·</span>
        <input
          type="number"
          aria-label={`${label} line height`}
          className="w-12 border border-gray-200 rounded-sm px-1 py-0.5 text-right"
          min={LINE_HEIGHT_LIMITS.min}
          max={LINE_HEIGHT_LIMITS.max}
          step={LINE_HEIGHT_LIMITS.step}
          value={style.lineHeight}
          onChange={(e) => onChange({ lineHeight: Number(e.target.value) })}
        />
      </div>
    </div>
  );
};
