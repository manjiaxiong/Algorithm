function Mvue(options, prop) {
  this.$options = options;
  this.$data = options.data;
  // console.log(this.$data)
  this.$prop = prop;
  this.$el = document.querySelector(options.el);
  //数据代理
  Object.keys(this.$data).forEach(key => {
    this.proxyData(key);
  });

  this.init();
}
Mvue.prototype.init = function () {
  observer(this.$data);
  new Compile(this);
}
Mvue.prototype.proxyData = function (key) {
  console.log(key)
  Object.defineProperty(this, key, {
    get: function () {
      return this.$data[key]
    },
    set: function (value) {
      this.$data[key] = value;
    }
  });
}