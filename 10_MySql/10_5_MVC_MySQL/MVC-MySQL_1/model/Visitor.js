const mysql= require('mysql2');
const conn= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'kdt'
})

exports.getVisitors=(cb)=>{
    conn.query(`select * from visitor`, (err, rows)=>{
        if(err) throw err;
        console.log("-22222222222---------")
        console.log("model > Visitor.js > getvisitors", rows);
        cb(rows);
    })
}
//새로 작성한 것
exports.postVisitor=(data, cb)=>{
    console.log("model> Visitor.js> postvisitor")
    const sql="INSERT INTO visitor (name, comment) VALUES (?, ?)";
    conn.query(sql, values, (err, rows)=>{
        if(err)throw err;
        console.log('1-------------')
        cb(rows.insertId)
    })
}

exports.getVisitor=(id, cb)=>{
    console.log("model> Visitor.js> getvisitor")
    
    const sql="SELECT * FROM visitor WHERE id=?";
    conn.query(sql,[id], (err, rows)=>{
        console.log('2--------------------')
        cb(rows[0])
        
    })
}
exports.patchVisitor=(data, cb)=>{
    
    const sql="UPDATE visitor SET name= ?, comment=? , WHERE id=?";
    conn.query(sql,values, (err, rows)=>{
        console.log('3--------------------')
        cb(rows)
    })
    
}
exports.deleteVisitor=(id, cb)=>{
    
    const sql="DELETE visitor WHERE id=?";
    conn.query(sql,[id], (err, rows)=>{
        console.log('4--------------------')
        cb(rows)
    })
}

