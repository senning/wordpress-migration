const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3001", { waitUntil: 'networkidle0', timeout: 60000 });
  await page.setViewport({ width: 420, height: 800 });
  const screenshotMobile = await page.screenshot({path: 'screenshots/screenshot-mobile.png'});
  await page.setViewport({ width: 1200, height: 600 });
  const screenshotDesktop = await page.screenshot({path: 'screenshots/screenshot-desktop.png'});
  await browser.close();
})();

