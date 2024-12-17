const express = require('express');
const router = express.Router();
const User = require("../../mongooseDB/mongooseDB");


router.get('/data', async (req, res) => {
    const myCookie = req.cookies;
    try {
        const cookieName = Object.keys(myCookie)[0];
        //! find user.................
        const user = await User.findOne({ username: cookieName });
        if (!user) {
            return res.status(404).json({ message: 'the user does not existing' });
        } else {
            return res.status(200).json({
                events: user.data.events,
                message: user.data.messages,
                userData: user.userData
            })
        };
    } catch
    (error) {
        res.status(500).send('Internal Server Error');
    };
});

module.exports = router;