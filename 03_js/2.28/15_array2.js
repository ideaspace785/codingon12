let arr=[1,2,3,4,5]
arr[5]=6;
console.log(arr)

arr.push(7)
console.log(arr)

arr.pop();
console.log(arr)

arr.shift()
console.log(arr)

arr.unshift(100)
console.log(arr)

console.log("---------------------------")
let arr1=[1,2,3,4,5]
// console.log(arr1.slice(2,1))
// console.log(arr1)
let x=arr1.slice(2,0,'a','b')
console.log(arr1)

// array empty 로 만들기----------------
let num=[10,20,30]
num=[];
// 또는 
num.length=0;

let num2=[10,20,30]
// num2.forEach(function(i)){
//     console.log(i)
// }
num2.forEach(i=>console.log(i))
num2.forEach((i, index)=>console.log(i, index))

// 배열 합치기
let num3=[1,2,3]
let num4=[4,5,6]
let combined=num3.concat(num4)

// 더 간단한 방법
let combined2=[...num3, ...num4]
console.log(combined2)
let combined3=[...num3,'a', 'b', ...num4]
console.log(combined3)

// Array sort . 한자리수만 정렬
// arr.sort() 올림차순
// arr2.reverse() 내림차순


let arr2=[5,34,7,5,3,1,0,99]
// Array sort 2자릿수 올림차순 정렬
arr2.sort((a,b)=>{
    return a>b? 1: -1})


// Array sort 2자릿수 내림차순 정렬
arr2.sort((a,b)=>{
    return a>b? -1: 1})
console.log() 


let str="test"
console.log(str.split(''))
let arr3=['c', 'o', 'm']
console.log(arr3.join('-'))



