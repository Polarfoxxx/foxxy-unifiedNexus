const express = require('express');
const router = express.Router();
const User = require("../mongooseDB/mongooseDB");
const Joi = require("joi");
const crypto = require('crypto');

router.post('/newUser', async (req, res) => {
        const { username, password } = req.body;
        try {
        //! Validácia vstupu
        const validateUser = Joi.object({
            username: Joi.string().min(3).required(),
            password: Joi.string().min(4).required(),
        });
        const validation = validateUser.validate({ username, password });
        if (validation.error) {
            return res.status(400).json({ message: "Registration error" });
        };
        //! Hashovanie hesla pomocou crypto modulu
        const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
        //! Vytvorenie nového používateľa s hashovaným heslom
        const newUser = {
            username: username,
            password: hashedPassword,
            login: {
                status: ""
            },
            data: {
                events: [],
                messages: [],
            }
        };

        //! Uloženie používateľa do databázy
        await User.create(newUser);
        res.status(201).json({ message: "Registration successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Registration error" });
    }
});

module.exports = router;
