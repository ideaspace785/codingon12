const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
  res.render('index')
}

exports.allVisitorsList = (req, res) => {
  Visitor.allVisitorsList(result => {
    console.log('allVisitorsList', result);
    res.render('visitor', { data: result })
  })
}

exports.addVisitor = (req, res) => {
  console.log('데이터 입력 > 등록버튼', req.body);
  const { name, comment } = req.body;
  Visitor.postVisitor(req.body, (result) => {
    console.log('all visitor > userid', result);
    res.send({ id: result, name, comment })
  })
}

exports.getShowAvisitor = (req, res) => {
  console.log("Cvisitor  > 1명 선택 : ", req.params.id, req.params)
  Visitor.getShowAvisitor(req.params.id, (result) => {
    console.log("getShowAvisitor ", req.params.id)
    res.send(result)
  })
}

// 수정버튼
exports.patchVisitor = (req, res) => {
  console.log('수정버튼 클릭 후 ', req.body);
  Visitor.patchContent(req.body, (result) => {
    res.send(result)
  })
}

// 삭제버튼
exports.deleteVisitor = (req, res) => {
  console.log('삭제버튼 후 ', req.body.id)
  Visitor.deletedb(req.body.id, (result) => {
    res.send('삭제성공')
  })
}