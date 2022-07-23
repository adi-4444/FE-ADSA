// Check the X element is repeted 


// optimsed

function f(arr,x) {  // this function will check the X is present ot not
   let low = 0 , high =arr.length-1;
   while(low <= high) {
      let mid = low + Math.floor((high - low)/2);
      if(arr[mid]==x){
         return true;
      }
      else if (arr[mid] > x) {
         high = mid - 1 ;
      }
      else {
         low = mid + 1;
      }
   }
   return false;
}

function fduplicate(arr,x) {
   let low = 0 , high =arr.length-1;
   while(low <= high) {
      let mid = low + Math.floor((high - low)/2);
      if(arr[mid]==x){
         if (mid - 1 >=0 && arr[mid - 1] == x ) return true;
         if (mid + 1 <arr.length && arr[mid + 1] == x) return true;
         return false; // because x is not repeting
      }
      else if (arr[mid] > x) {
         high = mid -1
      }
      else {
         low = mid + 1;
      }
   }
   return false; // x is not present
}











// bruteforce

function f1(arr,x) {
   for(let i=0 ; i <arr.length; i++){
      if(arr[i]==x && arr[i-1]==x) return true;
   }
   return false;
}
function f2 (arr,x) {
   for(let i=0 ; i <arr.length-1; i++){
      if(arr[i]==x && arr[i+1]==x) return true;
   }
   return false;
}


