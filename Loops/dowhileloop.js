
   // sum of number 
 
  
// var pr = prompt("sum of  number  add");

// if (pr === null) {
//   console.log("Canclled");
// } else {
//   let n = Number(pr);

//   if (isNaN(n)) {
//     console.log("invalid");
//   } else if (n > 0) {

//     var sum =0
//      while(n>0){
//         var rem  = n%10
//         sum  = sum+rem
//         n = Math.floor(n/10)
//      }
//      console.log((sum))

//   } else {
//     console.log("should be + and more than 0");
//   }
// }


   // reverse the number 



var pr = prompt("sum of  number  add");

if (pr === null) {
  console.log("Canclled");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("invalid");
  } else if (n > 0) {

    var rev =0
     while(n>0){
        var rem  = n%10
        rev  = rev*10+rem;
        n = Math.floor(n/10)
     }
     console.log((rev))

  } else {
    console.log("should be + and more than 0");
  }
}