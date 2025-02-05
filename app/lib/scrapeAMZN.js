// eslint-disable-next-line @typescript-eslint/no-require-imports
const puppeteer = require('puppeteer');

(async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  // Navigate the page to a url
  await page.goto('https://www.amazon.com/s?k=coffee+beans+whole&crid=1AGZQXXTIYV1N&sprefix=coffee+beans+whol%2Caps%2C226&ref=nb_sb_noss_2', { waitUntil: 'domcontentloaded' })

  // wait for the content to load (can adjust the selector as needed)
  await page.waitForSelector("div[data-component-type='s-search-result']");

  // Extract data (modify selectors to fit the site's HTML structure)
  const coffees = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll("div[data-component-type='s-search-result']"))
    return items.map(item => {
      const asin = item.getAttribute('data-asin')

      const titleAnchor = item.querySelector("h2 a")
      const title = titleAnchor ? titleAnchor.innerText.trim() : null
      const productLink = titleAnchor ? titleAnchor.href.startsWith('/') ? `https://www.amazon.com${titleAnchor.href}` : titleAnchor.href : null;

      const imageTag = item.querySelector('.s-image')
      const imageUrl = imageTag ? imageTag.src : null

      const price = item.querySelector('.a-price-whole')
      
      // add more fields here e.g. description

      return { asin, title, productLink, imageUrl, price }
    })
  })

  console.log(coffees)

  await browser.close();

})();

