const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config()


const auth ={
    auth: {
        api_key: process.env.API_KEY,
        domain: process.env.DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

//Chunk 4

const sendMail = (email, subject, message, cb) =>{
    const mailOptions = {
        from: email,
        to: 'darekkitchen@gmail.com',
        subject,
        text: message
    };
    
    transporter.sendMail(mailOptions, function(err, data){
        console.log('**********',mailOptions);
        if(err){
            // console.log('Error Occurs', err);
            cb(err,null)
        }else{
            // console.log('Message sent!!!');
            cb(null, data);
        }
    });
}

module.exports.sendMail = sendMail;