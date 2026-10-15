export const sectionIds = ['home', 'about', 'projects', 'experience', 'contact'] as const;
export type SectionId = (typeof sectionIds)[number];
export type Locale = 'pt-BR' | 'en';

// Only the start month is known; the anniversary is October, not a guessed day.
export function getExperienceYears(date: Date): number {
  return Math.max(0, date.getUTCFullYear() - 2011 - (date.getUTCMonth() < 9 ? 1 : 0));
}

export function languageHref(locale: Locale, hash: string): string {
  const recognized = sectionIds.some((id) => hash === `#${id}`);
  return `${locale === 'en' ? '/en/' : '/'}${recognized ? hash : ''}`;
}
