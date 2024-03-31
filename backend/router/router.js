const express = require("express")
const router = express.Router()
const user = require("../config/database.js")

router.get("/Login",(req,res) => {
    user.findAll().then((kullanici_tablosu) => res.json(kullanici_tablosu)).catch((err) => console.log(err))
})
module.exports = router

