const express = require('express');
const router = express.Router();

router.get("/", (req,res)=>{
    res.json("si funciono..");
});

router.post("/");

router.put("/");

router.delete("/");

module.exports = router;