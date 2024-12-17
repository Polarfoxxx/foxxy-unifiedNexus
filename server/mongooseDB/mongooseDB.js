const mongoose = require("mongoose");
require('dotenv').config();

mongoose.set('strictQuery', false);
const mongo = process.env.REACT_APP_MONGO_DB;

mongoose
    .connect(mongo, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(error => console.error("Error connecting to MongoDB:", error));

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    userData: {
        userName: String,
        logStatus: Boolean,
        colorTheme: String,
        userFoto: String,
    },
    data: {
        events: [
            {
                start: Date,
                end: Date,
                title: String,
                typeEvent: String
            },
        ],
        messages: [
            {
                start_message: Date,
                end_message: Date,
                title_message: String,
                content_message: String,
                status: Boolean
            },
        ],
        myWallet: [
            {
                type_Transaction: String,
                detail_Transaction: String,
                date_Transaction: Date,
                value_Transaction: String,
            },
        ]
    }
}, { collection: 'users' });
const User = mongoose.model('User', userSchema);

module.exports = User;
