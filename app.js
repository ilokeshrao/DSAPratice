 
//  let prompt =  require("prompt-sync")();
//  let n = prompt(" Enter the number of value")

//  for ( let i = 1; i<=n; i++){
//     for(let j= 1; j<=i; j++){
//         process.stdout.write(" * ")
//     }
//     console.log()
//  }

// let prompt =  require("prompt-sync")();
// let n = prompt(" Enter the number of value")

// for ( let i = 1; i<=n; i++){
//    for(let j= 1; j<=i; j++){
//        process.stdout.write(j+" ")
//    }
//    console.log()
// }

// let prompt =  require("prompt-sync")();
// let n = prompt(" Enter the number of value")

// for ( let i = 1; i<=n; i++){

//     let abc  = 65
//    for(let j= 1; j<=i; j++){
//        process.stdout.write(String.fromCharCode(abc)+" ")
//        abc++
//    }
//    console.log()
// }



 //     *   *   *  *  *
//      *   *  *  *
//      *   *   *  
//      *   *   
//      * 

//  let prompt =  require("prompt-sync")();
//  let n = prompt(" Enter the number of value")

//  for ( let i = 1; i<=n; i++){
//     for(let j=1; j<=n-i+1; j++){
//         process.stdout.write(" * ")
//     }
//     console.log()
//  }

//                     *
//                 *   * 
//             *   *   *
//         *   *   *   *
//    *    *   *   *   *
    
// let prompt = require("  -sync")();
// let n = Number(prompt("Enter the number of value: ")); 

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write("  "); // spaces for pyramid shape  two time space is given 
//   }
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* "); 
//   }
//   console.log(); 
// }

      






// //    X pattern ke leye //

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter the number of value: ")); 

// for (let i = 1; i <= n; i++) {
//     for (j= 1; j<=n; j++)
//     if(i==j || i+j==n+1){
//         process.stdout.write("* ")
//     }else {
//         process.stdout.write("  ")

// }
//   console.log(); 
// }















    //  V KE LEYE PATTERN CODE

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter the number of value: ")); 

// for (let i = 1; i <= n; i++) {
//     for (j= 1; j<= 2*n; j++)
//     if(i==j || i+j==2*n+1){
//         process.stdout.write("* ")
//     }else {
//         process.stdout.write("  ")

// }
//   console.log(); 
// }



    // Triangle Pattern  reverse
// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter the number of rows: "));

// for (let i = n; i >= 1; i--) {
//   for (let j = 1; j <=n-i; j++) {
//     process.stdout.write(" ");
//   }
//   // Print stars with space
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

    // Triangle Pattern 


let prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number of rows: "));

for (let i = 1; i <=n; i++) {
  for (let j = 1; j <=n-i; j++) {
    process.stdout.write(" ");
  }
  // Print stars with space
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}




