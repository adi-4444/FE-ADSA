// finding the first element which is grater of given X

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

console.log(upperbound([1,3,4,6,6,7,8,9], 6));