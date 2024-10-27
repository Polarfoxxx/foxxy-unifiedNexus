const express = require("express");
const router = express.Router();
const verifyJWTToken = require("./services/services_JWTexpired");

router.get('/read_Exp_Existing_Cookie', (req, res) => {
  const myCookie = req.cookies;

  try {
    //! existing cookie ?.............................
    const cookie_userName = Object.keys(myCookie)[0];
    if (!cookie_userName) {
      return res.status(400).json({ valid: false, error: "no cookie" });
    };
    //?........................................
    //! existing token ?........................
    const parseValue = JSON.parse(myCookie[cookie_userName]);
    const { token } = parseValue;
    if (!token) {
      return res.status(400).json({ valid: false, error: "no token" });
    };
    //?........................................
    //! validity token ?........................
    const cookieExp = verifyJWTToken(token);
    const responseData = {
      cookieExp,      //! true or false
      userName: cookie_userName
    };
    //?........................................

    res.json(responseData);
  } catch (err) {
    res.status(500).send('Error parsing and extracting cookie values');
  }
});
module.exports = router;
