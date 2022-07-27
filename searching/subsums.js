// https://www.spoj.com/problems/SUBSUMS/
// this is a pseudo code



let arr = [1,-2,3];
let A = -1 ,B =2 ;
const left = arr.slice (0,arr.length/2);
const right = arr.slice(arr.length/2, arr.length);
const m = subsets(left); // implement sunsets function
const n = subsets(right);

m.sort((a,b) => a -b );
n.sort((a,b) => a -b );
let ans = 0;
for (let i = 0; i < m.length ; i++) {
   let lb = lowerbound(n, A-m[i]);
   let ub = lowerbound(n, A-m[i]);
   ans += (ub - lb);
}
console.log(ans);