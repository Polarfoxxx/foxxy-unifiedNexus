const express = require('express');
const router = express.Router();
const User = require("../mongooseDB/mongooseDB");


router.put('/data', async (req, res) => {
    const { userName, updateUserData } = req.body;
     console.log(userName);
     
    try {
        //! hladanie uzivatela
        const user = await User.findOne({ username: userName });
        if (!user) {
            return res.status(404).json({ message: 'Používateľ s daným emailName nebol nájdený.' });
        } else {
            let userData = user.userData;
            userData.colorTheme = updateUserData;

            //! Uložení změněných dat
            await user.save();
            res.status(200).json({
                message: "User update",
                updateUserData: userData
            });
        };
    } catch
    (error) {
        res.status(500).send('Internal Server Error');
    };
});

module.exports = router;