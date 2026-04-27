class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let currentCount = 0
        let maxCount = 0
        for (let i = 0; i < nums.length; i++) {
            if(nums[i] == 1) {
                currentCount+= 1
            } else {
                currentCount = 0
            }
            
            if (currentCount > maxCount) {
                maxCount = currentCount
            }
        }
        return maxCount
    }
}
