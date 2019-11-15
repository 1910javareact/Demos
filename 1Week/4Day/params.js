//in js I can call any function with any number of params
//this means, we can;t do any overloading in js

//we can add default values to params by using the = operator
function doTest(a, b = 10, ...params){//...params is going to give us all of the other params as an array
    console.log(a + b);
    console.log(params)
}
// function doTest(a,b,c){

// }

doTest();
doTest(0);
doTest(0,1);
doTest(0,1,1,4);
