//import package
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
//execute package
const app = express();
//specify port
const port = 3000;


//middlewares
//parses the data
app.use(bodyParser.json());
app.use(cors());

// app.use(express.urlencoded({
//     extended: true
// }));
// app.use(express.json());

//import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


//routes
app.get('/', (req, res) => {
    res.send('Home');
});



//database connection
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true
}, () => console.log('DB connection made...'));




//listening to port
app.listen(port);