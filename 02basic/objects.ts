// const User = {
//     name:"Aryan",
//     age:22,
//     isPaid:true
// }
// function CreateUser({name: string,isPaid: boolean}){
// // console.log(name)
// // return name
// }
type User ={
readonly name:string,
age:number,
gender?:string
}
function CreateUser({name,isPaid}:{name:string,isPaid:boolean}){}
function UpdateUser(user:User):User{
    return user}
CreateUser({name:"Aryan",isPaid:false})
UpdateUser({name:"aryan",age:22})
export{}