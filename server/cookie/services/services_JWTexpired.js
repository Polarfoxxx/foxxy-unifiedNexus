
const jwt = require('jsonwebtoken');

// Funkcia na overenie platnosti a expirácie JWT tokenu
const verifyJWTToken = (token) => {
  try {
    const decoded = jwt.verify(token, 'secret'); // 'secret' je váš tajný kľúč použitý pri podpise tokenu
    if (decoded.exp * 1000 < Date.now()) {
      // Token vypršal
      return { valid: false, error: 'Token expired' };
    } else {
      // Token je platný
      return { valid: true, decoded };
    }
  } catch (error) {
    // Chyba pri overovaní tokenu
    return { valid: false, error: 'Invalid token' };
  }
};

module.exports = verifyJWTToken;
