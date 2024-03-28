console.log("Before")

getUser(1, function(user){
    console.log('User', user)
})
console.log("After")

//여기 abc는 콜백함수, 가장 기초적인 콜백의 형태 
function getUser(id, abc){
    setTimeout(()=>{
        console.log('Reading data ...');
        abc(
            {id:id, 
            gitHubUserName: 'Hong'
        })
    }, 2000)
}

//function(a, [b, c, d])
// 나머지는 