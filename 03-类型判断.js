console.log(Object.prototype.toString.call([999]).split(' ')[1].split(']')[0]);
function instance_of(L, R) { //L 表示左表达式，R 表示右表达式 
    var O = R.prototype; // 取 R 的显示原型 
    L = L.__proto__; // 取 L 的隐式原型
    while (true) {
        if (L === null)
            return false;
        if (O === L) // 当 O 显式原型 严格等于  L隐式原型 时，返回true
            return true;
        L = L.__proto__;
    }
}