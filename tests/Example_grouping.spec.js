import {test,expect} from '@playwright/test';

test.beforeAll(async()=>{
    console.log('This is beforeALL...');

})

test.beforeEach(async()=>{
    console.log('This is before each...')

})

test.describe.only('Group 1',()=>{

test('test1',async({page})=>{

   console.log('The test 1')

})

test('test2',async({page})=>{

      console.log('The test 2')
 
 })

})

test.describe('Group 2',async()=>{


 test('test3',async({page})=>{

    console.log('The test 3')

})

test('test4',async({page})=>{

    console.log('The test 4')

})

test.afterAll(async()=>{
    console.log('This is after all...')
})

test.afterEach(async()=>{
    console.log('This is after each...')
})


})