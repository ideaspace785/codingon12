// view와 model을 연결하는 부분


const Comment= require('../model/Comments');
exports.main = (req, res)=>{
    console.log('controller > Cmain.js');
    res.render('index');
}

//다보여줌
exports.comments= (req, res)=>{
    console.log('controller > Cmain > comments', Comment.commentInfos());
    res.render('comments', {commentInfos:Comment.commentInfos()})
}

//개별적인것

exports.comment=(req, res)=>{
    console.log('req.params', req.params.id);
    const comments= Comment.commentInfos();
    //전체 내용
    const commentId= req.params.id; //자세히 보기 원하는 댓글의 아이디
    res.render('comment', {commentInfos: comments[commentId-1]}) //배열 인덱스 번호 위해
}