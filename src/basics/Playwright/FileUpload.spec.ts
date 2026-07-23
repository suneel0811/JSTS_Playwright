import { test } from '@playwright/test';

test('Popup Alerts', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

//single file upload
    await page.locator("//input[@type='file']").
    setInputFiles("C:/Users/nares/Downloads/dummy1.txt");
    await page.waitForTimeout(5000);


//multiple file upload

    await page.locator("//input[@type='file']").
    setInputFiles(["C:/Users/nares/Downloads/dummy2.txt",
        "C:/Users/nares/Downloads/dummy3.png"
        ]);
    await page.waitForTimeout(5000);


 //remove files
 await page.locator("//input[@type='file']").
     setInputFiles([]);
     await page.waitForTimeout(5000);


 //buffer memory files

    await page.locator("//input[@type='file']").
         setInputFiles({name:'SuneelTest.txt',
             mimetype:'text/plain',
             buffer: Buffer.from("this is suneel N")});

             await page.waitForTimeout(5000);
    });