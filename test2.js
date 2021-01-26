let webdriver = require('selenium-webdriver');


function test(){

    let driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.manage().window().maximize();

    driver.get('https://aw1.automationintesting.online/').then( function() {

    let bookingButton = webdriver.By.className('btn btn-outline-primary float-right openBooking');
    driver.findElement(bookingButton).click().then(function(){
        driver.findElement(webdriver.By.name('firstname')).sendKeys('Meghali');
        driver.findElement(webdriver.By.name('lastname')).sendKeys('Phukan');
        driver.findElement(webdriver.By.name('email')).sendKeys('meghaliphukan@gmail.com');
        driver.findElement(webdriver.By.name('phone')).sendKeys('78279329881');
        //driver.findElement(webdriver.By.className('rbc-date-cell rbc-now rbc-current')).click();            
        let sourceEle = driver.findElement(webdriver.By.className('rbc-date-cell'));
        let targetEle = driver.findElement(webdriver.By.className('rbc-event'));
        const actions = driver.actions();
        actions.dragAndDrop(sourceEle,targetEle).perform();
        driver.findElement(webdriver.By.className('btn btn-outline-primary float-right book-room')).click();            
     });
         }).catch((err) => console.log(error));
}

test();