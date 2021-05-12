const socket = require('./socket');

global.count = 0 ;

exports.live = (req,res,next) =>{
    setInterval(()=>{
        global.count = global.count +1 ;
        socket.socketConnection.socket.emit('count event',global.count);
    },2000);
}