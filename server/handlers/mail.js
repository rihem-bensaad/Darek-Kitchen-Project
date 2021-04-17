const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth ={
    auth: {
        api_key: '36cd6ef23259472ec0e2cec1cc50ef7c-a09d6718-582418cb',
        domain: 'sandboxd2beb5cc7a694b9986a588aba86cae00.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

//Chunk 4

const sendMail = (email, subject, message, cb) =>{
    const mailOptions = {
        from: email,
        to: 'nadhembacha@gmail.com',
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