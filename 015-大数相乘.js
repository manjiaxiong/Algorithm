let multiply = function (num1, num2) {
    if (isNaN(num1) || isNaN(num2)) return '';
    if (num1 === '0' || num2 === '0') return '0';
    // 拿到数字1与数字2的长度
    let l1 = num1.length,
        l2 = num2.length;
    // 声明容器
    let result = [];

    for (let i = l1 -1; i >= 0; i--) { // 我们循环较大的数字
        for (let j = l2 - 1; j >= 0; j--) { // 循环较小的数字
            let index1 = i + j; // 注意这里！ 这个当前计算的位置 这里是 c
            let index2 = i + j + 1; // 这是进位后的位置 比如 [a,b,c,d] 这里是d
            let product = num1[i] * num2[j] + (result[index2] || 0); // 我们在这里先把数字保存下来
            result[index2] = product % 10; // 取余数 
            result[index1] = Math.floor(product / 10) + (result[index1] || 0);
        }
    }
    return result.join('').replace(/^0+/, ''); // 我们在这里 把前面的0去掉
}
console.log(multiply('111','241421'));