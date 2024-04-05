
const express= require('express');
const router=express.Router();
const controller = require('../controller/Cmain');

console.log('routes > index.js');
router.get('/', controller.main);
router.get('/comments', controller.comments)
router.get('/comment', controller.comment)

module.exports=router;
