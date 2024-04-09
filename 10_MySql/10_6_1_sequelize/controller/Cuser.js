const models=require('../models/index');
const User=models.User;

exports.get_signup=(req,res)=>{
    res.render('signup')
}

exports.get_signin=(req,res)=>{
    res.render('signin')
}

//회원가입 요청
exports.post_signup=(req,res)=>{

}

//로그인 요청
exports.post_signin=(req,res)=>{

}

//회원가입 수정 페이지
exports.post_profile=(req,res)=>{

}

//회원정보 수정
exports.edit_profile=(req,res)=>{

}

//회원정보 삭제
exports.delete_profile=(req,res)=>{

}
