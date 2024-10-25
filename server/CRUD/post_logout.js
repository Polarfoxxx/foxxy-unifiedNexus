const express = require("express");
const router = express.Router();
const User = require("../mongooseDB/mongooseDB");

router.post("/user", async (req, res) => {
    const { username } = req.body;
    
    try {
        // Hľadanie používateľa 
        const user = await User.findOne({ username });

        // Kontrola existencie používateľa 
        if (user) {
            user.login.state = false;
            await user.save(); // Použij await, aby se počkalo na uložení uživatele

            // Vymazání souborů cookie (pokud používáš cookies pro autentizaci)
            res.clearCookie(username, { httpOnly: true, sameSite: 'None', secure: true });
            res.status(200).send('logout');
        } else {
            res.status(401).json({ message: "The user does not exist" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
