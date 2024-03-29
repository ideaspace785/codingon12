
call('kim', function(name){
    console.log(name + '반가워');
    back(function(txt){
        console.log(txt + "을 실행했습니다.")
        hell(function(message){
            console.log('여기는 ', message);
        });
    });
});

function call(name){
    return new Promise((res, rej)=>{
        setTimeout(function(){
        console.log(name);
        res(name);
    },1000)
 })
}
function back(){
    return new Promise((res, rej)=>{
    setTimeout(function(){
        console.log('back');
        res('back');
    },1000)
})
}

function hell(){
    return new Promise((res, rej)=>{
        setTimeout(function(){
        res('callback hell');
    },1000)
   })
}
async function display(){
    const call1=await call("kim");
    console.log(`${call1} 반가워`)
    const back1= await back();
    console.log(`${back1}을 실행했습니다.`);
    const hell1= await hell();
    console.log('여기는 ', hell1);
}display();