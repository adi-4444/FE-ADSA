// find the repeting element 

function f(arr) {
   let low = 0 , high = arr.length - 1 ;
   while(low<=high) {
      let mid = low + Math.floor ((high-low)/2)
      if(mid + 1 < arr.length && arr[mid] == arr[mid+1]) {
         return arr[mid];
      }
      if (arr[mid] == mid -1) {
         // we are on right side of repeting element
         high = mid - 1;
      }
      else {
         // we are on the left side of repeating element
         low = mid + 1;
      }
   }
   return undefined;
}

console.log(f([1,2,3,4,5,6,6,7]));