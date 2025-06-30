

// interface user{
//     name:String,
//     password:String,
// }



// function abc (obj:user){
 
// }


//interface 

// interface user{
//     name:string,
//     pass:number
// }
// function abc(ojb:user){

// }
// abc({name:'lokesh',pass:123})



//extends interfaces

// interface user {
//     name:string,
//     pass:string,
// }
// interface admin extends user{
//     email:boolean
// }

// function abc (obj:user){
    
// }

// this is intersection

// type user ={
//     name:string,
//     email:string,
// }

// type admin  =user&{
//     pass:number
// }

// function abc(obj:user){

// }

//constructor  
// constructor class se phle chalta h 

// class buskitmaker{

//     constructor( public name:string, public size:number, public price:number){

//     }
// }

// let a= new buskitmaker("guddy",4,10)


//public 

// class bottlemaker{


//     public name:string
//     constructor(  name:string ,price:number){
//         this.name= name
//     }
// }
//   let b1 = new bottlemaker('milton',100)
//   b1.name = 'capstone'
//   // this can change only public can not change private 


// protected 

// class bottlemaker{

//   protected name='milton'

// }
// class webbottle extends bottlemaker{
//     public matter='depu'

//     changeName (){
//         this.name = "some other name"
//     }

// }
//  let a = new webbottle(); 
//  a.changeName()
 

//read only 

// readonly he help se hmm ek name ko he rakh skte h 

// class bottlemaker{

//     constructor (public readonly name:string,public color:string){

//     }
//     changeName(){
//         this.name ="depu"
//     }
// }
  
// let a = new bottlemaker('lokesh','red')
// a.changeName()


//getter and setter 
// class bottlemaker{

//     constructor (public _name:string,public price:number){

//     }

//     get name (){
//        return this._name
//     }
//     set name(value :string){
//     this._name =value;
//     }

// } 
//  let b1=   new bottlemaker('harsh',10)
//  b1.name
 
// function abc (name:string,age:number,cb:(arg:string)=>void){

//     cb('lokesh')
// }

// abc ('depu',20,(arg:string)=>{
//     console.log(arg);
// })


//default function
// function abc(name: string, age: number, gender: string = "not to be disclosed") {
//     console.log(name, age, gender);
// }
// abc ('lokesh',22,'male')
// abc("depu", 22);


//rest function 

// function friends(...arg:string[]){
//     console.log(arg[2]);

// }
// friends('lokesh','depu','golu')

function log <T> (a:T){
console.log(a)
}
log<number>(12)