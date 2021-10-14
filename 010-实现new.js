/***
 * new 运算符是创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例，其创建过程如下：s
    创建一个空的简单JavaScript对象（即{}）
    链接该对象（即设置该对象的构造函数）到另一个对象
    将第一步新创建的对象作为this的上下文
    如果该函数没有返回对象，则返回this
 */
    function newObject(){
        var obj = new Object(); // 这是第一步 生成一个对象
        Constructor = [].shift.call(arguments); //取出第一个参数也就是 要被new的构造函数
        obj.__proto__ = Constructor.prototype; // 将实例的隐士原型指向构造函数的显示原型
        var demo = Constructor.apply(obj,arguments); // 改变this指向obj
        return typeof demo === 'object' ? demo : obj;
    }