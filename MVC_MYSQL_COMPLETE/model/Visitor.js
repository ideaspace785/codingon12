const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'user'
})

exports.allVisitorsList = (cb)=>{
    conn.query('select * from visitor', (err,rows)=>{
        console.log('select *');
        cb(rows)
    })
}

//폼에서 받은 데이터 추가하기
exports.postVisitor = (data, cb)=>{
    // const sql = 'INSERT INTO visitor (name , comment) VALUES (?,?)'
    // const values = [data.name, data.comment]
    // alert(data.name)
    // conn.query(sql, values, (err,rows)=>{
    //     console.log('폼에서 보낸 데이터 추가');
    //     cb(rows.insertId)
    // })
    const sql ="INSERT INTO visitor (name, comment) VALUES ( ? , ? )"
    const values =[data.name, data.comment]
   conn.query(sql, values, (err,rows)=>{
     console.log('폼에서 보내준 데이터를 테이블에 추가', rows)
     cb(rows.insertId)
   })
}

// 폼에서 1명의 방문자 보기
exports.getShowAvisitor = (id, cb)=>{
    console.log('model > Visitor.js > getShowAvisitor', id)
     const sql = 'SELECT * FROM user.visitor where id=?';
     conn.query(sql, id, (err, rows) => {
        if (err) throw err;
        console.log("rows ---",rows)
        cb(rows[0]);
    })
}

// 수정버튼 후 바뀐내용으로 변경
exports.patchContent = (data, cb)=>{
    console.log('changeContent : ', data)
    const sql ="UPDATE visitor SET name =? , comment =? WHERE = ?";
    const values=[data.name, data.comment, data.id]
    conn.query(sql, values, (err, rows)=>{
       console.log('update > ', rows);
       cb(rows)
    })
}