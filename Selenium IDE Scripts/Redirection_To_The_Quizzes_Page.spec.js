// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Redirection to the Quizzes Page', function() {
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
  it('Redirection to the Quizzes Page', async function() {
    await driver.get("https://moviesroom.pl//")
    await driver.manage().window().setRect({ width: 1920, height: 1080 })
    await driver.findElement(By.css("#menu-item-42324 > a")).click()
  })
})
