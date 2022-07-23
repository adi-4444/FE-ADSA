function f(arr,x) {
   for(let i of arr) {
      if(arr[i] == x) return i;
   }
   return undefined;
}

console.log(f([4,5,2,7,0,1,3] , 7));