/**
 * 猴子吃桃
 * 猴子第一天摘下若干个桃子，当即吃了一半，还不瘾，又多吃了一个
   第二天早上又将剩下的桃子吃掉一半，又多吃了一个。以后每天早上都吃了前一天剩下 的一半零一个。
   到第10天早上想再吃时，见只剩下一个桃子了。求第一天共摘了多少
 */
function monkeyEat(n){
    /**
     * 思路 前一天与后一天的关系为 前一天 = (后一天+1) * 2
     * 第十天还剩一个桃子
     */
     if(n == 10)//已知第6天
     {
          return 1;//桃子数量为1
     }
     var sl = (monkeyEat(n+1)+1)*2;//第n天的桃子数量=（下一天的桃子数量+1）*2
     return sl;//return第n天的数量
}

// 下面是循环法
function serchPeach (day) {
    /**
     * 解题思路 第十天 = 1 
     */
    let total = 1
    for(let date = day; date > 0;date --){
        total = (total+1)*2 //前一天 = (后一天+1) * 2
    }
    return total
}
console.log(serchPeach(10))