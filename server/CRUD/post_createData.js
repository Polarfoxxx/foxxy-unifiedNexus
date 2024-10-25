const express = require('express');
const router = express.Router();
const User = require("../mongooseDB/mongooseDB");

router.post('/data', async (req, res) => {
    const { userName, save_Data } = req.body;
    try {
        //! hladanie uzivatela
        const user = await User.findOne({ username: userName });
        if (!user) {
            return res.status(404).json({ message: 'Používateľ s daným emailName nebol nájdený.' });
        } else {
            switch (true) {
                case save_Data.event !== undefined:
                    user.data.events.push(save_Data.event);
                    await user.save();
                    res.status(201).json({
                         message: "event saved", 
                         updateAllMessasge: user.data.events 
                        });
                    break;
                case save_Data.custom !== undefined:
                    user.custom = save_Data.custom;
                    await user.save();
                    res.status(201).json({ message: "theme saved" });
                    break;
                case save_Data.message !== undefined:
                    user.data.messages.push(save_Data.message);
                    await user.save();
                    res.status(201).json({
                        message: "message saved",
                        updateAllMessasge: user.data.messages
                    });
                    break;
                default:
                    //! V prípade, že nejaká z hodnôt nie je definovaná
                    res.status(400).json({ message: "Invalid data provided" });
            };
        };
    } catch (error) {
        res.status(500).send('Internal Server Error');
    };
});

module.exports = router;
