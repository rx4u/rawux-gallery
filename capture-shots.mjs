import { chromium } from 'playwright';

const sites = [
  { id: 'social-medicine', url: 'https://dribbble-shots.vercel.app/shots/social-medicine' },
  { id: 'haven', url: 'https://haven-concept.vercel.app/' },
  { id: 'tiny-tots', url: 'https://tiny-tots-ruddy.vercel.app/' },
  { id: 'rajaraman-portfolio', url: 'https://rajaraman.vercel.app/' },
  { id: 'maayas-hospitals', url: 'https://maayas-hospitals.vercel.app/' },
  { id: 'keshav-reddy-sweets', url: 'https://keshav-reddy-sweets.vercel.app/' },
  { id: 'precis-ai', url: 'https://precis-ai.vercel.app/' },
  { id: 'page3-luxury-salon', url: 'https://page3-luxury-salon.vercel.app/' },
  { id: 'vishal-hospital', url: 'https://vishal-hospital.vercel.app/' },
  { id: 'agentdeck', url: 'https://agentdeck.vercel.app/' },
];

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });

for (const site of sites) {
  try {
    const page = await context.newPage();
    await page.goto(site.url, { waitUntil: 'networkidle', timeout: 15000 });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: `public/shots/${site.id}.png`, clip: { x: 0, y: 0, width: 1440, height: 900 } });
    await page.close();
    console.log(`OK: ${site.id}`);
  } catch (e) {
    console.error(`FAIL: ${site.id} - ${e.message}`);
  }
}

await browser.close();
