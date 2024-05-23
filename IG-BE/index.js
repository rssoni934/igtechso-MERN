const express = require('express');
const mongoose = require('mongoose');
const envConfig = require('./src/config/env.config');
const verifyToken = require('./src/middleware/user.auth');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

//routes
const review = require("./src/routers/reviews");
const auth = require("./src/routers/auth");

const { db_url, port } = envConfig;
const initialPath = "/api/";

//Database Connection
mongoose.connect(`${db_url}`)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    })

//Handling Connection Events to know when the connection
const connect = mongoose.connection;
connect.on('open', () => {
    console.log("connectin is open");
})

connect.once('open', () => {
    console.log('Connected to MongoDB');
});

connect.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

//Routes
app.use(initialPath + 'review', verifyToken, review);
app.use(initialPath + 'auth', auth);


app.listen(port, () => {
    console.log(`Server running on port : ${port} `);
})