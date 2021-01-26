const webdriver = require("selenium-webdriver");

(async function test() {
  const driver = await new webdriver.Builder().forBrowser("chrome").build();
  driver.manage().window().maximize();
  try {
    await driver.get("https://aw1.automationintesting.online/");
    await driver.findElement( webdriver.By.className("btn btn-outline-primary float-right openBooking")).click();
    
    // Click on Next button of Calendar
    await driver.findElement(webdriver.By.xpath('//*[@id="root"]/div[2]/div/div[4]/div/div[2]/div[2]/div/div[1]/span[1]/button[3]')).click();
    let src = driver.findElement(webdriver.By.className("rbc-date-cell rbc-current"));
    let target = driver.findElement(webdriver.By.className("rbc-date-cell"));
    const actions = driver.actions({ async: true });
    // Performs drag and drop action of source element onto the target element
    await actions.dragAndDrop(src, target).perform();
    //Fill the customer details and click on book
    await driver.findElement(webdriver.By.name("firstname")).sendKeys("Meghali");
    await driver.findElement(webdriver.By.name("lastname")).sendKeys("Phukan");
    await driver.findElement(webdriver.By.name("email")).sendKeys("meghaliphukan@gmail.com");
    await driver.findElement(webdriver.By.name("phone")).sendKeys("782793298899");
    await driver.findElement(webdriver.By.className("btn btn-outline-primary float-right book-room")).click();
  } catch (err) {
    console.log(err);
  } 
})();