import {test,expect} from '@playwright/test';

test.skip('dragDropTestApproach1', async({page})=>{

    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");

   const source_ele= await page.locator('#box6');
   const target_ele= await page.locator('#box106');

   //Use drag and drop approach 1
   await source_ele.hover()
   await page.mouse.down()

   await target_ele.hover()
   await page.mouse.up()


   await page.waitForTimeout(5000);

})

test('dragDropTestApproach2', async({page})=>{

    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");

   const source_ele= await page.locator('#box3');
   const target_ele= await page.locator('#box103');

   //Use drag and drop approach 1
   await source_ele.dragTo(target_ele);

   await page.waitForTimeout(5000);

})