/***
 *重要思路 apply这个函数是干嘛的？
    就是改变this指向
    首先要记得apply是函数直接执行 且第一个参数是需要改变的执行上下文 剩下的是参数数组
 */
// Function.prototype.myapply = function (context = window){ //我们选择给函数的构造函数添加一个隐式方法
//    //这个函数的第一个参数是需要改变的this 因为 可能传ｎｕｌｌ　所以我们给个默认值为window
//    // 这个时候咱们要判断调用者是不是函数 
//    if (typeof this !== 'function') { // 这时的this还是调用者
//       throw new TypeError('not funciton')
//    }
//    context.fn = this // 保存调用者 这时this肯定是个函数 我们要做i的事情就是用要改变的this调用现在的this
//    if (arguments[1]){ //如果后续还有参数
//       context.fn(...arguments.slice(1)) // 
//    } else {
//       context.fn()
//    }
//    delete context.fn
// }
// function see (anme){
//    console.log(this.anme)
// }
// see.myapply({name:33},[4,2,5])
Function.prototype.myCall = function (context = window) {
   if (typeof this !== 'function') { // 这时的this还是调用者
         throw new TypeError('not funciton')
      }
   context.fn = this
   context.fn(...arguments.slice(1))
   delete context.fn
}
Function.prototype.mybind = function() {
   if (typeof this !== 'function') {
       throw new TypeError('not funciton')
   }
   var self = this; // 保存原函数
   context = [].shift.call(arguments), // 保存需要绑定的this上下文
       outArgs = [].slice.call(arguments); // 剩余的参数转为数组
   return function() { // 返回一个新函数
       let inArgs = [].slice.call(arguments);
       console.log('inArgs', inArgs)
       return self.apply(context, outArgs.concat(inArgs));
   }
}
function see (anme){
   console.log(this.anme)
}
see.myCall({name:33},4,2,5)