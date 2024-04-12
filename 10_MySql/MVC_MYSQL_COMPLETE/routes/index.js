const express = require('express');
const router = express.Router();
const controller = require('../controller/Cvisitor');

//첫화면
router.get('/', controller.main)

//첫화면 + 방명록 남기기
router.get('/visitors', controller.allVisitorsList)

//방명록에 사용자 추가
router.post('/addvisitor', controller.addVisitor)

//방문자 목록 중 수정버튼 선택
router.get('/visitormodify/:id', controller.getShowAvisitor)

//수정버튼 > 변경버튼 > 선택한 목록의 내용 바꿀 때
router.patch('/visitoreditDo', controller.patchVisitor)

router.delete('/visitordelete', controller.deleteVisitor)

module.exports = router;