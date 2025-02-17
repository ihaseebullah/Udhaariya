const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'haseebullah7aand7b@gmail.com',
        pass: 'xnxb mysl auyv aglu'
    }
});

function sendVerificationEmail(to, verificationCode, password) {

    let mailOptions = {
        from: 'e7409029@gmail.com',
        to: to,
        subject: 'Email verification',
        text: password ? `You are receiving this because you (or someone else) have requested the reset of the password or email address for your account.\n\n` +
            `Your OTP code is :` +
            `${verificationCode}\n\n` +
            `If you did not request this, please ignore.\n` : 'Your email verification code is ' + verificationCode
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('Error occurred:', error);
        } else {
            console.log('Email sent successfully:', info.response);
        }
    });

}

function sendNotificationMail(to, subject, text) {

    transporter.sendMail({ from: 'e7409029@gmail.com', to, subject, text }, function (error, info) {
        if (error) {
            console.log('Error occurred:', error);
        } else {
            console.log('Email sent successfully:', info.response);
        }
    });
}
module.exports = { sendVerificationEmail, sendNotificationMail }