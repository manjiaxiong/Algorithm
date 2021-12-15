/***
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回每个数字的平方组成的新数组，要求也按 非递减顺序 排序。
 * 示例 1：
输入：nums = [-4, -1, 0, 3, 10]
输出：[0, 1, 9, 16, 100]
解释：平方后，数组变为[16, 1, 0, 9, 100]
排序后，数组变为[0, 1, 9, 16, 100]

示例 2：
输入：nums = [-7, -3, 2, 3, 11]
输出：[4, 9, 9, 49, 121]
 */
function sortedSquares (nums) {
    // 我们写双指针的第一步就是要明确做指针与右指针的位置
    let leftIndex = 0 // 通常左指针为第一个点
    let rightIndex = nums.length - 1 // 右指针为最后一个点
    const newNums =[] //声明结果容器
    while (leftIndex<=rightIndex){ // 双指针最重要的是1、考虑出口一般为指针相撞 2、考虑指针移动
        //1 我们从左边开始平方
        let leftSquares = Math.pow(nums[leftIndex],2) //取平方
        let rightSquares = Math.pow(nums[rightIndex],2) //取平方
        console.log(leftSquares,rightSquares)
        if (leftSquares>=rightSquares) { // 左边的平方比右边小
            newNums.unshift(leftSquares) // 插入第一项
            leftIndex++
        }else {
            newNums.unshift(rightSquares) // 插入第一项
            rightIndex--
        }
    }
    return newNums
}
console.log(sortedSquares([-7, -3, -1,0,1,2, 3, 11]))
