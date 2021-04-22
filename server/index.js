const express = require('express');
const handlers = require('./handlers');
const app = express();
const port = 3000;
const helmet = require("helmet");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const User = require('./routers/user.js');
const brand = require('./routers/brandRouter')
const admin = require('./routers/adminRouter')
const auth = require('./routers/authRouter')
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist/darek-kitchen'));
app.use(express.urlencoded({
    extended: false
}));

app.use('/admin',admin)
app.use('/user', User);
app.use('/login',auth)
app.use('/brand', brand);
app.post('/email', (req,res)=>{
    const{subject, email, message} = req.body
    console.log('Data', req.body);
    console.log('======>',handlers);

    handlers.mail.sendMail(email, subject, message, function(err, data){
        if(err){
            console.log(err);
            res.status(500).json({msg: 'Internal Error'})
        } else {
            res.json({msg: 'Email sent !!!!'})
        }
    }); 
});

app.listen(port, () => {
console.log(`app listening at http://localhost:${port}`);
});
