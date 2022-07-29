// https://www.spoj.com/problems/AGGRCOW/

function canPlaceCows(c, mid, stalls) {
  // Time: O(n)
  let lastPlacedPosition = 0;
  c--; // as first cow is already placed;
  for (let i = 1; i < stalls.length; i++) {
    if (stalls[i] - stalls[lastPlacedPosition] >= mid) {
      c--; // place one more cow
      lastPlacedPosition = i;
    }
    if (c == 0) return true; // we placed all the cows
  }
  // if we didn't place all the cows, then we will never retrun true from above
  return false;
}
function getMaximisedMinDist(stalls, c) {
  // time: O(nlogn) Space: O(1)
      stalls.sort((a, b) => a - b); // sorting the stalls to iterate easily
      let lo = 1,
      hi = stalls[stalls.length - 1];
      let ans = 1;
  while (lo <= hi) {
       let mid = lo + Math.floor((hi - lo) / 2);
       if (canPlaceCows(c, mid, stalls) == true) {
      // if we are able to place the cows with atleast mid distance, then
      // mid is a possible ans, but we can find something greater than mid also
      ans = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return ans;
}
