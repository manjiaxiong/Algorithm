/***
 * 思路其实是求最大面积
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
输入：[1,8,6,2,5,4,8,3,7]
输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 */
/**
 * @param {number[]} height 这个height是纵坐标
 * @return {number}
 */
 var maxArea = function(height) {
    /***
     * 方法一 暴力法 需要枚举出所有情况 必然会使用到 两次循环 暂不考虑
     */
    /**
     * 方法二 双指针 建议先去了解一下什么是双指针
     */
    let leftIndex = 0 // 通常左指针为第一个点
    let rightIndex = height.length - 1 // 右指针为最后一个点
    let maxArea = 0
    while(leftIndex<=rightIndex){
      // 首先要搞明白这个题说的是水桶原理 水桶能装多少水不是由高木板决定的 而是由短木板决定的
      // 还有一点 移动高木板是没有意义的 因为长在缩短而高没有变（短木板没有变）
      // 基于以上两点 我们来进行指针移动（判断左右两指针的高来进行指针移动 既移动矮板子）
      // 首先定义 水桶的长度
      let w = rightIndex - leftIndex // 左右指针的距离
      let h = Math.min(height[rightIndex], height[leftIndex]) // 取短板的高
      maxArea = Math.max(maxArea, w*h) // 用面积做比较取较大值
      height[leftIndex] <= height[rightIndex] ? leftIndex++ : rightIndex--
    }
    return maxArea
   };
   console.log(maxArea([1,8,6,2,5,4,8,3,7]))