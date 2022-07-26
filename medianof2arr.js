// Problem statement: Given two sorted arrays nums1 and nums2 of size m and n respectively, 
// return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Sample:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.


var findMedianSortedArrays = function(nums1, nums2) {
    const joined=nums1.concat(nums2);
    joined.sort(function(a,b){
        return a-b;
    })
    const even=joined.length/2;
    const isOdd=joined.length%2;
    if(isOdd>0){
        return joined[Math.floor(joined.length/2)];
    }
    else{
        return (joined[even]+joined[even-1])/2;
    }
};




// or 

let arr1 = [1,3]
let arr2 = [2]

function median (arr1,arr2) {
    let l1 = arr1.length
    let l2 = arr2.length
    var i = 0; 
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= l1; count++)
    {
        if (i == l1)
        {
            m1 = m2;
            m2 = arr2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = arr1[0];
            break;
        }
        if (arr1[i] <= arr2[j])
        {
            m1 = m2;
            m2 = arr1[i];
            i++;
        }
        else
        {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }
  
    return (m1 + m2)/2;
}
  
/* Driver program to test above function */
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    document.write("Median is "+ getMedian(ar1, ar2, n1));
else
    document.write("Doesn't work for arrays of unequal size");
