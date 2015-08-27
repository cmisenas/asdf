// Using a sorted list/binary search
function Hash() {
  this.data = [];
}

Hash.prototype.add_key_value_pair = function(k, v) {
  var key = k.toString();
  var index;
  if (!!this.data.length) {
    index = binary_search(key, this.data);
    if (this.data[index] && this.data[index][0] === key) {
      this.data[index][1] = v;
    } else {
      this.data.splice(index, 0, [key, v]);
    }
  } else {
    this.data.push([key, v]);
  }
};

Hash.prototype.get_value = function(k) {
  var key = k.toString();
  var index = binary_search(key, this.data);
  if (index < 0 || index >= this.data.length || this.data[index][0] !== key) {
    return;
  }
  return this.data[index][1];
};

Hash.prototype.remove_key = function(k) {
  var index = binary_search(k, this.data);
  if (index > -1) {
    this.data.splice(index, 1);
  }
};

function binary_search(val, arr) {
  // arr is an array of array pairs e.g. [[2, 3], ['val', 42]]
  var low = 0;
  var high = arr.length - 1;

  while (low <= high) {
    mid = Math.floor((low + high)/2);
    if (arr[mid][0].toString() < val.toString()) {
      low = mid + 1;
    } else if (arr[mid][0].toString() > val.toString()) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return low;
}

