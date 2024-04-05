//model에 있는user를 불러들이기

const user=require('../model/Cuser');

exports.user=(req, res)=>{
    console.log('controlller > Cuser');
    res.render('user')
}