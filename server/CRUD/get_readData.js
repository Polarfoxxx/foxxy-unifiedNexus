const express = require('express');
const router = express.Router();
const User = require("../mongooseDB/mongooseDB");


router.get('/data', async (req, res) => {
    const myCookie = req.cookies;
    try {
        const cookieName = Object.keys(myCookie)[0];
        //! find user.................
        const user = await User.findOne({ username: cookieName });
        if (!user) {
            return res.status(404).json({ message: 'the user does not existing' });
        } else {
            const events = user.data.events;
            const messages = user.data.messages;
            const userData = user.userData;
            
            return res.status(200).json({
                events: events,
                message: messages,
                userData: userData
            })
        };
    } catch
    (error) {
        res.status(500).send('Internal Server Error');
    };
});

module.exports = router;