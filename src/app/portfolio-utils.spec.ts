import { describe, expect, it } from 'vitest';
import { getExperienceYears, languageHref } from './portfolio-utils';
import { portfolioContent, experiences, projects } from './content/portfolio-content';

describe('experience anniversary', () => {
  it('increments in October, not January, using UTC calendar months', () => {
    expect(getExperienceYears(new Date('2026-09-30T23:59:59Z'))).toBe(14);
    expect(getExperienceYears(new Date('2026-10-01T00:00:00Z'))).toBe(15);
    expect(getExperienceYears(new Date('2027-01-01T00:00:00Z'))).toBe(15);
    expect(getExperienceYears(new Date('2027-10-01T00:00:00Z'))).toBe(16);
    expect(getExperienceYears(new Date('2010-01-01T00:00:00Z'))).toBe(0);
  });
});
describe('language switching', () => {
  it('preserves recognized deep links and discards unknown fragments', () => {
    expect(languageHref('en', '#projects')).toBe('/en/#projects');
    expect(languageHref('pt-BR', '#experience')).toBe('/#experience');
    expect(languageHref('en', '#unknown')).toBe('/en/');
  });
});
describe('localized content', () => {
  it('has matching nonempty keys and matching project/experience records', () => {
    const shape = (value: unknown): unknown =>
      Array.isArray(value)
        ? value.map(shape)
        : typeof value === 'object' && value !== null
          ? Object.fromEntries(Object.entries(value).map(([key, child]) => [key, shape(child)]))
          : typeof value;
    expect(shape(portfolioContent.en)).toEqual(shape(portfolioContent['pt-BR']));
    for (const copy of Object.values(portfolioContent)) {
      expect(copy.projects).toHaveLength(projects.length);
      expect(copy.experiences).toHaveLength(experiences.length);
      expect(JSON.stringify(copy)).not.toContain(':""');
    }
  });
});
