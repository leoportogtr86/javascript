const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({

    width: 1920,
    height:1080
  })
  await page.goto('https://fretmap.app/scale-minor/root-d/hand-right');
 
  await page.screenshot({path: 'escalaC.png'});
  


  await browser.close();


})();