function swap (arr, i , j) {
   let temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

function premutation (arr, start) {
   if (start == arr.length) {
      //base case
      console.log(arr)
   }
   for(let i = start ; i < arr.length; i++) {
      swap(arr, i, start);
      premutation(arr, start+1);
      swap(arr, i, start);
   }
}

premutation ([1,2,3],0)
