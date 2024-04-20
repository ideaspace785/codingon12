const crypto= require('crypto');

const password='1234'
const salt=crypto.randomBytes(128).toString('base64');
const hashPassword=crypto
.createHash("sha512")  //hash algorithm
.update(password+salt) //변환할 문자
.digest("base64")      //encoding algorithm

//salt 들어가면 같은 비번이 들어와도 hash 값은 계속 바뀐다.

console.log(hashPassword)
