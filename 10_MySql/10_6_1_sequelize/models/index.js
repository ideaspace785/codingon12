const Sequelize=require('sequelize');
const config=require('../config/config.json')["development"]
const db={}

const sequelize= new Sequelize(
  config.database, 
  config.username,
  config.password,
  config
)

db.sequelize=sequelize;
db.Sequelize=Sequelize;
//db={"sequelize": sequelize, "Sequelize": Sequelize}  이거랑 같은 형태

module.exports=db;
