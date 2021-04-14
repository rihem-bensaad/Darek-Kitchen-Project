const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');
const cookieParser = require('cookie-parser');

//const db = require('./database/config.js');
// const routes = require('./database/routers/index.js');

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist/darek-kitchen'));



// app.use('/chef', routes.chef);
// app.use('/user', routes.user);


app.listen(port, () => {
console.log(`app listening at http://localhost:${port}`);
});
