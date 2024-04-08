const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'user'
})

exports.allVisitorsList = (cb) => {
    conn.query('select * from visitor', (err, rows) => {
        console.log('select *');
        cb(rows)
    })
}

//폼에서 받은 데이터 추가하기
exports.postVisitor = (data, cb) => {
    const sql = 'insert into visitor (name,comment) values (?,?)'
    const values = [data.name, data.comment]
    conn.query(sql, values, (err, rows) => {
        console.log('폼에서 보낸 데이터 추가');
        cb(rows.insertId)
    })
}

// 폼에서 1명의 방문자 보기
exports.getShowAvisitor = (id, cb) => {
    console.log('model > Visitor.js > getShowAvisitor', id)
    const sql = 'SELECT * FROM kdt.visitor where id=?';
    conn.query(sql, id, (err, rows) => {
        if (err) throw err;
        console.log("rows ---", rows)
        cb(rows[0]);
    })
}

// 수정버튼 후 바뀐내용으로 변경
exports.patchContent = (data, cb) => {
    console.log('changeContent : ', data)
    const sql = "UPDATE visitor SET name =? , comment =? WHERE id = ?";
    const values = [data.name, data.comment, data.id]
    conn.query(sql, values, (err, rows) => {
        console.log('update > ', rows);
        cb(rows)
    })
}

//삭제버튼 후 데이터 삭제
exports.deletedb = (id, cb) => {
    console.log('deleteContent : ', id)
    const sql = "delete from visitor WHERE id = ?";
    conn.query(sql, id, (err, rows) => {
        console.log('delete > ', rows);
        cb(rows)
    })
}