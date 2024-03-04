/**
 * reduce()
 * every()
*/find()
let arr1=[3,200,1,2,8,9]

arr1=arr1.filter(function(num){
    return num>3
})
console.log(arr1); 

let arr2=["apple", "banana", "grape"]
arr2=arr2.filter(function(fruit){
    return fruit.length>=6

});
console.log(arr2); 

//Find() 조건에 맞는 첫번째 요소를  찾는다. 
let arr3=[10,20,30,40]
let result=arr3.find(function(num){
    return num>20
})
console.log(result)

//filter.map() 함께 Chaining 방식
const arr4=[1,2,-3,4,5]
let printStr=arr4.filter(item => item > 0).map(item=>'<li>'+item+'</li>')
console.log(printStr)
document.write(printStr)

//every()
// const arr5=[1,2,-3] 
const arr5= [12,34,56,56]

let result1=arr5.every(function(item){
    return item>=0 //모든 요소가 0보다 큰지를 확인하는 메소드
})
console.log(result1)

//reduce: 합계를 갖는 변수 , 현재 값
let arr6=[3,4,5,6,7,8];
result2=arr6.reduce((acc, currentValue)=>{
    return acc+currentValue
},0)  //acc를 sum이라고 생각하고 뒤의 0은 sum=0 0으로 초기화한다고 생각히면 됨
console.log(result2)



const number=[1,1,1,2,3,4]

function countOcc(array, searchElem){
    let result3=array.filter(item=>item===searchElem);
    return result3.length;
}
console.log(countOcc(number, 0))