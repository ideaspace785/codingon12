/**
 * Buffer 란 
 * 파일을 읽어드리는 방법 중 하나 
 * 버퍼링은 파일을 준비하는 과정으로 생각하면 된다.
 * 버퍼는 최소한의 데이터를 모아놓은 장소
 * 읽는 시간이 오래걸리면 우리는 버퍼링 걸렸다고 표현하기도 한다.
 * 
 * 
 * 
 * Buffer에 사용되는 메소드
 * alloc() 빈버퍼를 생성
 * toString() 버퍼를 문자열로 생성
 * from() 문자열을 버퍼로 변환
 */


//파일 모듈을 읽어서  버퍼에 들어간 것들을 확인할 수 있다
// const fs=require('fs');  //file module
// const data=fs.readFileSync('./demo.txt')
// console.log(data)



//버퍼의 크기 할당    1글자는 1byte=4bit buyu 00
// const emptyBuf= Buffer.alloc(10) //10byte
// console.log(emptyBuf)

const strBuf=Buffer.from("Ahelloworld")
console.log(strBuf)
console.log(strBuf.toString())


