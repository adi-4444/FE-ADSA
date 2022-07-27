 // Find the square root of x

// Brute Force
function f(x) {
   let ans = 0;
   for (let i=0; i<x; i++) {
      if(i*i <= x) ans = i;
      else break;
   } 
   return ans
}
//console.log(f(82))

//  optimise

function sqrt (x) {
   let low = 1 , high = x-1;
   let ans = -1;
   while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (mid * mid == x) return mid;
      if(mid * mid <= x){
         ans = mid;
         low = mid + 1;
      } else {
         high = mid - 1;
      }
   }
   return ans
}
console.log(sqrt(85))