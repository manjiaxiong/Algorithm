/**
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

0 <= a, b, c, d < n
a、b、c 和 d 互不相同
nums[a] + nums[b] + nums[c] + nums[d] == target
输入：nums = [1,0,-1,0,-2,2], target = 0
输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
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
        let sum = nums[i] + nums[leftIndex] + nums[rightIndex]
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
 var foreSum = function(nums,target) {
/**
 * 四数相加等于一个特定值
 * 我们参考三数相加
 */
    const content = [] // 声明容器
    if(nums.length < 4) return content
    nums.sort((n1,n2) => n1-n2) //首先我们要排序原数组
    console.log('nums::::::', nums)
    for (let i =0; i<nums.length; i++) {
        // 截取数组
        let threeNums = nums.slice(i+1,nums.length) 
         // 因为nums是不相同的整数数组 所以当前项大于target -3时退出当前这次循环
         //并且当截取后的数组长度小于三时退出当前循环
        if ( nums[i] >= target || threeNums.length < 3 ) continue;
        const threeArray =  threeSum(threeNums, target - nums[i] )
        threeArray.map(item => item.unshift(nums[i]))
    }
    
};
foreSum([-1,0,1,2,-1,-4],-2)
