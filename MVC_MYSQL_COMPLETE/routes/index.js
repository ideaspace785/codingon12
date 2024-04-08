const express=require('express');
const router=express.Router();
const controller=require('../controller/Cvisitor');

//첫화면
router.get('/', controller.main)

//방명록 남기기 클릭
console.log('routes > index.js > /visitors');
router.get('/visitors', controller.allVisitorsList);


//방명록에 사용자 추가 했을때
console.log('routes > addvisitor  ')
router.post('/addvisitor', controller.addVisitor)

//수정버튼 클릭했을 때

router.get('/visitormodify/:id', controller.getShowAvisitor)

router.patch('/visitoreidtDo', controller.patchVisitor)

router.delete('visitordelete', controller.deleteVisitor)

//수정버튼 > 변경버튼 > 선택한 목록의 내용이 바뀌었을때
module.exports=router;