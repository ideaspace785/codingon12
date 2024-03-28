//동기화 방식(Sync)
//순서대로 출력이 된다.
// console.log('Before')
// console.log('1')
// console.log('After')

//비동기화 방식(Async)
console.log('Before')
setTimeout(()=>{
    console.log(1)
},4000);
//3000=3초
console.log('After')



 