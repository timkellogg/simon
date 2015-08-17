window.onload = function () {

  // Allows for arrays to have a method to randomly select elements
  Array.prototype.randEl = function () {
    return this[Math.floor(Math.random() * this.length)]
  };
};
