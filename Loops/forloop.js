// example of sum

// var  pr = ((prompt('natural number add')))

// if(pr ===null){
//  console.log("Canclled");
// }else{
//     let n  = Number(pr)

//     if(isNaN(n)){
//       console.log('invalid')
//     }else
//     if(n>0){
//           var sum  =0;
//           for( var i=1; i<=n;i++){
//               sum =sum+i;

//           }
//           console.log(sum)
//     }else{
//       console.log('should be + and more than 0')
//     }
// }

// factorial example

// var  pr = ((prompt('natural number add')))

// if(pr ===null){
//  console.log("Canclled");
// }else{
//     let n  = Number(pr)

//     if(isNaN(n)){
//       console.log('invalid')
//     }else
//     if(n>0){
//           var fact  =1;
//           for( var i=1; i<=n;i++){
//               fact =fact*i;

//           }
//           console.log(fact)
//     }else{
//       console.log('should be + and more than 0')
//     }
// }

//  factorial number

// var pr = prompt("natural number add");

// if (pr === null) {
//   console.log("Canclled");
// } else {
//   let n = Number(pr);

//   if (isNaN(n)) {
//     console.log("invalid");
//   } else if (n > 0) {

//     for (var i = 1; i <= n / 2; i++) {
//       if (n % i === 0) {
//         console.log(i);
//       }
//     }
//     console.log(n);
//   } else {
//     console.log("should be + and more than 0");
//   }
// }

// Prime Number 
 // 1 KE JAGH 2 isleye lege kyki 1 sbko divide krta h 2 nhi krega 

var pr = prompt("natural number add");

if (pr === null) {
  console.log("Canclled");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("invalid");
  } else if (n > 0) {

    var Primehai = true;
    for (var i = 2; i <= n / 2; i++) {
      if (n % i === 0) {
        Primehai = false;
        break;
      }
    }
    console.log(Primehai);
  } else {
    console.log("should be + and more than 0");
  }
}
