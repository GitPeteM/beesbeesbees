var Bee = function() {
  Grub.call(this);

  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';

  // this.eat = function () {};

};

// Set the prototype
Bee.prototype = Object.create(Grub.prototype);
// Set the constructor
Bee.prototype.constructor = Bee;
