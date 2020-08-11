const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.youtube.com/watch?v=M-jFYhOfero');
 
  await page.screenshot({path: 'example.png'});
  await page.pdf({path: 'tela.pdf', format: 'A4'})


  await browser.close();


})();