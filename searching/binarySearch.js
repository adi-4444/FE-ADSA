function binarySearch(arr,x) {
   let start=0 , end= arr.length-1;
   while(start <=end) {
      //let mid=Math.floor((start=end)/2);
      let mid = Math.floor(start + (end - start) / 2);
      if(arr[mid]==x) return mid;
      if(arr[mid] > x){
         // reduce to the left
         end = mid - 1;
      }
      else {
         // reduce to the right
         start = mid + 1;
      }
   }
   return undefined;
}

console.log(binarySearch([1,3,4,5,7,8,9], 4));