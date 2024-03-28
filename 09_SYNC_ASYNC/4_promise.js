// function callPromise(){
//     let name="홍길동"
//     return name;
// }
// let myname=callPromise();
// console.log(myname);

function callPromise(name){
    return new Promise((res, rej)=>{
       setTimeout(()=>{
        res(name)
       },1000)
    });
}

function backPromise(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('backPromise is back')
        }, 1000)
    })
}
function hellPromise(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('What the Hell')
        }, 1000)
    })
}
//--------------------------------------------------------------------
// callPromise('kim').then(function(name){
//     console.log(`${name} 반가워`)
//     return backPromise()
// }).then(function(txt){
//     console.log(`${txt}을 실행했습니다.`)
//     return hellPromise();
// }).then(function(msg){
//     console.log(msg)
// })

//위의 코드를 async await을 이용해서 더 깔끔하게 작성하기

//async ~await  사용
 async function exec(){
    const name=await callPromise('kim')
    console.log(`${name} 반가워`)
    const txt=await  backPromise();
    console.log(`${txt}을 실행했습니다.`);
    const msg=await hellPromise();
    console.log(msg);

}
exec();
//--------------------------------------------------------------------
