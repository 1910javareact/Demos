//in typescript, params are fixed
//they must match number and types when you call a function

//the question mark on a param makes it optional
function doTest(a:number, b:number = 10, c?:string):void{
    console.log(a + b);
    console.log(c);
    
    
}

doTest(10)
doTest(0, 0)
doTest(0,0,'String')