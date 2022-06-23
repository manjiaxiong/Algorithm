// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
/***
 * 输入：digits = "23"
    输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
    输入：digits = ""
    输出：[]
 */
// 输入的字母是几位 我们输出的数组里面的字母就应该是几位
/**
 * 1 暴力法 直接枚举
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
/***
 * 重点！！！ 像这种要用循环但是不知道循环几次的 题目一切向递归靠拢！！！！
 */
 function letterCombinations(digits){
    const res= []

    if (!digits) {
        return res
    }

    const KEY_MAP = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    // 注意我们递归的是啥 我们递归的是输入的digits的位数
    function loop(str, index) {
        if (index === digits.length) { // 注意这里当递归到第digits位时说明str的长度已经达到digits的长度
            res.push(str)
            return
        }
        for (const char of KEY_MAP[digits[index]]) {
            loop(str + char, index + 1)
        }
    }
    loop('', 0)

    return res
};