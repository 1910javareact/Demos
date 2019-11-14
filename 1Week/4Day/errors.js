


function fib(n){
    //you should always do input checking when it comes to js functions
    if(isNaN(n)){
        throw "Try again, this time with something thats actually a number"
    }
    if(n < 0){
        throw new Error('N must be greater than 0')
    }
    if(n === Infinity){
        throw false
    }
    //this is a base case
    if(n === 0){
        return 0
    }
    //also a base case
    if(n === 1){
        return 1
    }
    return fib(n-1) + fib(n-2)
}

try{
console.log(fib('This string'));
} catch(e){
    console.log(e);
    
}
try{
    console.log(fib(-10));
    } catch(e){
        console.log(e);
        
    }
try{
    console.log(fib(Infinity));
    } catch(e){
        console.log(e);
        
    }
    
console.log(fib(6));
