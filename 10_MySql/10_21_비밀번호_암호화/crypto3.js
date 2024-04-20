const crypto= require('crypto');
/**
 * pbkdf2Sync(비빌번호, salt, 반복횟수, 키의 길이, 알고리즘)
 * 비밀번호 기반 키도출함수 . 주로 비번 저장시 사용
 * buffer 형식의 데이터를 변환 , toString()을 사용해서 문자열로 사용한다
 * 
 * 1. 단방향 암호화된 생성함수
 * 2. 임의의 솔트 값을 생성
 * 3. 해당 솔트와 제공된 비번 기반으로 해시 생성
 * 4. 생성된 솔트와 해시를 변환
 */

function saltAndHashPw(password){
    const salt= crypto.randomBytes(16).toString('base64');  //임의의 salt 생성
    const iteration=100;    //해시 함수를 반복할 횟수
    const keylen=64;    //생성된 키의 길이
    const algorithm="sha512";   

    const hash=crypto.pbkdf2Sync(password,salt, iteration,  keylen, algorithm ).toString("base64")

    return {salt, hash}

}
const password="1234";
const {salt,hash}=saltAndHashPw(password);
console.log(`비번 암호화에 쓰인 salt: ${salt}, 암호화 된 hash: ${hash}`);


/**
 * 암호 비교 함수 
 * inputPW = 제공된 비번, salt, hash를 기반으로 새로운 해시를 생성
 * 새로운 해시에 와서 저장된 savedHash를 비교하여
 * 제공된 비번과 원래 비번이 같으면 두 해시 값도 일치
 * 
 */
function checkPW(inputPW, savedSalt, savedHash){
    const iteration=100;    //해시 함수를 반복할 횟수
    const keylen=64;    //생성된 키의 길이
    const algorithm="sha512"; 
    const hash=crypto.pbkdf2Sync(inputPW,savedSalt, iteration,keylen,algorithm).toString("base64")  
    return savedHash===hash
}
//const password="1234"; 위에서 선언 된 password value 쓸게요~~~
//비밀번호 확인
const inputPW='1134';
const isMatch= checkPW(inputPW, salt,hash)
console.log(`비밀번호 일치:  ${isMatch}`)
