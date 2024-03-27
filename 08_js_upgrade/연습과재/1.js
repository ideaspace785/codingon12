//1. -------------------------------------------------------
// let salaries = { //salaries는 array가 아닌 Object
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
//   function sumSal(salaries){
//     let sum=0;
//     for(salary of Object.values(salaries)){
//       sum+=salary;
//     }
//     console.log(sum);
//   }
//   sumSal(salaries);

//2. -------------------------------------------------------
// let address ={
// street : '세종대로',
// city :'서울시',
// zipcode : '120'
// };
// // -------------FACTORY FUNCTION
// function factory(street,city,zipcode){
//   return {street, city,zipcode}
// }
// let add1=factory('세종대로','서울시', '120');
// console.log(add1)
// //또는 
// console.log(factory('세종대로','서울시', '120'))


// // -------------CONSTRUCTOR FUNCTION
// function constructor(street,city,zipcode){
//   this.street=street;
//   this.city=city;
//   this.zipcode=zipcode;
// }
// let add2= new constructor('세종대로','서울시', '120');
// console.log(add2);
// //또는 
// console.log(new constructor('세종대로','서울시', '120'))

//3. -------------------------------------------------------
//  title, body, author, views,comments( contents, likes), isSale 의 속성을 갖는 post오브젝트를 생성
// let post={
//   title:'hello',
//   body:'Lorem',
//   author:'Nomin',
//   views: 10,
//   comments:{
//     contents:'coding', 
//     likes: 5 
//   },
//   isSale: true
// }
// console.log(post)
//4. -------------------------------------------------------
// var min=prompt("Enter min number")
// var max=prompt("Enter max number")
// let resultArr=[];
// if(min>=max){
//   console.log("Check the numbers again");
// }else{
//   for(let i=min; i<=max; i++){
//     resultArr.push(i);
//   }
//   console.log(resultArr);
// }
//5. -------------------------------------------------------
const array=[10,2,3,4,10,1,1,1,1,1];

// function counter(array){
// const result = {};
// array.forEach((x) => { 
//   result[x] = (result[x] || 0)+1; 
// });
// let sum=0;
// for(value of Object.values(result)){
//   if(value>1){
//     sum+=value;
//   }
// }
// return sum;
// }
// console.log(counter(array));
//6. -------------------------------------------------------
// var sale=prompt('0~100 사이의 할인율을 입력하세요');
// var price1=prompt("가격을 입력하세요");
// var price3=prompt("가격을 입력하세요");
// var price2=prompt("가격을 입력하세요");
// price1=parseInt(price1);
// price2=parseInt(price2);
// price3=parseInt(price3);
// sale=sale/100;
// let sum=price1+price2+price3;
// let result=sum-(sum*sale);
// console.log(result);

// // solve2
// function saleCalc(sale, ...prices){
//   const total=prices.reduce((a,b)=> a+b)
//   return total *(1-sale);
// }
// console.log(saleCalc(0.1, 100, 100,100));
// const circle ={
//   radius :2,
//   get area() {
//      return Math.PI * this.radius * this.radius;
//   }
// }
// console.log(circle.area)
