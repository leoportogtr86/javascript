const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({

        width: 1920,
        height: 1080
    })

    await page.goto('https://pt.savefrom.net/10/#url=https:/www.youtube.com/watch?noredirect=1&v=A0naU1p8g8A&v=A0naU1p8g8A');

    await page.screenshot({ path: 'print.png' });

})();