 const rr= require('crypto')
const { ftruncate } = require('fs')
const { func } = require('prop-types')
 


function Ran(a,b){


    console.log(rr.randomInt(a,b))
}
 
module.exports=Ran