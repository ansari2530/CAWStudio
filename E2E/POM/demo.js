import { expect } from "@playwright/test";

 //test
export class newdata {
  constructor(page) {
    this.page = page;
  }

  
  async addnewusers (jsonobjectfile) {
    
    await this.page.locator ("//*[contains(text(), 'Table Data')]").click()

    await this.page.locator ("[id='jsondata']").fill(jsonobjectfile)

    await this.page.locator ("[id='refreshtable']").click()
    await page.waitForTimeout (2000)


    const abc = await this.page.locator ("[id='tablehere']").innerText()

    console.log(abc)
  
  }

}
