let hour=14;
if(hour >= 6 && hour < 12){
console.log("오전");
}else if (hour>=12 && hour<18){
    console.log("good afternoon");
}
else {
    console.log("오후");
}
// switch 문
/**switch(variable)
 * case: 코드; break;
 * case: 코드; break;
 * case: 코드; break;
 * ...
 * default: 코드
 */
let role="guest";
switch(role){
    case 'guest':
        console.log("guest");
        break;
    case 'master':
            console.log("not guest");
            break;
    default:
        console.log("who?");
}
if(role=="guest"){
    console.log("게스트입니다");
}
else if(role=="master"){
    console.log("마스터입니다")
}else{ console.log('누구세요?');
}

