const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth ={
    auth: {
        api_key: '10d59de5bf14477844a8fb215faa9538-a09d6718-c0fb1a86',
        domain: 'sandbox536cf7030ce04722b62b3ee319afb5a0.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

//Chunk 4

const sendMail = (email, fullName, message, cb) =>{
    const mailOptions = {
        from: email,
        to: 'nadhembacha@gmail.com',
        
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