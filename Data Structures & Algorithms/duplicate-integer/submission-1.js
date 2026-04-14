class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // const freq = {};
        // for (let num in nums){
        //     let current = nums[num];
        //     freq[current] = `${current}` in freq ? freq[current] + 1 : 1;
        //     if (freq[current] > 1) return true;
        // }
        // return false;
        const freq = new Set();
        for(let num in nums){
            if(freq.has(nums[num])) return true;
            else freq.add(nums[num]);
        }
        return false;
    }
}
