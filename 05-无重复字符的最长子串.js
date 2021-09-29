/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 示例 1:
    输入: s = "abcabcbb"
    输出: 3 
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
    输入: s = "bbbbb"
    输出: 1
    解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
*/
/**
 * 
 * 解题思路： 栈 
 */
// 维护数组
var lengthOfLongestSubstring = function(s) {
    let sorceArr = s.split('')
    var maxLength = 0
    let targetArr = []
    sorceArr.forEach(item => {
        if (targetArr.indexOf(item) === -1){// 查看targetArr中是否有当前值 没有就添加进taegetArr
            targetArr.push(item)
            targetArr.length > maxLength ? maxLength = targetArr.length : ''
        }else {
           /***
            * 注意！！！！ 这里删除之前是否要考虑将这一项添加在最后
            */
           targetArr.push(item)
           targetArr.splice(0, targetArr.indexOf(item) + 1)
        }
    })
    return maxLength
};
lengthOfLongestSubstring("aaa")