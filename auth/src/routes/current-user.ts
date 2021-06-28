import express from 'express';

const router = express.Router();

router.get("/api/users/me", (req, res) => {
    return res.send("Hello there!");
})

export { router as currentUserRouter };