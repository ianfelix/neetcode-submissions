class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        // Input: arr = [2,4,5,3,1,2]
        // Output: [5,5,3,2,2,-1]
        for(let i = 0; i < arr.length; i++) {
          let greatestNum = 0
            for (let j = i + 1; j < arr.length; j++) {
              if (arr[j] > greatestNum) {
                greatestNum = arr[j]
              }

              arr[i] = greatestNum
              
            }
            if (i === arr.length - 1) {
                arr[i] = -1
              }    
        }
        return arr
    }
}
