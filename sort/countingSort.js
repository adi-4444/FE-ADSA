// normal Counting Sort
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


// const countSort = (arr = [], min, max) => {
//   const count = {};

//   for (let i = min; i <= max; i++) {
//     count[i] = 0; // with inital value 0
//     //    o/p of above line  {1: 2, 2: 1, 3: 2, 4: 2}
//   }
//   // First populate the Count of the number in array
//   for (let i = 0; i < arr.length; i++) {
//     count[arr[i]] += 1;
//   }
//   // sorting the array

//   const sortArray = [];
//   for (let i = min; i <= max; i++) {
//     while (count[i] > 0) {
//       sortArray.push(i);
//       count[i]--;
//     }
//   }

//   return sortArray;
// };

// let sortArr = countSort([3, 4, 3, 2, 1, 4, 1], 1, 4);
// console.log(sortArr); // [1,1,2,3,3,4]


// Stable Counting Sort 
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

// Counting Sort
function countingSort(arr) {
  let maxEl = Math.max(...arr);
  let minEl = Math.min(...arr);
  let range = maxEl - minEl + 1;
  let freq = new Array(range).fill(0);
  for(let i = 0; i < arr.length; i++) {
  let currElement = arr[i];
  freq[currElement - minEl]++;
  }
  for(let i = 1; i < freq.length; i++) {
  freq[i] += freq[i-1];
  }
  let output = new Array(arr.length);
  for(let i = arr.length - 1; i >= 0; i--) {
  let currelement = arr[i];
  let index = freq[currelement - minEl];
  output[index - 1] = currelement;
  freq[currelement - minEl]--;
  }
  return output;
  }