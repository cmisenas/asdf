// Using an array of arrays and doing it linear-style
function Hash() {
  this.data = [];
}

Hash.prototype.add_key_value_pair = function(k, v) {
  var key = k.toString();
  var index = search_index(this.data, key);
  if (index > -1) {
    this.data[index][1] = v;
  } else {
    this.data.push([key, v]);
  }
};

Hash.prototype.get_value = function(k) {
  var key = k.toString();
  var index = search_index(this.data, key);
  return index > -1 ? this.data[index][1] : undefined;
};

Hash.prototype.remove_key = function(k) {
  var key = k.toString();
  var index = search_index(this.data, key);
  if (index > -1) {
    this.data.splice(index, 1);
  }
};

function search_index(arr, k) {
  var d;
  var key = k.toString();
  for (var i = 0; i < arr.length; i++) {
    d = arr[i];
    if (d[0] === key) {
      return i;
    }
  }
  return -1;
}

