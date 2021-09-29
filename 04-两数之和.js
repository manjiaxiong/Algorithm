/***
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

    你可以按任意顺序返回答案。
 */
/**
 * 解题思路 用map方法
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/***
 * 解题思路 这题应该尽量减少循环次数
 * 所以我们用哈希法
 * 这个时候就要确定 键与值的分工
 * 我们选用键作为 target - 当前值 的几何运算
 * 我们的值记录 当前值的下标
 * 首先循环数组 先看出口条件 如果map[nums[i]]的值不为undefined时 说明什么呢？
 * 说明与他配对的值之前已经被记录！！！ 注意咱们键与值的分工
 * 如果为undefin说明并没有找到 所以我们把这一项添加进map字典
 */
 var twoSum = function(nums, target) {
    const map={}
    for(let i =0; i< nums.length;i++){
        if (map[nums[i]] !== undefined){
            return [map[nums[i]], i]
        }
        map[target-nums[i]] = i
    }
};
console.log(twoSum([2,7,11,15],9))
