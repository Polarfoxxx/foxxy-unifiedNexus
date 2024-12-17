const express = require("express");
const router = express.Router();
const User = require("../../mongooseDB/mongooseDB");

router.post("/user", async (req, res) => {
    const { username } = req.body;
    
    try {
        //! find user.............
        const user = await User.findOne({ username });

        if (user) {
            user.userData.logStatus = false;
            await user.save(); 

            res.clearCookie(username, { httpOnly: true, sameSite: 'None', secure: true });
            res.status(200).send('logout');
        } else {
            res.status(401).json({ message: "The user does not exist" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
