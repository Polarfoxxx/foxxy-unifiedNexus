const postLogIn = require('./CRUD/post_login');
const postLogOut = require('./CRUD/post_logout');
const postRegister = require("./CRUD/post_register");
const postcreateData = require("./CRUD/post_createData");
const getreadData = require("./CRUD/get_readData");
const deleteMessage = require("./CRUD/delete_deleteMessage");
const deleteEvent = require("./CRUD/delete_deleteEvent");
const updateMessageData = require("./CRUD/put_updateMessageData");
const updateUserData = require("./CRUD/put_updateUserData");
const updateCookie = require("./cookie/updateCookie");
const readExpExistingCookie = require("./cookie/readExpiredExisting_cookie");
const deleteCookie = require("./cookie/deleteCookie");
const cookieParser = require('cookie-parser');
const express = require("express");
require('dotenv').config();
const app = express();
const cors = require("cors");
const Port = 5000;
const localhost = process.env.REACT_APP_LOCALHOST;
const publicSite = process.env.REACT_APP_PUPLIC;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());

//! Middleware for seting CORS header manual
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", localhost);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

//! CRUD Endpoints
app.use('/register', postRegister); //! register POST method
app.use('/logIn', postLogIn); //! Login POST method
app.use('/logOut', postLogOut); //! Login POST method
app.use('/create', postcreateData); //! save POST method
app.use('/read', getreadData); //! readData GET method
app.use('/deleteMessage', deleteMessage); //! delete message DELETE method
app.use('/deleteEvent', deleteEvent); //! delete event DELETE method
app.use('/updateMessage', updateMessageData); //! updateMessage PUT method
app.use('/updateUser', updateUserData); //! updateUserData PUT method
//! cookies
app.use('/cookies-exp', readExpExistingCookie); //! cookies read and control expiration
app.use('/cookies-delete', deleteCookie); //! cookies delete after logout
app.use('/cookies-update', updateCookie); //! cookies update

//! run server
app.listen(Port, () => console.log(`connect to port ${Port}`));
