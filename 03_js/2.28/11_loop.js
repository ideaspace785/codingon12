/**반복문 */
for(let i=1; i<10; i++ ){
    console.log("code: ", i);
}

for(let k=10; k>0; k--)
console.log('*')
// 10 *

for(let j=1; j <=50; j++ ){
    if(j%3==0){
        console.log(j);
    }
}

// ----------------for ~in ~of 차이---------------------------------
// for ~in
const foods= ['a','b','c'];
for(let i in foods)
    console.log(i, foods[i]);

// for ~of
const cars= ['a','b','c'];
for(let car of cars)
    console.log(car);