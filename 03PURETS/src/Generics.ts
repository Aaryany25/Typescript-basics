function IndentityOne(val:number):number{
return val
}

function IndentityTwo(val:any):any{
    return val
}
function IndentityThree <Type>(val:Type):Type{
    return val
}
IndentityThree(3)

interface Bottle{
    brand:String ,
    type:number
}
function GymBottle<Bottle>(val:Bottle):Bottle{
    return val
}
// Generics in  Arrow functions
const ArrowFunction  = <T>(val:T[]):T=>{
const myIndex = 4 
return val[myIndex] 
}