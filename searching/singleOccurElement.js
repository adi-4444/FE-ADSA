// find the single occurence of element 

function f(arr) {
   let low = 0 , high = arr.length - 1;
   while (low<=high) {
      let mid = low + Math.floor((high-low)/2);
      if(mid -1 >=0 && mid + 1 < arr.length && arr[mid] != arr[mid+1] && arr[mid] != arr[mid-1]) {
         return arr[mid];  // this condition is if we are on the MID element
      } 
      if(mid == 0 && mid + 1 < arr.length && arr[mid] !=arr[mid+1]) {
         return arr[mid];  // [1,2,2,3,3,4,4]
      }
      if(mid == arr.length -1 && mid-1 >= 0 && arr[mid] !=arr[mid-1]) {
         return arr[mid];  // [1,1,2,2,3,3,4]
      }
      if((mid+1 < arr.length && arr[mid] == arr[mid+1] && mid%2 == 0) || 
        (mid-1 >= 0 && arr[mid-1] == arr[mid] && (mid -1)%2 == 0)) {
         // we are on left of unique element
         low = mid + 1;
        }
        else {
         // we are on rigt of unique element
         high = mid -1
        }
   }
   return undefined;
}

console.log(f([1,1,2,2,3,3,4]));







// using XOR
// function f1 (arr) {
//    let ans = 0 ;
//    for(let i of arr) {
//       ans = ans ^ arr[i]; 
//    }
//    return ans;
// }
// console.log(f1([1,1,3,3,4,5,5,6,6]));