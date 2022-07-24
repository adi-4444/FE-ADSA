//    https://codeforces.com/contest/1324/problem/D



function upperbound (arr,x,st) {
   let start = st, end = arr.length-1;
   let ans = arr.length;
   while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);
      if(arr[mid]<=x) {
         // discard left half
         start = mid + 1;
      }
      else {
         // element at mid can be a potential answer
         ans = mid;
         end = mid - 1; // go and find something even better on left side
      }
   }
   return ans;
}

let a = [4,8,2,6,2]
let b = [4,5,4,1,3]
let c = []
for (let i = 0 ; i<a.length; i++){
   c.push(a[i] -b[i]);
}
c.sort ((a,b)=>a-b);
let ans = 0;
for(let i = 0 ; i< c.length - 1 ; i++) {
   let ub=upperbound(c,-c[i],i+1)
   ans += c.length - ub;
}
console.log(ans)