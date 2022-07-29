// [12,34,67,90]
// Case 1: S1 → 12, S2 → 34 + 67 + 90 = 191 → MAX = 191
// Case 2: S1 → 12 + 34 = 46, S2 → 67 + 90 = 157 → MAX = 157
// Case 3: S1 → 12 + 34+ 67 = 113, S2 → 90 → MAX = 113
// The minimum value among all of the above max values is 113 → ans

function canAllocateBooks(mid, books, s) {
  // Time: O(n)
  // we will try to allocate books such that any student reads atmost mid page
  let students = 1;
  let currAllocatedPages = 0; // this is the current pages allocated to last student
  for (let i = 0; i < books.length; i++) {
    if (currAllocatedPages + books[i] > mid) {
      // we cannot allocate ith book to last student
      students++; // start allocating for the next student
      currAllocatedPages = books[i]; // ith book goes to the new student
      if (students > s) return false; // we have less students
    } else {
      currAllocatedPages += books[i]; // give the book to the last student
    }
  }
  // if we never returned false from above that means allocation is possible
  return true;
}
function getMinimisedMaxValue(books, s) {
  // time: O(nlog(sum_of_all_pages))
  let lo = books[books.length - 1];
  let hi = 0;
  for (let i = 0; i < books.length; i++) hi += books[i];
  let ans = lo;
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (canAllocateBooks(mid, books, s)) {
      ans = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return ans;
}
