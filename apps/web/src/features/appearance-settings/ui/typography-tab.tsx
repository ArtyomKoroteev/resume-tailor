import {
  FONT_OPTIONS,
  TYPE_SCALE_ROWS,
  type TypeScaleKey,
  type TypeStyle,
  type Typography,
} from '../model';
import { TypeScaleRow } from './type-scale-row';

interface TypographyTabProps {
  typography: Typography;
  onFontChange: (
    patch: Partial<Pick<Typography, 'headingFont' | 'bodyFont'>>,
  ) => void;
  onTypeStyleChange: (key: TypeScaleKey, patch: Partial<TypeStyle>) => void;
}

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <h4 className="text-[10px] font-semibold uppercase tracking-wide text-muted mb-2">
    {children}
  </h4>
);

export const TypographyTab: React.FC<TypographyTabProps> = ({
  typography,
  onFontChange,
  onTypeStyleChange,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="headingFont"
            className="text-[10px] font-semibold uppercase tracking-wide text-muted"
          >
            Heading font
          </label>
          <select
            id="headingFont"
            className="border border-gray-200 rounded-sm px-2 py-1 text-sm"
            style={{ fontFamily: typography.headingFont }}
            value={typography.headingFont}
            onChange={(e) => onFontChange({ headingFont: e.target.value })}
          >
            {FONT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="bodyFont"
            className="text-[10px] font-semibold uppercase tracking-wide text-muted"
          >
            Body font
          </label>
          <select
            id="bodyFont"
            className="border border-gray-200 rounded-sm px-2 py-1 text-sm"
            style={{ fontFamily: typography.bodyFont }}
            value={typography.bodyFont}
            onChange={(e) => onFontChange({ bodyFont: e.target.value })}
          >
            {FONT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <SectionLabel>Type scale</SectionLabel>
        <div className="border border-gray-200 rounded-md px-3 py-1 bg-gray-50">
          {TYPE_SCALE_ROWS.map((row) => (
            <TypeScaleRow
              key={row.key}
              label={row.label}
              sample={row.sample}
              fontFamily={
                row.isHeading ? typography.headingFont : typography.bodyFont
              }
              style={typography.scale[row.key]}
              onChange={(patch) => onTypeStyleChange(row.key, patch)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
