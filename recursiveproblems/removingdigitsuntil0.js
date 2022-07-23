//   https://cses.fi/problemset/task/1637

// How many steps are required to make the number equal to 0?

function getDigits(n) {
   const result = [] ;
   while(n>0) {
      let digit = n%10;
      result.push(digit);
      n=Math.floor(n/10);
   }
   return result;
}

function f(n) {
   if(n==0) return 0;
   if(n<10) return 1;
   const digits = getDigits(n)
   let ans = Infinity;
   for(let i=0;i<digits.length; i++) {
      if(digits[i]==0) continue;
      ans =Math.min(ans,f(n-digits[i]));
   }
   return 1+ans
}

console.log(f(59));