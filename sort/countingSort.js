function countingSort(arr) {
  let maxElement = Math.max(...arr); // O(n)
  let freq = Array(maxElement + 1).fill(0); // O(1)
  for (let i = 0; i < arr.length; i++) {
    //O(n)
    freq[arr[i]]++;
  }
  let k = 0;
  for (let i = 0; i < freq.length; i++) {
    // O(maxElement + n)
    while (freq[i] > 0) {
      arr[k] = i;
      k++;
      freq[i]--;
    }
  }
}



function countingSortStable(arr) {
  // Time: O(n+k) Space: O(n+k)
  let maxElement = Math.max(...arr); // O(n)
  let freq = Array(maxElement + 1).fill(0); // O(1)
  for(let i = 0; i < arr.length; i++) { //O(n)
  freq[arr[i]]++;
  }
  // freq -> prefix sum array
  for(let i = 1; i < freq.length; i++) { // O(k)
  freq[i] = freq[i] + freq[i-1];
  }
  // console.log(freq);
  let output = Array(arr.length);
  for(let i = arr.length - 1; i >= 0; i--) { //O(n)
  let currelement = arr[i];
  let index = freq[currelement]; // index- 1 based
  output[index - 1] = currelement; // stored based on 0 based indexing
  freq[currelement]--;
  }
   return output;
}