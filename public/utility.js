Array.prototype.randEl = function () {
  return this[Math.floor(Math.random() * this.length)]
};
