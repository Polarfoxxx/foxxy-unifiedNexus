const express = require('express');
const router = express.Router();
const User = require("../mongooseDB/mongooseDB");


router.delete('/data', async (req, res) => {
    const { userName, delete_Data } = req.query;
    try {
        //! hladanie uzivatela
        const user = await User.findOne({ username: userName });
        if (!user) {
            return res.status(404).json({ message: 'Používateľ s daným emailName nebol nájdený.' });
        } else {
            const { messages } = user.data;
            //! Nájdenie indexu objektu s daným officialName v poli data
            const indexToDelete = messages.findIndex(obj =>
                (obj.title_message === delete_Data.title_message) &&
                (obj.content_message === delete_Data.content_message)
            );
            if (indexToDelete === -1) {
                return res.status(404).json({ message: 'Objekt s daným officialName nebol nájdený v poli data.' });
            }
            //! Odstránenie objektu z pola data
            messages.splice(indexToDelete, 1);
            //! Uloženie zmeneného používateľa
            await user.save();
            res.status(201).json({
                message: "Zpráva byla úspěšně odstraněna.",
                updateMessages: messages
            });
        };
    } catch
    (error) {
        res.status(500).send('Internal Server Error');
    };
});

module.exports = router;