// Code to print All Triplets


let arr = [3,2];
for (let i=0 ; i< arr.length; i++) {
   for(let j=0; j < arr.length; j++) {
      for(let k = 0; k < arr.length; k++) {
         console.log("(" , arr[i],arr[j],arr[k],")");
      }
   }
}