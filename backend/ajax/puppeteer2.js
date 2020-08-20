const puppeteer = require('puppeteer')

(async()=>{

  const browser = await puppeteer.launch()
  const page = browser.newPage()

  await page.goto('https://github.com/jrodrigo887')
  await page.screenshot({path:'print.png'})

  await browser.close();


})()