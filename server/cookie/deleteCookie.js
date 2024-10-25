const express = require("express");
const router = express.Router();

router.use('/clear-cookie', (req, res) => {
    try {
        // Získání všech cookies ze zprávy
        const cookies = req.cookies;

        
        // Získání názvu cookie, kterou chcete ponechat
        const cookieName = Object.keys(cookies)[0];

        const parseValue = JSON.parse(cookies[cookieName]); // Nastavíme hodnotu tokenu na prázdný řetězec
        const appTheme = parseValue.colorTheme

        const deleletoToken = {
            token: "",
            colorTheme: appTheme
        }
        // Serializace dat do JSON řetězce
        const cookieValue = JSON.stringify(deleletoToken);

        // Nastavení upravených cookies zpět do odpovědi
        res.cookie(cookieName, cookieValue,{
            httpOnly: true,
            secure: true, // Ensure the cookie is only sent over HTTPS
            sameSite: 'None',
        });

        // Odpověď, že token v cookies byl úspěšně smazán
        res.send('Token v cookies byl úspěšně smazán');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error parsing and extracting cookie values');
    };
});

module.exports = router;
