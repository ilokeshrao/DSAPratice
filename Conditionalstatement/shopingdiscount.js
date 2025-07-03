
    //  //
    //   0 -5000  = 0%
    //   5000 - 7000  = 10%
    //   7000 - 9000 = 20%
    //    more than 9000 = 30%
       
    /// shoping discount code 

let amount  = Number(prompt(" enter your final amount"))

let dis  = 0;
if(isNaN(amount)){
    console.log('wrong number');
}
if(amount>=0 && amount<= 5000){
    dis  =0;
} else if(amount>=5000 && amount<=7000){
   dis =10
}
else if(amount>=7000 && amount<=9000){
   dis  =20
}
else if(amount>=9000){
   dis =30
}
console.log(amount - Math.floor((dis*amount)/100));

