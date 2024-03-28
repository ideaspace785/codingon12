// //1.
// const p=new Promise((res, rej)=>{
//     res(1)
//     // rej(new Error('message'))

// })
// // p.then((result)=>{console.log('결과는: ', result)})
// //then 은 성공했을때만 쓴다.
// p.then(result=>{console.log('결과는: ', result)})

//2.
// const p= new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res(1);
//     },2000)// 2초후에 결과값을 돌려준다. 
// })
// p.then(result=> console.log('2초 후의 결과는: ', result))


///3.
const p= new Promise((res, rej)=>{
    setTimeout(()=>{
        rej(new Error('holy'))
    },2000)// 2초후에 결과값을 돌려준다. 
})
p
.then(result=> console.log('2초 후의 결과는: ', result))
.catch(err=> console.log('err 발생', err.message));
