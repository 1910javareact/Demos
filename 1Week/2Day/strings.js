//we have 3 ways to make strings

let s1 = "Sam says, \"js is the best\""//this is how to escape a character
let s2 = 'Josh thinks, "Boy js is rad"'//see the difference

let template = `Template literals allow us to use
multi line strings
they also allow for string interpolation
this means we can directly embed js values into a string
we do this be using $ and {} next to each like so
s1 = ${s1}
s2 = ${s2}
random number = ${Math.floor(Math.random()*5 + 1)}`

console.log(template);
console.log(template);
console.log(template);
console.log(template);