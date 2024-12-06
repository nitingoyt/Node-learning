const nodemailer = require("nodemailer");

const sendMail = async (req, res) =>{
    let testaccount = await nodemailer.createTestAccount()

    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
          user: "ayla.block16@ethereal.email",
          pass: "tEPvMReehZKfdtmh1q",
        },
    })


    let info = await transporter.sendMail({ 
        from: '"Nitin" <ayla.block16@ethereal.email>', // sender address
        to: "nitingoyat14@gmail.com" , // list of receivers
        subject: "Hello ✔", 
        text: "Hello buddy?", 
        html: "<b>Hello Nitin </b>", 
    })
    console.log("messsag sent: %s", info, messageID)
    res.json(info)
    res.send("sending mail")
}

module.exports =sendMail 