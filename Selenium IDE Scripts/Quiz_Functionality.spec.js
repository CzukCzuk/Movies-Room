// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Quiz Functionality', function() {
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
  it('Quiz Functionality', async function() {
    await driver.get("https://moviesroom.pl//")
    await driver.manage().window().setRect({ width: 1920, height: 1080 })
    await driver.findElement(By.css("#menu-item-42324 > a")).click()
    await driver.findElement(By.css(".post-230124 .new_small_post_img")).click()
    await driver.findElement(By.css(".quiz_start_button")).click()
    await driver.findElement(By.css(".quiz__item_1 .quiz_button:nth-child(2)")).click()
    await driver.findElement(By.css(".timer_1 > .next_quiz_button")).click()
    await driver.findElement(By.css(".quiz__item_3 .quiz_button:nth-child(2)")).click()
    await driver.findElement(By.css(".quiz__item_3 .quiz_button:nth-child(4)")).click()
    await driver.findElement(By.css(".timer_3 > .next_quiz_button")).click()
    await driver.findElement(By.css(".quiz__item_4 .quiz_button:nth-child(4)")).click()
    await driver.findElement(By.css(".timer_4 > .next_quiz_button")).click()
    await driver.findElement(By.css(".quiz__item_5 .quiz_button:nth-child(2)")).click()
    await driver.findElement(By.css(".timer_5 > .next_quiz_button")).click()
    await driver.findElement(By.css(".quiz__item_6 .quiz_button:nth-child(4)")).click()
    await driver.findElement(By.css(".timer_6 > .next_quiz_button")).click()
    await driver.findElement(By.css(".quiz__item_7 .quiz_button:nth-child(6)")).click()
    await driver.findElement(By.css(".timer_7 > .next_quiz_button")).click()
    await driver.findElement(By.css(".quiz__item_8 .quiz_button:nth-child(8)")).click()
    await driver.findElement(By.css(".timer_8 > .next_quiz_button")).click()
    await driver.findElement(By.css(".quiz__item_9 .quiz_button:nth-child(2)")).click()
    await driver.findElement(By.css(".timer_9 > .next_quiz_button")).click()
    await driver.findElement(By.css(".quiz__item_10 .quiz_button:nth-child(4)")).click()
    await driver.findElement(By.css(".timer_10 > .next_quiz_button")).click()
    await driver.findElement(By.css(".quiz__item_11 .quiz_button:nth-child(8)")).click()
    await driver.findElement(By.css(".timer_11 > .next_quiz_button")).click()
    await driver.findElement(By.css(".quiz__item_12 .quiz_button:nth-child(6)")).click()
    await driver.findElement(By.css(".timer_12 > .next_quiz_button")).click()
    await driver.findElement(By.css(".quiz__item_13 .quiz_button:nth-child(2)")).click()
    await driver.findElement(By.css(".timer_13 > .next_quiz_button")).click()
    await driver.findElement(By.css(".quiz__item_14 .quiz_button:nth-child(4)")).click()
    await driver.findElement(By.css(".timer_14")).click()
    await driver.findElement(By.css(".timer_14 > .next_quiz_button")).click()
    await driver.findElement(By.css(".quiz__item_15 .quiz_button:nth-child(6)")).click()
    await driver.findElement(By.css(".timer_15 > .next_quiz_button")).click()
    await driver.findElement(By.css(".quiz__item_16 .radio-toolbar")).click()
    await driver.findElement(By.css(".quiz__item_16 .quiz_button:nth-child(2)")).click()
    await driver.findElement(By.css(".timer_16 > .next_quiz_button")).click()
    await driver.findElement(By.css(".quiz__item_17 .quiz_button:nth-child(6)")).click()
    await driver.findElement(By.css(".timer_17 > .next_quiz_button")).click()
    await driver.findElement(By.css(".quiz__item_18 .quiz_button:nth-child(6)")).click()
    await driver.findElement(By.css(".timer_18 > .next_quiz_button")).click()
    await driver.findElement(By.css(".quiz__item_19 .quiz_button:nth-child(2)")).click()
    await driver.findElement(By.css(".show_submit")).click()
    await driver.findElement(By.css(".submit_quiz")).click()
  })
})
