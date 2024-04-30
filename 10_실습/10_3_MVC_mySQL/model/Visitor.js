const mysql=require('mysql2')
//mysql에 접속에 대한 정보, 접속 만들기

const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"1234",
    database:"kdt"
})

//전체 방명록을 보여주는 쿼리
exports.allVisitorList=(cb)=>{
    conn.query(`SELECT * FROM visitor`, (err,rows)=>{
        console.log("SELECT * FROM visitor---->:",rows);
        cb(rows)
    })

}

//홈에서 보내온 데이터를 테이블에 추가하기
exports.postAddVisitor=(data,cb)=>{

    const sql="INSERT INTO visitor (name, comment) VALUES (?,?)";
    const values=[data.name, data.comment];

    conn.query(sql, values,(err,rows)=>{
        console.log("홈에서 보내온 데이터를 테이블에 추가하기")
        cb(rows.insertId)
    })
}

//1명의 방문자 보기
exports.getShowAvisitor=(id, cb)=>{
    console.log("1명의 아이디 보기: ", id)
    const sql="SELECT * FROM kdt.visitor where id=? ";
    conn.query(sql, id, (err, rows)=>{
        if(err) throw err;
        cb(rows[0])
    })
}

//수정버튼 클릭 한 뒤 내용이 바뀌는지
exports.patchContent=(data, cb)=>{
    const sql="UPDATE visitor SET name=?, comment=? WHERE=?";
    const values=[data.name, data.comment,data.id]
    conn.query(sql, values,(err,rows)=>{
        cb(rows)
    })
}

//목록 삭제
exports.deletedb=(id, cb)=>{
    const sql="DELETE FROM visitor WHERE id=?";
    conn.query(sql,id, (err, rows)=>{
        cb(rows)
    })

}