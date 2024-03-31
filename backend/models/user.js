

const Sequelize = require("sequelize")
const db = require(".../backend/server.js")
const user = db.define("kullanici_tablosu",{
  kullanici_adi :{
    type : Sequelize.STRING
  },
  email :{
    type : Sequelize.STRING
  },
  sifre :{
    type : Sequelize.STRING
  }
})
modules.exports=user


