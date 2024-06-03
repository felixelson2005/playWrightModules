import {test,expect} from '@playwright/test';

var userid;
var createdat;
var updatedid;

test("Get users",async({request})=>{

    const resp=await request.get('https://reqres.in/api/users?page=2');
    console.log(await resp.json());
    expect(await resp.status()).toBe(200);

})

test("Create users -post",async({request})=>{

    const resp=await request.post('https://reqres.in/api/users',
        {
            data:{"name":"John","job":"tailer"},
            headers:{"Accept":"application/json"} 
        });   
    
    console.log(await resp.json());
    expect(await resp.status()).toBe(201);
    const res=await resp.json()    
    userid=res.id
    createdat=res.createdAt
    console.log('the id value is :',userid)
    console.log('the Created at :',createdat)
})


test("Update users -put",async({request})=>{

    const resp=await request.put('https://reqres.in/api/users/'+userid,
        {
            data:{"name":"John Rani","job":"Engineer"},
            headers:{"Accept":"application/json"} 
        });   
    
    console.log(await resp.json());
    expect(await resp.status()).toBe(200);
    const res=await resp.json()    
    updatedid=res.id
    console.log('the id value is :',updatedid)
})

test("Delete users",async({request})=>{

    const resp=await request.delete('https://reqres.in/api/users/'+updatedid);
    expect(await resp.status()).toBe(204);

})