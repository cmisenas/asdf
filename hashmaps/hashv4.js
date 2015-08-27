;(function (exports) {
  // Implement dictionary
  var INITIAL_SIZE = 500;
  var TOMBSTONE = 'TOMBSTONE';

  function Hash() {
    this.data = new Array(INITIAL_SIZE);
  }

  Hash.prototype.add_key_value_pair = function(key, val) {
    // handle full array size
    // handle index occupied
    var index = jenkinsOneAtATimeHash(key) % INITIAL_SIZE;
    var delim;

    while((this.data[index] !== TOMBSTONE &&
          (this.data[index] !== undefined &&
           this.data[index].indexOf(key) < 0)) &&
           index < INITIAL_SIZE) {
      index++;
    }
    // TODO: reallocate array if index is beyond INITIAL_SIZE
    delim = typeof val === 'number' ? ":num:" : ":";
    this.data[index] =  key + delim + val;
  };

  Hash.prototype.get_value = function(key) {
    var index = jenkinsOneAtATimeHash(key) % INITIAL_SIZE;
    var arr;

    // we are assuming open addressing at this point
    if (this.data[index] == undefined || this.data[index] === TOMBSTONE) return;

    while (index < INITIAL_SIZE) {
      arr = this.data[index].split(':');
      // JavaScript does the same thing with object keys
      // it type coerces it into a string so that if you have:
      // var x = {};
      // x[5] and x['5'] is the same
      if (arr[0].toString() === key.toString()) {
        if (arr.length > 2) {
          return parseFloat(arr[2], 10);
        } else {
          return arr[1];
        }
      }
      index++;
    }
  };

  Hash.prototype.remove_key = function(key) {
    var index = jenkinsOneAtATimeHash(key) % INITIAL_SIZE;
    this.data[index] = TOMBSTONE; //hardehar
  };

  function jenkinsOneAtATimeHash(key){
    var hash, i;
    var key = key.toString();
    hash = i = 0;
    for (; i < key.length; i++) {
      hash += key[i].charCodeAt();
      hash += (hash << 10);
      hash ^= (hash >> 6);
    }
    hash += (hash << 3);
    hash ^= (hash >> 11);
    hash += (hash << 15);
    return Math.abs(hash);
  }

  exports.Hashv4 = Hash;
}(this));

