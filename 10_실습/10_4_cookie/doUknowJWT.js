const jwt=require('jsonwebtoken')
// const payload={foo:"bar"};
// const secretKey='mySecretKey2';
// const jwtToken= jwt.sign(payload, secretKey);
// console.log(jwtToken)
const SECRET = '9PBYbnIhfXEVQdeXrvPWrX6ydDAJkIqVdfjfsahf'
const userInfo={id:'banana', pw:"1234", name:'홍길동', age:29}
const token=jwt.sign({email:"test@user.com"}, 'our_secret');
const verified=jwt.verify(token, 'our_secret');
console.log(verified)