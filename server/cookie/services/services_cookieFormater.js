

function cookieFormater(cookie) {
    const userName = Object.keys(cookies)[0];
    const parseValue = JSON.parse(cookies[userName]);
};

module.exports = cookieFormater;