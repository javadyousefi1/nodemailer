const express = require("express")
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express()

app.use(express.json())
app.use(cors());

app.post("/", (req, res) => {
    const { email } = req.body

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'modimalshop@gmail.com', // Your Gmail account
            pass: 'pktocncokaxsutos' // Your Gmail password
        }
    });

    // Set up email data with unicode symbols
    let mailOptions = {
        from: '"Sender Name" <modimalshop@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<h1>Hello world?</h1>' // html body
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(400).json({ message: "error" })
            // return console.log(error);
        } else {
            // console.log('Message sent: %s', info.messageId);
            res.status(200).json({ message: "ok" })
        }
    });
})

app.listen(3000, () => {
    console.log("listening on 3000 port")
})