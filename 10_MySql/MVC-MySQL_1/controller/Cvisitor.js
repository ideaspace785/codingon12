
const Visitor = require('../model/Visitor')


//첫화면
exports.main=(req, res)=>{
    console.log('controller > Cvisitor>main');
    res.render('index')
}

//모든 방문자
exports.get_visitors=(req, res)=>{
    console.log('Visitor.getVisitor function called')
    Visitor.getVisitors(result =>{
        console.log('controller > Cvisitor> get_visitors');
        res.render('visitor', {data:result})
    })

}
//post visitor
exports.post_visitor=(req,res)=>{
    console.log('controller> Cvisitor> postVisitor', req.body);
    const {name, comment}= req.body;
    Visitor.postVisitor(req.body, (result)=>{
        res.send({id:result, name, comment})
    })

}
//get visitor
exports.get_visitor=(req,res)=>{
console.log('controller> Cvisitor> getVisitor', req.query.id);
Visitor.getVisitor(req.query.id, (result)=>{
    res.send(result)
})
}
//get visitor2
exports.get_visitor2=(req,res)=>{
    console.log('controller> Cvisitor> getVisitor2', req.query.id);
    Visitor.getVisitor(req.query.id, (result)=>{
        res.send(result)
    })
    }


// patch,visitor 1개 수정
exports.patch_visitor=(req,res)=>{
    console.log('controller> Cvisitor> patch_visitor', req.body);
    Visitor.patchVisitor(req.body, (result)=>{
        res.send('수정 성공')
    })
}
// patch,visitor 1개 삭제
exports.delete_visitor=(req,res)=>{
    console.log('controller> Cvisitor> deleteVisitor', req.query.id);
    Visitor.deleteVisitor(req.body, (result)=>{
        res.send('삭제 성공')
    })
}