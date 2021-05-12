const express = require('express');
const upload = require('./config/multerconfig')
const cloudinary = require('./config/cloudinaryconfig');
const fs = require('fs')
const handlers = require('./handlers');
const app = express();
const port = 3000;
const helmet = require("helmet");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const menu = require('./routers/menuRouter.js');
const chef = require('./routers/ChefRouter')
const User = require('./routers/user.js');
const user = require('./routers/UserRouter.js');
var server = require('http').Server(app);
var io = require('socket.io')(server);

const brand = require('./routers/brandRouter')
const admin = require('./routers/adminRouter')
const auth = require('./routers/authRouter')
io.on('connection', function(socket) {
  console.log('new connection');

  socket.on('add-customer', function(customer) {
    io.emit('notification', {
      message: 'new customer',
      customer: customer
    });
  });
});

app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist/darek-kitchen'));
app.use(express.urlencoded({
    extended: false
}));
app.use('/upload-images', upload.array('image'), async (req, res) => {

    const uploader = async (path) => await cloudinary.uploads(path, 'Images');
  
    if (req.method === 'POST') {
      const urls = []
      const files = req.files;
      for (const file of files) {
        const { path } = file;
        const newPath = await uploader(path)
        urls.push(newPath)
        fs.unlinkSync(path)
      }
  
      res.status(200).json({
        message: 'images uploaded successfully',
        data: urls
      })
  
    } else {
      res.status(405).json({
        err: `${req.method} method not allowed`
      })
    }
  })

app.use('/menu', menu);
app.use('/admin',admin)
app.use('/chef',chef);
app.use('/user', User);
app.use('/userr', user);
app.use('/login',auth);
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
