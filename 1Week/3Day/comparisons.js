function compare(one, two){
    console.log(`
    one has value ${one} and has a type: ${typeof(one)}
    two has value ${two} and has a type: ${typeof(two)}
        one == two returns: ${one == two}
        one === two returns: ${one === two}`);   
}

compare({name:'apple'}, {name:'orange'})
compare(5, '5')
compare(false, 'false')
compare(null, undefined)
compare(undefined, null)
compare(null, NaN)
compare(null, null)
compare(NaN, NaN)
compare({}, {})
compare('', null)
compare('','')
compare(1, true)
compare(0, -0)
compare(Infinity, -Infinity)
compare({},[])
compare('',[])
compare('string', ['string'])
compare(8 / 'string', NaN)
//How to check for nan???
//isNaN()