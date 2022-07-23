
// this is used for forward direction

function f(i,j,m,n) {
   if(i==m && j==n) return 1;
   if(i>m || j>n) return 0;
   
   return f(i+1,j,m,n) + f(i,j+1,m,n)
}

console.log(f(1,1,3,3));







// this is from backwords direction

function noOfWays(n, m) {
   if(n==1 || m==1) {
       return 1
   }
   return noOfWays(n, m-1) + noOfWays(n-1, m)
}
console.log(noOfWays(4, 4))

