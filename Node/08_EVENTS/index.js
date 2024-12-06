const EventEmitter = require("events");


const event = new EventEmitter();


// event.on("sayName" , ()=>{
//     console.log("batman")
// })

event.on("Checkpage" , (sc, msg)=>{
    console.log(`${sc} and ${msg} `)
})



event.emit("Checkpage", 200 , "ok");