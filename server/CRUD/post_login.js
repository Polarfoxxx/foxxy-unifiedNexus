const express = require("express");
const router = express.Router();
const User = require("../mongooseDB/mongooseDB");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

router.post("/user", async (req, res) => {
    const { username, password } = req.body;
    const cookies = req.cookies;

    try {
        //!validate user.......................
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({
                message: "The user does not exist"
            });
        };
        const unHashPassword = crypto.createHash('sha256').update(password).digest('hex');
        if (unHashPassword !== user.password) {
            return res.status(401).json({
                message: "Incorrect password",
            });
        };
        //?.....................................
        const token = jwt.sign({ username }, "secret", { expiresIn: "2h" });
        let appTheme = "light";

        //! if exiisting cookie..................
        if (cookies && Object.keys(cookies).length > 0) {
            const cookieName = Object.keys(cookies)[0];
            const parseValue = JSON.parse(cookies[cookieName]);
            appTheme = parseValue.colorTheme || defaultTheme;
        };
        //?........................................
        //! create new cookie......................
        const cookieData = {
            token: token,
            colorTheme: appTheme
        };
        const cookieValue = JSON.stringify(cookieData);
        const expirationDate = new Date(Date.now() + (30 * 24 * 60 * 60 * 1000)); //? the month
        //?........................................

        res.cookie(username, cookieValue, {
            httpOnly: true,
            secure: true,
            /* sameSite: 'None', */
            expires: expirationDate
        });
        user.login.state = true;
        await user.save();
        return res.status(200).json();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    };
});

module.exports = router;
