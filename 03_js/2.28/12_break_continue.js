//break : for문 벗어나게 한다.
//
for(let i=0; i<10; i++){
    if(i==5){
        break;
    }
    console.log(i)
}
console.log('-------------------continue문');
for(let i=0; i<10; i++){
    if(i==5){
        continue;
    }
    console.log(i)
}