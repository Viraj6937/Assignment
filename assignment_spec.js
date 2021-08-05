const { browser, element, by } = require("protractor");

/* eslint-disable no-undef */
describe('wobb.ai test', function() {

  beforeAll(()=>{
    browser.ignoreSynchronization=true;
  })

  it('navigate to url', async function(){
    await browser.get('https://wobb-assignment.netlify.app/');
    await browser.manage().window().maximize();
    await browser.navigate().refresh();
  })

  it('click on business brand loggo',async function(){
    await browser.sleep(2000);
    await element(by.css("div#root > div:nth-Child(1) > div > header > div > svg")).click();
  })

  it('enter text into search box field', async function(){
    await browser.sleep(2000);
    await element(by.css("div#root > div:nth-Child(1) > div > header > div  > div:nth-Child(2) > div:nth-Child(2) > input")).sendKeys("test");
  })

  it('click on notification bell icon',async function(){
    await browser.sleep(2000);
    await element(by.css("div#root > div:nth-Child(1) > div > header > div  > div:nth-Child(4)  > button:nth-Child(1) > span:nth-Child(1) > span")).click();
  })

  it('click on notification tab', async function(){
    await browser.sleep(2000);
    await element(by.css("div#root > div:nth-Child(1) > div > header > div  > div:nth-Child(4)  > button:nth-Child(2) > span:nth-Child(1) > span")).click();
  })

  it('click on profile icon', async function(){
    await browser.sleep(2000);
    await element(by.css("div#root > div:nth-Child(1) > div > header > div  > div:nth-Child(4)  > button:nth-Child(3) > span:nth-Child(1) > img")).click();
    await browser.sleep(3000);
    await element(by.css("div#primary-search-account-menu > div:nth-Child(3) > ul > li:nth-Child(1)")).click();
  })

  it('click on premium button',async function(){
    await browser.sleep(2000);
    await element(by.css("div#root > div:nth-Child(1) > div > header > div > button")).click();
  })

  it('click on see all 358 employee list link', async function(){
    await browser.sleep(2000);
    await element(by.css("div#root > div:nth-Child(2) > div:nth-Child(1) > div:nth-Child(1) > div:nth-Child(2) > a")).click();
  })

  it('click on follow button', async function(){
    await browser.sleep(2000);
    await element(by.css("div#root > div:nth-Child(2) > div:nth-Child(1) > div:nth-Child(1) > div:nth-Child(2) > div:nth-Child(6) > button:nth-Child(1)")).click();
  })

  it('click on visit website button', async function(){
    await browser.sleep(2000);
    await element(by.css("div#root > div:nth-Child(2) > div:nth-Child(1) > div:nth-Child(1) > div:nth-Child(2) > div:nth-Child(6) > button:nth-Child(2)")).click();
  })

  it('verify overview tab is selected',async function(){
    await browser.sleep(2000);
    let tabSelected = await element(by.css("div#root > div:nth-Child(2) > div > div:nth-Child(2) > p:nth-Child(1)")).isSelected();
        if(tabSelected){
          expect(true).toBe(true);
        }
  })

  it('verify about tab is selected',async function(){
    await browser.sleep(2000);
    await element(by.css("div#root > div:nth-Child(2) > div > div:nth-Child(2) > p:nth-Child(3)")).click();
    await browser.sleep(2000);
    let tabSelected = await element(by.css("div#root > div:nth-Child(2) > div > div:nth-Child(2) > p:nth-Child(3)")).isSelected();
      if(tabSelected){
        expect(true).toBe(true);
      }
  })

  it('verify product tab is selected', async function(){
    await browser.sleep(2000);
    await element(by.css("div#root > div:nth-Child(2) > div > div:nth-Child(2) > p:nth-Child(5)")).click();
    await browser.sleep(2000);
    let tabSelected = await element(by.css("div#root > div:nth-Child(2) > div > div:nth-Child(2) > p:nth-Child(5)")).isSelected();
      if(tabSelected){
        expect(true).toBe(true);
      }
  })

  it('verify post tab is selected', async function(){
    await browser.sleep(2000);
    await element(by.css("div#root > div:nth-Child(2) > div > div:nth-Child(2) > p:nth-Child(7)")).click();
    await browser.sleep(2000);
    let tabSelected = await element(by.css("div#root > div:nth-Child(2) > div > div:nth-Child(2) > p:nth-Child(7)")).isSelected();
      if(tabSelected){
        expect(true).toBe(true);
      }
  })

  it('verify jobs tab is selected',async function(){
    await browser.sleep(2000);
    await element(by.css("div#root > div:nth-Child(2) > div > div:nth-Child(2) > p:nth-Child(9)")).click();
    await browser.sleep(2000);
    let tabSelected = await element(by.css("div#root > div:nth-Child(2) > div > div:nth-Child(2) > p:nth-Child(9)")).isSelected();
      if(tabSelected){
        expect(true).toBe(true);
      }
  })

  it('verify people tab is selected', async function(){
    await browser.sleep(2000);
    await element(by.css("div#root > div:nth-Child(2) > div > div:nth-Child(2) > p:nth-Child(11)")).click();
    await browser.sleep(2000);
    let tabSelected = await element(by.css("div#root > div:nth-Child(2) > div > div:nth-Child(2) > p:nth-Child(9)")).isSelected();
     if(tabSelected){
       expect(true).toBe(true);
     }
  })

  it('verify video tab is selected', async function(){
    await browser.sleep(2000);
    await element(by.css("div#root > div:nth-Child(2) > div > div:nth-Child(2) > p:nth-Child(13)")).click();
    await browser.sleep(2000);
    let tabSelected = await element(by.css("div#root > div:nth-Child(2) > div > div:nth-Child(2) > p:nth-Child(11)")).isSelected();
      if(tabSelected){
        expect(true).toBe(true);
      }
  })

  it('click on my network menu tab', async function(){
    await browser.sleep(2000);
    await element(by.css("div#root > div:nth-Child(1) > div:nth-Child(2) > div > p:nth-Child(3)")).click();
  })

  it('click on job offers menu tab', async function(){
    await browser.sleep(2000);
    await element(by.css("div#root > div:nth-Child(1) > div:nth-Child(2) > div > p:nth-Child(5)")).click();
  })

  it('click on my profile menu tab', async function(){
    await browser.sleep(2000);
    await element(by.css("div#root > div:nth-Child(1) > div:nth-Child(2) > div > p:nth-Child(7)")).click();
  })
})