/**
 * Crypto는 단방향 암호화 구현 
 * createHash()
 */

const crypto= require('crypto'); //모듈 불러오기
const createHashedPw=(password)=>{
    return crypto.createHash("sha512").update(password).digest('base64')
}

//salt 안들어갔기 때문에 같은 비번이 들어와도 hash 값은 그대로다.
console.log(createHashedPw("1234"))
console.log(createHashedPw("1234"))


