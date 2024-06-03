import {test,expect} from '@playwright/test';

test.skip('FrameHandler', async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frame=await page.frames();
    console.log('Total number of frames are: ',frame.length);

    //Using URl of the iframe if name is not present
    // const frame1=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});

    // await frame1.fill('[name="mytext1"]','Hello');

    //Using page.frame locator

    const frame2= await page.frameLocator("//frame[@src='frame_2.html']");

    const elem=await frame2.locator("//*[@name='mytext2']");

    elem.fill('Hello2');

    await page.waitForTimeout(5000);

});

test('NestedFrame',async({page})=>{


    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});

    await frame3.locator('[name="mytext3"]').fill('Welcome frame3');

    //nested frames
    const allframe3= await frame3.childFrames();
    console.log('The number of frame is',allframe3.length);
   await allframe3[0].locator("//*[text()='I am a human']").click
   ();

    await page.waitForTimeout(5000);
    

})