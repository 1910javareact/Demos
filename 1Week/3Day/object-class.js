//we can also use classes to make objects, this will look like java a decent amount

class cheese{
    maker
    type
    milkType
    constructor(maker, milkType, type){
        this.maker = maker
        this.milkType = milkType
        this.type = type
    }

    quack(){
        console.log('I am a duck');
        
    }

}

cheese.thorny = true

let cheddar = new cheese('PRR', {}, 'cow',()=>{console.log("A test")})

console.log(cheddar);
cheddar.quack()
