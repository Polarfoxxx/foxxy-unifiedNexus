const express = require("express");
const router = express.Router();

// Route to set a cookie
router.post('/update_Cookie', (req, res) => {
  try {
    //? ziskanie apptemy z frondendu
    const request_update = req.body;
    const color = request_update.theme;
    const myCookie = req.cookies;

    const cookie_user_Name = Object.keys(myCookie)[0];
    //? Získanie hodnôt tokenu a farby témy z cookies
    const parseValue = JSON.parse(myCookie[cookie_user_Name]);
    const token = parseValue.token;

    //? Aktualizácia farby témy
    const updatedCookie = {
      token: token,
      colorTheme: color
    };

    //? Serializácia aktualizovaných údajov do JSON reťazca
    const cookieValue = JSON.stringify(updatedCookie);

    //? Nastavenie aktualizovaných cookies späť v odpovedi
    const expirationDate = new Date(Date.now() + (30 * 24 * 60 * 60 * 1000));
    res.cookie(cookie_user_Name, cookieValue ,{
      httpOnly: true,
      secure: true, // Ensure the cookie is only sent over HTTPS
      sameSite: 'None',
      expires: expirationDate
    });

    //? Odpoveď s potvrdením aktualizácie
    res.status(200).send('Cookie updated successfullys');
  } catch (err) {
    console.log(err);
    res.status(500).send('Error parsing and extracting cookie values');
  };
});

module.exports = router;
