import {test,expect} from '@playwright/test';

// test.skip('test1',async({page})=>
// {
//     console.log('This is a Test1')
// }
// )

// test.skip('test2',async({page})=>
// {
//     console.log('This is a Test2')
// }
// )

// test('test3',async({page,browserName})=>
// {
//     console.log('This is a Test3')
//     if(browserName=='chromium'){
//         test.skip();
//     }
// }
// )

// test('test4',async({page})=>
// {
//     test.fixme()
//     console.log('This is a Fixed test')
// }
// )

// test('test5',async({page})=>
// {
//     test.fail()
//     console.log('This is failed test')
//     expect(1).toBe(2);
// }
// )

test('slowmethod',async({page})=>{
    // test.slow();//increase the timeout to 3 times of default config(3X)
    test.setTimeout(500);
    await page.goto('https://demoblaze.com/');
   
})

