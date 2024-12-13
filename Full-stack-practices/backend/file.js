import {writeFileSync, readFileSync} from 'fs'

const users =[
    {name:'bruece', id:1},  
]

const userJson=JSON.stringify(users);

writeFileSync("backend/users.json",userJson);

const readUserFile = readFileSync("backend/users.json");
console.log(readUserFile);
