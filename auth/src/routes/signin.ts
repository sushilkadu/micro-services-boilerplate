import express from 'express';

const router = express.Router();

router.post("/api/users/signin", (req, res) => {
    return res.send("Hello there, signin!");
})

export { router as signInRouter };