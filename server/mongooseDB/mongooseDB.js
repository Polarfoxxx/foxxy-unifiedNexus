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
    login: {
        state: Boolean
    },
    data: {
        events: [
            {
                start: Date,
                end: Date,
                title: String,
                comment: String
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
    }
}, { collection: 'users' });

const User = mongoose.model('User', userSchema);

module.exports = User;
