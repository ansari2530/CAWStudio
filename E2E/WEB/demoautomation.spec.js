import { expect, test } from "@playwright/test";


//Converting data from JSON to String  //test
const jsonObject = 
    JSON.stringify(require("../../utils/testdata.json"))

    const url = `https://testpages.herokuapp.com/styled/tag/dynamic-table.html`



test("CAW Assesment Test Case", async ({page,}) => 


{
    //Clicking on "Test Data"
    await page.locator ("//*[contains(text(), 'Table Data')]").click()


    //Entering the given test data in the form of JSON string format [Data is getting pulled from JSON file]
    await page.locator ("[id='jsondata']").fill(jsonObject)

    //Clicking on Refresh Table CTA
    await page.locator ("[id='refreshtable']").click()
    await page.waitForTimeout (2000)


    //Extracting the Table text after data has been populated in the same
    const abc = await page.locator ("[id='tablehere']").innerText()


    //Printing the Table extracted value in the console
    console.log(abc)

if (abc.indexOf( jsonObject)) {

    //Using "IndexOf" in order to check the entered value and displayed value
    console.log ("table verified")
}

else {
    console.log("Table Verification failed")
    await page.locator ("///////").click()
}
  });


  test.beforeEach(async ({ page }) => {
    await page.goto(url);

  });

 