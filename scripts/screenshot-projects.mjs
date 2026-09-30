// Captures landing-page screenshots for project cards.
// Run by .github/workflows/project-screenshots.yml; requires `playwright`.
import { chromium } from 'playwright';

const targets = [
  { url: 'https://www.pleasedontscroll.com', out: 'public/images/projects/pleasedontscroll.png' },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 810 } });

for (const { url, out } of targets) {
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: out, animations: 'disabled' });
  console.log(`Saved ${out}`);
}

await browser.close();
