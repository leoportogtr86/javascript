const puppeteer = require('puppeteer');



(async () => {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({

        width: 1920,
        height: 1080
    })

    await page.goto('https://www.instagram.com/')

    await page.screenshot({ path: './print.png' })

    // await browser.close()



})()

