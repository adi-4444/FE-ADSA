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

console.log(lowerbound([1,3,4,6,6,7,8,9], 6));