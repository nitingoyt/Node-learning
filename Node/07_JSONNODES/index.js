const fs = require('fs')
const user = {
    name: 'binod',
    age: 22,
    desination: "memer"
};
// console.log(user)

const jsonData = JSON.stringify(user) //converts to json format
// console.log(jsonData)


fs.writeFile('json1.json', jsonData, (err)=>{
    console.log('write done')
})
fs.readFile('json1.json', "utf-8", (err,data)=>{
    console.log(data)
    console.log("read done")
})

const objData = JSON.parse(jsonData)
console.log(objData)


