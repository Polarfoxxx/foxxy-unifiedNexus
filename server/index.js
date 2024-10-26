const post_LogIn = require('./CRUD/post_login');
const post_LogOut = require('./CRUD/post_logout');
const post_Register = require("./CRUD/post_register");
const post_createData = require("./CRUD/post_createData");
const get_readData = require("./CRUD/get_readData");
const deleteMessage = require("./CRUD/delete_deleteMessage");
const deleteEvent = require("./CRUD/delete_deleteEvent");
const update_putData = require("./CRUD/put_updateData");
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
app.use('/register', post_Register); //! register POST method
app.use('/logIn', post_LogIn); //! Login POST method
app.use('/logOut', post_LogOut); //! Login POST method
app.use('/create', post_createData); //! save POST method
app.use('/read', get_readData); //! readData GET method
app.use('/deleteMessage', deleteMessage); //! delete message DELETE method
app.use('/deleteEvent', deleteEvent); //! delete event DELETE method
app.use('/update', update_putData); //! updateData PUT method
//! cookies
app.use('/cookies-exp', readExpExistingCookie); //! cookies read and control expiration
app.use('/cookies-delete', deleteCookie); //! cookies delete after logout
app.use('/cookies-update', updateCookie); //! cookies update

//! run server
app.listen(Port, () => console.log(`connect to port ${Port}`));
