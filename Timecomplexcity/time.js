



//   function time(n){

//     var i = n;
//     while (i>1){
//         console.log(i)

//         i = Math.floor(i/2)
//     }

//   }
//   time(10)


function space(n){

    var result = []
    for (let i= 1; i<=n; i =i*2){
        result.push(i)
    }
    return result
}
space(10)