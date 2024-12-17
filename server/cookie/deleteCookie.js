const express = require("express");
const router = express.Router();

router.use('/clear-cookie', (req, res) => {
    try {
        const cookies = req.cookies;
        const cookieName = Object.keys(cookies)[0];
        const parseValue = JSON.parse(cookies[cookieName]); 
        const appTheme = parseValue.colorTheme

        const deleletoToken = {
            token: "",
            colorTheme: appTheme
        }
        const cookieValue = JSON.stringify(deleletoToken);
        res.cookie(cookieName, cookieValue,{
            httpOnly: true,
            secure: true,
            sameSite: 'None',
        });

        res.send('Token v cookies byl úspěšně smazán');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error parsing and extracting cookie values');
    };
});

module.exports = router;
