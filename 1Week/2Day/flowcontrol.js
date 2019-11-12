//this is flow control, it is going to be very similar to java
//we still have if else and else if
//we still for while, do while
//out enhanced for loop is a little different
//we also get another for loop unique to js

let a = false
if(a){
    console.log('this won\'t happen');
    
}else{
    console.log("this is a normal if else statement");
}

let num = -10

if(num > 0){
    console.log('positive');
    
} else if(num == 0){
    console.log("is zero");
    
}else {
    console.log("is negative");
    
}

//a ternary is a short hand, for an if else statement
//it uses a ? and a :
//format is expression ? if true : if false

(false) ? console.log('true') : (true) ? console.log('true') :(false) ? console.log('true') : console.log('false');
//PLease! Don't nest Ternarys! thank you

//we also have switch statements, they look almost exactly like java
let key = "a"
switch (key) {
    case 'a':{
        console.log("this is a");
        break;
    }
    default:
        console.log('this is not a');
        break;
}

//a js for loop is almost word for word the same
//only one word is different, can you guess which?
for(let i = 0; i < 10; i++){
    console.log(`i = ${i}`);
    
}

//while loops are also the same as java
let i = 0

while(i < 100){
    console.log(`i mod 5 = ${i%5}`);
    i++
}


