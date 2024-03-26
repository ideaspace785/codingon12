const eventEmitter= require('events')
//events는 class이다
const emitter= new eventEmitter();
emitter.on('mymsg', function(){
    console.log('Listener 호출')
})
emitter.emit('mymsg');