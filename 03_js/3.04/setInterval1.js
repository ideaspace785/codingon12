let addNum=0;
let subNum=1000;
let increase=setInterval(function(){
    addNum++;
    console.log('addNum ++', addNum);

}, 1000)
clearInterval()
let decrease=setInterval(function(){
    subNum--;
    console.log("subNum --", subNum);

}, 1000)

