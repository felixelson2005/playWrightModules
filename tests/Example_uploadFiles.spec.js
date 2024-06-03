import {test,expect} from '@playwright/test';

test.skip('uploadFiles',async({page})=>{

    await page.goto('https://demo.guru99.com/test/upload/');

    await page.waitForSelector('#uploadfile_0');

    const fileUpload=await page.locator('#uploadfile_0');

    await fileUpload.setInputFiles('./PlaywrightFolder/Files/EventDatainfo.csv');

    await page.waitForTimeout(5000);
    
})

test('multipleUploadFiles',async({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.waitForSelector('#filesToUpload');

    const fileUpload=await page.locator('#filesToUpload');

    await fileUpload.setInputFiles(['./PlaywrightFolder/Files/EventDatainfo.csv',
    './PlaywrightFolder/Files/ErrorLog.csv']
                                    );

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('EventDatainfo.csv');

    expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('ErrorLog.csv');

    await page.waitForTimeout(5000);

    //To remove the files
    fileUpload.setInputFiles([]);

    await page.waitForTimeout(3000);

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');
})