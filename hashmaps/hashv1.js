;(function (exports) {
  // Using the native languages's dictionary
  function Hash() {
    this.data = {};
  }

  Hash.prototype.add_key_value_pair = function(k, v) {
    this.data[k] = v;
  };

  Hash.prototype.get_value = function(k) {
    return this.data[k];
  };

  Hash.prototype.remove_key = function(k) {
    delete this.data[k];
  };

  exports.Hashv1 = Hash;
}(this));

