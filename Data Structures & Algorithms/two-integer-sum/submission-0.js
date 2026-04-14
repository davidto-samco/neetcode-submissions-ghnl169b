class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const remains = {};
        for (let num in nums){
            let remain = target - nums[num];
            console.log(remains);
            if(nums[num] in remains){
                let result = [];
                result.push(remains[nums[num]]);
                result.push(parseInt(num));
                console.log(result)
                return result;
            }
            else(remains[remain] = parseInt(num) )
        }
    }
}
