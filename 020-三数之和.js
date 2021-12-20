/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
   注意：答案中不可以包含重复的三元组。
   输入：nums = [-1,0,1,2,-1,-4] 重排后 -4,-1,-1,0,1,2
   输出：[[-1,-1,2],[-1,0,1]]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums,target) {
    /**
     * 三数相加为0
     */
    if(nums.length<3) return []
    const content = [] //声明输出容器
    // 题眼 在三个数字相加等于0 所以我们应该先排序
    //选定一个数值然后向右变部分做双指针 并看相加是否为0
    nums.sort((n1,n2)=> n1-n2)
    for (let i =0 ; i< nums.length ; i++){
        if (nums[i]> target) return content // 当基点nums[i]>=0时没必要进行下面的操作了
        //确定左右指针位置
        let leftIndex = i+1
        let rightIndex = nums.length -1
        // console.log(1);
        while(leftIndex < rightIndex){//指针相撞 
          console.log(rightIndex, ':::::::', rightIndex)
          // console.log(nums[i] + nums[leftIndex] +nums[rightIndex], target)
          let sum = nums[i] + nums[leftIndex] + nums[rightIndex]
          // console.log('nums[leftIndex]::::',nums[leftIndex],'nums[leftIndex + 1]::::', nums[leftIndex + 1],'nums[rightIndex]::',nums[rightIndex],'nums[i]:::',nums[i] ,'sum:::', sum)
          console.log(sum,target)
          if (sum === target ){ //相加为0
            // 注意这里要考虑去重 所以我们就要看当满足什么条件的时候答案一定是重复的
            // 因为nums是排序好的数组
            // 考虑到去重 所以这个答案数组里面只要有一位是相同的时候 就会重复 所以我们用左边第一个数作为依据
            content.push([nums[i],nums[leftIndex],nums[rightIndex]])
            while(nums[leftIndex] === nums[leftIndex -1]) { //实际上这一部就是在去重
              //当左边的指针与左边加一的指针相等时 我们在while里面加一 直至当左边的指针与左边加一的指针不相等
              leftIndex ++
            }
            // 这里的 指针加一的意思是经过while去重后的左指针加一
            leftIndex ++
          } else if (sum < target) { // 相加大于0 右指针应该左移
            leftIndex ++
          } else {
            rightIndex --
          }

        }
    }
    return content
};
console.log(threeSum([-1,0,1,2,-1,-4],0));
