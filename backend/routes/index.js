// backend/user/index.js
const express = require('express');
const userRouter = require("../routes/user");
const blogRouter = require("../routes/blog")

const router = express.Router();
router.use("/user", userRouter);
router.use("/blog", blogRouter)
module.exports = router;


