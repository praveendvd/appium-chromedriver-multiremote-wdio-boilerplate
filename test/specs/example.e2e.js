

describe('My Login application', () => {
  it('should login with valid credentials', async () => {

    await a.url("https://www.google.com")
    //await a.debug()

    await (await a.$("//div[contains(text(),'I agree')]/..")).click()
    await b.startActivity("io.appium.android.apis", "io.appium.android.apis.ApiDemos");
    await(await b.$("~Text")).click();
  
  });


});


