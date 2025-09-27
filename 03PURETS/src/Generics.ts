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
