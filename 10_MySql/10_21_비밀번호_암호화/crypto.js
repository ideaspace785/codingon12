const crypto= require('crypto');

//RandomBytes 128바이트 생성
crypto.randomBytes(128, (err, buf)=>{
    if(err){
        console.log("err:", err)
        return;
    }
    /////console.log("The random data is : ", buf) 
    //buf ASCII code로 나옴 : <Buffer d3 3e 98 c3 5b 42 3a 95 b7 fa 7a f0 bc e7 d7 b8 42 b8 e7 10 da 58 dc 49 d6 9b f8 b9 65 90 99 eb 85 71 77 30 6f ea c0 d5 a0 26 5d 7e fb 75 11 e4 68 50 ... 78 more bytes>
    
    console.log("The random data is : ", buf.toString("base64")) 

})