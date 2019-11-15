import {ISatellite} from './satellite-interface'
import sat from './satellite-class'

let hst = new sat('running out', 'LEO', 17000, (p:[number,number,number])=>{
    let a:[number,number,number]= [0,0,0]
    a[0] = p[0]-1
    a[1] = p[1]-1
    a[2] = p[2]-1
    return a 
})

console.log(hst.orbit())
console.log(hst.deltaV([17000,0,0]))