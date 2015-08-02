// Using an array of arrays and doing it linear-style
function Hash() {
  this.data = [];
}

Hash.prototype.add_key_value_pair = function(k, v) {
  this.data.push([k, v]);
};

Hash.prototype.get_value = function(k) {
  var d;

  for (var i = 0; i < this.data.length; i++) {
    d = this.data[i];
    if (d[0] === k) {
      return d[1];
    }
  }
};

Hash.prototype.remove_key = function(k) {
  var d;
  for (var i = 0; i < this.data.length; i++) {
    if (this.data[i][0] === k) {
      // does splicing affect time?
      this.data.splice(i, 1);
    }
  }
};

