const express = require('express');
const router = express.Router();
const User = require("../mongooseDB/mongooseDB");


router.put('/data', async (req, res) => {
        const { userName, delete_Data } = req.body;
    try {
        //! hladanie uzivatela
        const user = await User.findOne({ username: userName });
        if (!user) {
            return res.status(404).json({ message: 'Používateľ s daným emailName nebol nájdený.' });
        } else {
            const { messages } = user.data;
            //! Nájdenie indexu objektu s daným officialName v poli data
            const indexToUpdate = messages.findIndex(obj =>
                (obj.title_message === delete_Data.title_message) &&
                (obj.content_message === delete_Data.content_message)
            );
            if (indexToUpdate === -1) {
                return res.status(404).json({ message: 'Objekt s daným title_message a content_message nebyl nalezen v poli messages.' });
            }
            //! Změna hodnoty klíče
            messages[indexToUpdate].status = false;
            //! Uložení změněných dat
            await user.save();
            res.status(201).json({
                message: "Zpráva byla úspěšně upravena.",
                updateMessages: messages
            });
        };
    } catch
    (error) {
        res.status(500).send('Internal Server Error');
    };
});

module.exports = router;