import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const locale of [
  {
    path: '/',
    language: 'pt-BR',
    contact: 'Vamos conversar?',
    earlier: 'Ver experiências anteriores',
  },
  { path: '/en/', language: 'en', contact: "Let's talk.", earlier: 'View earlier experience' },
]) {
  test(`${locale.language}: static entry, metadata, navigation and accessibility`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    page.on('response', (response) => {
      if (response.url().startsWith('http://127.0.0.1:4173') && response.status() >= 400)
        errors.push(`${response.status()} ${response.url()}`);
    });
    await page.goto(locale.path);
    await expect(page.locator('html')).toHaveAttribute('lang', locale.language);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.getByRole('heading', { name: locale.contact, exact: true })).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `https://marceloqueiroz.dev.br${locale.path}`,
    );
    await expect(page.locator('link[rel="alternate"]')).toHaveCount(3);
    await page.reload();
    await page.locator('.section-navigation a[href$="#experience"]').click();
    await expect(page).toHaveURL(/#experience$/);
    await page.locator('summary').focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('details')).toHaveAttribute('open', '');
    await expect(page.getByRole('heading', { name: 'SGI', exact: true })).toBeVisible();
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await expect(page.locator('.section-navigation a[href$="#contact"]')).toHaveAttribute(
      'aria-current',
      'location',
    );
    const result = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(result.violations).toEqual([]);
    expect(errors).toEqual([]);
  });

  for (const width of [320, 360, 390, 768, 1024, 1440]) {
    test(`${locale.language}: responsive at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(locale.path);
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('.language-switcher')).toBeVisible();
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
      ).toBe(true);
      await page.locator('summary').click();
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
      ).toBe(true);
    });
  }
}

test('language switching preserves deep links in both directions', async ({ page }) => {
  await page.goto('/#projects');
  await expect(page.locator('.language-switcher a[lang="en"]')).toHaveAttribute(
    'href',
    '/en/#projects',
  );
  await page.locator('.language-switcher a[lang="en"]').click();
  await expect(page).toHaveURL('/en/#projects');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page.locator('.language-switcher a[lang="pt-BR"]').click();
  await expect(page).toHaveURL('/#projects');
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
});

test('static content and earlier experience work without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  for (const path of ['/', '/en/']) {
    await page.goto(`http://127.0.0.1:4173${path}`);
    await expect(page.locator('h1')).toContainText('Marcelo');
    await expect(page.locator('.project-card')).toHaveCount(3);
    await page.locator('summary').click();
    await expect(page.getByRole('heading', { name: 'SGI', exact: true })).toBeVisible();
  }
  await page.locator('.language-switcher a[lang="pt-BR"]').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
  await context.close();
});

test('cached prerendered experience updates after hydration', async ({ page }) => {
  await page.clock.install({ time: new Date('2031-10-02T12:00:00Z') });
  await page.goto('/');
  await expect(page.getByTestId('experience-years')).toHaveText('20');
});

test('skip link is first in keyboard order and unknown URLs return 404', async ({
  page,
  request,
}) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.locator('.skip-link')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#content')).toBeFocused();
  expect((await request.get('/does-not-exist/')).status()).toBe(404);
});

test('reduced motion disables smooth scrolling', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  expect(
    await page.locator('html').evaluate((element) => getComputedStyle(element).scrollBehavior),
  ).toBe('auto');
});
