// Implement dictionary
var INITIAL_SIZE = 500;
var TOMBSTONE = 'TOMBSTONE';

function Hash() {
  this.data = new Array(INITIAL_SIZE);
}

Hash.prototype.add_key_value_pair = function(k, v) {
  // handle full array size
  // handle index occupied
  var index = hash_key(key) % INITIAL_SIZE;
  while((this.data[index] !== TOMBSTONE || this.data[index] !== undefined) && index < INITIAL_SIZE) {
    index++;
  }
  // reallocate array if index is beyond INITIAL_SIZE
  this.data[index] = key + ":" + val;
};

Hash.prototype.get_value = function(k) {
  var index = hash_key(key) % INITIAL_SIZE;
  var arr;
  // we are assuming open addressing at this point
  // TODO: collision detection handling
  while (index < INITIAL_SIZE) {
    arr = this.data[index].split(':');
    if (arr[0] === k) {
      return arr[1];
    }
    index++;
  }
};

Hash.prototype.remove_key = function(k) {
  var index = hash_key(key) % INITIAL_SIZE;
  this.data[index] = TOMBSTONE; //hardehar
};

function hash_key(key) {
  // implement here
};

