const models = require('../models/index')
const User = models.User;
exports.main=(req, res) =>{
}
exports.get_signup=(req, res) =>{
    res.render('signup')
}
exports.get_signin=(req, res) =>{
    res.render('signin')
}
// 회원가입요청
exports.post_signup=(req, res) =>{
 console.log('controller > Cuser.js > post_signup')
 User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw
 }).then( result =>{
    console.log('Created >', result)
    res.send(result)
 })
}
// 로그인 요청
exports.post_signin = (req, res) => {
    console.log('post방식으로 signin',req.body);
    User.findOne({
        raw: true,
        where: {
            userid: req.body.userid,
            pw: req.body.pw
        }
    }).then((result) => {
        console.log('findOne', result);
        if (result) {
            res.send({ isLogin: true, userInfo: result });
        } else {
            res.send({ isLogin: false });
        }
    })
}
// 회원정보 수정페이지
exports.post_profile= (req,res)=>{
    console.log('post방식으로 profile',req.body);
    User.findOne({
        where :{ userid: req.body.userid}
    }).then(result =>{
        console.log('findOne :post_profile > ', result)
        if(result)   res.render('profile', {data: result})
    })
}
// 회원정보수정
exports.edit_profile =(req,res)=>{
    console.log('controller > edit_profile' , req.body);
    User.update({
        name:req.body.name,
        pw: req.body.pw
    },{
        where : {id:req.body.id}
    }).then( result =>{
        res.send('회원정보수정')}
    )
}
//회원정보 삭제
exports.delete_profile =(req,res)=>{
    console.log('controller > delete_profile' , req.body);
    User.destrory({
        where : {id:req.body.id}
    }).then( result =>{
        res.send({deleteId: req.body.id})}
    )
}