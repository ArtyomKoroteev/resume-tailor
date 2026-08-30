import type React from 'react';
import type { AppearanceSettings } from '../model';

/**
 * Maps settings onto the CSS custom properties consumed by `wysiwyg.css`.
 * Body size/line-height keep the legacy `--font-size` / `--line-height` names.
 */
export const toCssVariables = (
  settings: AppearanceSettings,
): React.CSSProperties => {
  const { typography, spacing, colors } = settings;
  const { scale } = typography;

  return {
    '--font-heading': typography.headingFont,
    '--font-body': typography.bodyFont,

    '--font-size': `${scale.body.size}px`,
    '--font-weight': scale.body.weight,
    '--line-height': scale.body.lineHeight,

    '--h1-size': `${scale.h1.size}px`,
    '--h1-weight': scale.h1.weight,
    '--h1-line-height': scale.h1.lineHeight,

    '--h2-size': `${scale.h2.size}px`,
    '--h2-weight': scale.h2.weight,
    '--h2-line-height': scale.h2.lineHeight,

    '--h3-size': `${scale.h3.size}px`,
    '--h3-weight': scale.h3.weight,
    '--h3-line-height': scale.h3.lineHeight,

    '--caption-size': `${scale.caption.size}px`,
    '--caption-weight': scale.caption.weight,
    '--caption-line-height': scale.caption.lineHeight,

    '--text-color': colors.text,
    '--heading-color': colors.heading,
    '--accent-color': colors.accent,

    '--page-padding': `${spacing.pagePadding}px`,
    '--section-spacing': `${spacing.sectionSpacing}px`,
    '--paragraph-spacing': `${spacing.paragraphSpacing}px`,
    '--list-indent': `${spacing.listIndent}px`,
    '--list-item-spacing': `${spacing.listItemSpacing}px`,
  } as React.CSSProperties;
};
