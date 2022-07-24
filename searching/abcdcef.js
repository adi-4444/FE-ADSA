// https://www.spoj.com/problems/ABCDEF/

function lowerbound (arr,x) {
   let start = 0, end = arr.length-1;
   let ans = -1;
   while (start <= end) {
      let mid = start + Math.floor ((end - start) / 2);
      if(arr[mid] >= x) {
         // current index can be one of our possible ans
         ans = mid;
         end = mid - 1;
      }
      else {
         start = mid + 1;
      }
   }
   return ans;
}

function upperbound (arr,x) {
   let start = 0, end = arr.length-1;
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

let arr =[5,7,10]
let lhs = [] , rhs = [];
for (let i = 0; i < arr.length; i++) {
   for(let j=0;j<arr.length; j++) {
      for (let k =0 ; k =arr.length; k++) {
         lhs.push((arr[i]*arr[j]) + arr[k])
         if(arr[i] != 0) {
            rhs.push((arr[i])*(arr[j] + arr[k]));
         }
      }
   }
}

lhs.sort((a,b)=>a-b);
rhs.sort((a,b)=>a-b);
let ans = 0;
for(let i = 0; i<lhs.length;i++) {
   let ub = upperbound(rhs, lhs[i]);
   let lb = lowerbound(rhs, lhs[i]);
   ans += (ub - lb);
}
console.log(ans)