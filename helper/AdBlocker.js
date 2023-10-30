async function skipAd(page) {
    let currentUrl = page.url();
    if (currentUrl.includes("#google_vignette")) {
      await page.mouse.click(0, 0);
    }
  }
  
module.exports = { skipAd };