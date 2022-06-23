const bucket = new WeakMap() // 储存副作用函数的‘桶’
let activeEffect
function effect(fn) {
    activeEffect = fn
    fn()
}
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
}

function trigger (target, key) {
    // 从桶中取出depsMap
    const depsMap = bucket.get(target)
    if (!depsMap) return // 如果没有与桶关联的target 直接退出
    const effect = depsMap.get(key)
    effect && effect.forEach(fn => fn());
}