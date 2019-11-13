//in js, every value can be evaluated to true or false in a boolean context
//this means we can do some cool stuff

function tfCheck(a){
    if(a){
        console.log(`${a} is truthy`);
        
    }else{
        console.log(`${a} is falsey`);
        
    }
}

tfCheck(false)
tfCheck(null)
tfCheck(0)
tfCheck(undefined)
tfCheck(NaN)
tfCheck('')
tfCheck('False')
tfCheck({})
tfCheck([])
tfCheck(-Infinity)
