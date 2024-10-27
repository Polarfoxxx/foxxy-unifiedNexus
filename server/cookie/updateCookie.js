const express = require("express");
const router = express.Router();

router.post('/update_Cookie', (req, res) => {
  try {
    const request_update = req.body;
    const color = request_update.theme;
    const myCookie = req.cookies;

    const cookie_user_Name = Object.keys(myCookie)[0];
    const parseValue = JSON.parse(myCookie[cookie_user_Name]);
    const token = parseValue.token;

    //! update theme.......
    const updatedCookie = {
      token: token,
      colorTheme: color
    };
    const cookieValue = JSON.stringify(updatedCookie);

    const expirationDate = new Date(Date.now() + (30 * 24 * 60 * 60 * 1000));
    res.cookie(cookie_user_Name, cookieValue ,{
      httpOnly: true,
      secure: true, // Ensure the cookie is only sent over HTTPS
      sameSite: 'None',
      expires: expirationDate
    });

    res.status(200).send('Cookie updated successfullys');
  } catch (err) {
    console.log(err);
    res.status(500).send('Error parsing and extracting cookie values');
  };
});

module.exports = router;
