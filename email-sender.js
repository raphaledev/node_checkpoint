var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'example@gmail.com',
        pass: 'monMotDePasse123'
    },
    tls: {
        rejectUnauthorized: false
    }
    });

    var mailOptions = {
    from: 'example@gmail.com',
    to: 'examplel@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'Gomycode Node.js checkpoint'
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});