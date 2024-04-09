const express=require("express");
const router= express.Router();
const controller=require('../controller/Cuser')
console.log("routes > user.js");

router.get('/', controller.user); //Controller에 user로 보냄
module.exports=router;
