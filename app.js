const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv/config');


app.use(cors());
app.use(bodyParser.json());

//import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => {
    res.send('HOME');
});

//DB Connection
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true
}, () => {
    console.log("DB connection made!");
});

// listening to port
app.listen(4000);