//Date()
//내장함수 객체
 let now= new Date()
 console.log(now)
 console.log(now.getFullYear(), 'Year')
 console.log((now.getMonth())+1, 'Month')
 console.log(now.getDate(), 'Day')
 console.log(now.getHours(), 'Hours')
 console.log(now.getMinutes(), 'Minutes')
 console.log(now.getSeconds(), "Seconds")
 console.log(now.getDay(), '0이면 일요일 ~ 6토요일 ');

 //random()
 console.log(`1~100사이 랜덤 값 ${Math.floor(Math.random()*100+1)}`)
 