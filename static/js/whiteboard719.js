/**
You are given two integer arrays nums1 and nums2, sorted in ascending order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in ascending order.
Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
**/
var merge = function (nums1, m, nums2, n) {
    let new_nums1 = nums1.splice(0, m);
    let new_nums2 = nums2.splice(0, n);
    let num3 = new_nums1.concat(new_nums2);
    num3.sort();
    return num3
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
