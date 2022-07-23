
//   https://cses.fi/problemset/task/1633

function diceCombination(n) {
   if(n==0) return 1;
   let ans =0;
   for (let k=1 ;k<=6;k++) {
      if (n-k <0) continue;
      ans += diceCombination(n-k);
   }
   return ans;
}

console.log(diceCombination(3));