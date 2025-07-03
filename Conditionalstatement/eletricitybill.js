
//  // unit               price 
//       100                  4 unit
//       101-200              6 unit
//       201-400              8 unit
//   more than 400             13 unit 

   
 var unit  = Number(prompt(" Enter you eletricity unit")) //700

 let amount = 0;

 if(amount>400){
  amount = Math.floor(unit-400)*13 
   unit  = 400 
 }// 400
 if (amount>200 && amount<=400){
  amount  += Math.floor(unit-200)*8
 } //200
 if(amount>100 && amount<=200){
  amount  += Math.floor(unit-100)*6
 }//100 
 amount+=unit*4
 console.log(amount)
