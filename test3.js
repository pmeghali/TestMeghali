let webdriver = require('selenium-webdriver');

function test(){

    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.manage().window().maximize();

    driver.get('https://www.voicemod.net/').then(function() {
        driver.findElement(webdriver.By.id('onetrust-accept-btn-handler')).click();
        driver.findElement(webdriver.By.linkText('VOICE CHANGER FOR PC')).click();
        driver.findElement(webdriver.By.className('btn btn-primary btn-lg')).click();
        driver.findElement(webdriver.By.linkText('FAQ')).click();
        driver.findElement(webdriver.By.className('blocks-item-description')).click();
     });
         
}

test();