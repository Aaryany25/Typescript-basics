// class User{
//     email:string
//     name:String
//     constructor(email:string,name:string){
//         this.email= email,
//         this.name = name
//     }
// }
class User {
    private city:string ="Mumbai"
    constructor( public email: string, public name: string) {
        
    }
    // How to Access the Private variables using Getter
    get City():string{
        return this.city
    }
    //Setting the Variables 
    //Set does not have the return type 
    set City(city){
        this.city = "Pune"
    }

}
const aryan = new User("a@a.com", "aryan")