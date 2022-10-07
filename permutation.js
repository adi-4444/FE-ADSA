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
   let visited = {} 
   for(let i = start ; i < arr.length; i++) {
      if(!visited[arr[i]]) { //this condition is for not counting repeating elements
         visited[arr[i]] = true;
         swap(arr, i, start);
         premutation(arr, start+1);
         swap(arr, i, start);
      }

   }
}

premutation ([1,2,2],0)
