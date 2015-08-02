// Using a sorted list/binary search
function Hash() {
  this.data = [];
}

Hash.prototype.add_key_value_pair = function(k, v) {
  var pos = binary_search(k, this.data);
  this.data[pos] = [k, v];
};

Hash.prototype.get_value = function(k) {
  var pos = binary_search(k, this.data);
  return this.data[pos];
};

Hash.prototype.remove_key = function(k) {
  var pos = binary_search(k, this.data);
  // does splicing affect time?
  this.data.splice(i, 1);
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
  // not found or
  // return low;
}

// don't think this is needed.
// as you add elements, always make sure it's the sorted way
function sort() {
}
