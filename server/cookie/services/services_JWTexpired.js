const jwt = require('jsonwebtoken');

//! validate jwt token.............................
function verifyJWTToken(token) {
  try {
    const decoded = jwt.verify(token, 'secret');
    if (decoded.exp * 1000 < Date.now()) {
      //! bad token
      return { valid: false, error: 'Token expired' };
    } else {
      //! good token
      return { valid: true, decoded };
    }
  } catch (error) {
    return { valid: false, error: 'Invalid token' };
  }
};

module.exports = verifyJWTToken;
