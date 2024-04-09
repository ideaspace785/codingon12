// view와 model을 연결하는 부분
const user= require('../model/Cuser');
exports.user=(req, res)=>{
    console.log('controller > Cuser.js');
    res.render('user', {userInfo: user.userInfo()})
    //페이지 렌더링하면서 데이터 전달 
}