const Comment = require('../model/Comments')
exports.main = (req, res) => {  //comments에 있는 모든 info를 가지고 다른데에서 main이라는 이름으로 쓸 수 있게끔
    console.log('controller> Cmain');
    res.render('index')
}

exports.comments = (req, res) => {
    console.log('controller> Cmain > comments');
    res.render('comments', {Comment.commentsInfos})
}

exports.comment = (req, res) => {
    console.log('controller > Cmain> comment');
    res.render('comment')
}


