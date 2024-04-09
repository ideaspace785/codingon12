const express=require('express')
const router=express.Router();
const controller=require('../controller/Cvisitor');

//첫화면
router.get('/', controller.main)

//첫화면 > 방명록 남기기
router.get('/visitors', controller.allVisitorList)


//사용자 추가
router.post('/addvisitor', controller.addVisitor)

router.get('/visitormodify/:id', controller.getShowAvisitor)

router.patch('/visitoreditDo', controller.patchVisitor);

router.delete('/visitordelete', controller.deleteVisitor);


module.exports=router;