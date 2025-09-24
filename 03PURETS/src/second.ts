//Interface are Like the giudeLines ypu have to folow while using them 

interface TakePhoto{
    camera:string,
    filter:string,
    burst:number 
} 
//You have to Use all the variables mentioned in the Interface 
class Instagram implements TakePhoto{
constructor(
    public camera :string,
    public filter:string,
    public burst:number
){

}
}
//you can add your own variables to it but you must contain all the variables implemented from the interface 
class Youtube implements TakePhoto{
    constructor(
    public camera :string,
    public filter:string,
    public burst:number,
    public counts : number //Not in the interface 
){

}
}