const express = require('express');
const app = express();
const port = 8000;

const cors = require('cors');
const cookieParser = require('cookie-parser');
const User = require('./routers/UserRouter.js')


app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist/darek-kitchen'));



app.use('/user', User);


app.listen(port, () => {
console.log(`app listening at http://localhost:${port}`);
});
