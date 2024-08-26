const express = require("express");
const router = express.Router();

router.get("/signup",(req, res)=>{
    return res.json({
        msg : "Done "
    })
})

module.exports = router