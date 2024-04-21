const nodemailer = require('nodemailer');

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
 to: 'amirhemmati15@yahoo.com', // list of receivers
 subject: 'Hello ✔', // Subject line
 text: 'Hello world?', // plain text body
 html: '<h1>Hello world?</h1>' // html body
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
 if (error) {
    return console.log(error);
 }
 console.log('Message sent: %s', info.messageId);
});