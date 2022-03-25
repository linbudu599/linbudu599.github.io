import fs from 'fs-extra';
import path from 'path';
import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewport({
    width: 1440,
    height: 900,
  });

  await page.goto('http://localhost:5000');

  await page.waitForTimeout(2000);

  const exportPath = path.join(
    __dirname,
    './dist/林伟轩-阿里巴巴-前端开发工程师.pdf'
  );

  fs.ensureFileSync(exportPath);

  await page.pdf({
    path: exportPath,
    width: '9.64in',
    height: '23.24in',
    printBackground: true,
    displayHeaderFooter: false,
    margin: {
      top: 0,
      left: 20,
      right: 20,
      bottom: 0,
    },
  });

  browser.close();
})();
