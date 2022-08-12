 var process= require('process')
 var {add, sub,multi,divid}=require('./calcutere')
  
var ran=require('./random')
var cmd=process.argv

if(cmd[2]=='add'){
    // console.log(typeof(cmd[3]))
    console.log(add(+cmd[3],+cmd[4]))
}


if(cmd[2]=='sub'){
    // console.log(typeof(cmd[3]))
    console.log(sub(+cmd[3],+cmd[4]))
}
if(cmd[2]=='multi'){
    // console.log(typeof(cmd[3]))
    console.log(multi(cmd[3],+cmd[4]))
}
if(cmd[2]=='divid'){
    // console.log(typeof(cmd[3]))
    console.log(divid(+cmd[3],+cmd[4]))
}
if(cmd[2]=='random'){
    // console.log(typeof(cmd[3]))
    console.log(ran(+cmd[3],+cmd[4]))
}




