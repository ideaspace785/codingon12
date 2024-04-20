/**
 * bcrypt
 * 비밀번호 암호화는 알고리즘 중 하나
 * 주로 강력한 보안 필요할 때 사용
 * blowfish 암호를 기반으로 설계된 단방향 암호화 함수
*/ 
const bcrypt = require('bcrypt');
const originalPW='1234';
const saltRounds=10;    //Salt round 수를 정의

//비번 해싱 함수
function hashPW(password){
    return bcrypt.hashSync(password, saltRounds)
}

//원본비밀번호와 해시된 비번이 일치하는지 확인하는 함수
function comparePW(password, hashedPW){
    return bcrypt.compareSync(password, hashedPW)
}
const hashedPW=hashPW(originalPW);
console.log(`해시된 pw: ${hashedPW}`)
const isMatch= comparePW(originalPW, hashedPW)
console.log(`originalPW===hashedPW,  ${isMatch}`)

const isMatch2= comparePW('5678', hashedPW)
console.log(`5678===hashedPW,  ${isMatch2}`)
