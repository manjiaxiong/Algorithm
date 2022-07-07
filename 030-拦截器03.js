const data = {ok: true, text: 'heee'}
let activeEffect
const bucket = new WeakMap() // 储存副作用函数的‘桶’
const 
const obj = new Proxy(data, {
    get (target, key) {
        track(target, key)
        return target[key]
    },
    set (target, key, newVal) {
        // 设置属性新值
        target[key] = newVal
        trigger(target, key)
    }
})
// effect 栈
const effectStack = []

function effect(fn) {
  const effectFn = () => {
    cleanup(effectFn)
    // 当调用 effect 注册副作用函数时，将副作用函数复制给 activeEffect
    activeEffect = effectFn
    // 在调用副作用函数之前将当前副作用函数压栈
    effectStack.push(effectFn)
    fn()
    // 在当前副作用函数执行完毕后，将当前副作用函数弹出栈，并还原 activeEffect 为之前的值
    effectStack.pop()
    activeEffect = effectStack[effectStack.length - 1]
  }
  // activeEffect.deps 用来存储所有与该副作用函数相关的依赖集合
  effectFn.deps = []
  // 执行副作用函数
  effectFn()
}
function cleanup(effectFn) {
    // 遍历effectFn.dps数据
    for (let i =0; i<effectFn.deps.length; i++){
        const deps = effectFn.deps[i]
        deps.delete(effectFn)
    }
    // 最后要重置effectFn.deps数组
    effectFn.deps.length = 0
}
function track (target, key) {
    if(!activeEffect) return target[key]
    let depsMap = bucket.get(target) // 根据target 从桶中取出depsMap,它是一个map类型： key => effects
    if (!depsMap) {
        // 如果不存在depsMap 就新建一个Map 并与target关联
        bucket.set(target, (depsMap = new Map()))
    }
    // 再根据key从depsMap中取得deps, 他是一个Set类型 里面储存着与当前key有关的所有effect（副作用函数）
    let deps = depsMap.get(key)
    if (!deps) {
        // 没有则新建
        depsMap.set(key, (deps = new Set()))
    }
    deps.add(activeEffect) // 将副作用函数塞进deps 注意这里deps是Set类型 已经自动去重副作用函数
    activeEffect.deps.push(deps) // 新增
}

function trigger (target, key) {
    // 从桶中取出depsMap
    const depsMap = bucket.get(target)
    if (!depsMap) return // 如果没有与桶关联的target 直接退出
    const effects = depsMap.get(key)
    const effectsToRun = new Set(effects)
    // console.log(effectsToRun)
    effectsToRun.forEach(fn => {
        fn()
    });
}
let temp2,temp1
effect(function effectFn1() {
    console.log('1执行')
    effect(function effectFn2() {
        console.log('2执行')
        temp2 = obj.text
    })
    temp1 = obj.ok
})
effect(() => {
    obj.ok = false
})