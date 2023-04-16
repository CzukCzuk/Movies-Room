// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Adding a Comment', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Adding a Comment', async function() {
    await driver.get("https://moviesroom.pl/")
    await driver.manage().window().setRect({ width: 1920, height: 1080 })
    await driver.findElement(By.xpath("//section[4]/div/div/article[5]/div/h2/a")).click()
    await driver.findElement(By.id("submit")).click()
    await driver.findElement(By.id("comment")).click()
    vars["comment"] = await driver.executeScript("return Math.random().toString(36).substring(2,11)")
    await driver.findElement(By.id("comment")).sendKeys(vars["comment"])
    await driver.findElement(By.id("submit")).click()
    await driver.findElement(By.css(".comment-form-author > #author")).click()
    vars["username"] = await driver.executeScript("return Math.random().toString(36).substring(2,11)")
    await driver.findElement(By.css(".comment-form-author > #author")).sendKeys(vars["username"])
    await driver.findElement(By.id("email")).click()
    vars["email"] = await driver.executeScript("return Math.random().toString(36).substring(2,11)  + \'@domain.com\'")
    await driver.findElement(By.id("email")).sendKeys(vars["email"])
    await driver.findElement(By.id("wp-comment-cookies-consent")).click()
  })
})
