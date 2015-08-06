// Let's assume the following in distinguishing which hash implementation is being referred to:
// 1 = native
// 2 = array of arrays
// 3 = binary-sorted arrays
// 4 = own hash table implementation


// Assumptions:
// For initial testing,
// let's assume that key is a string
// (since that's what dictionaries are usually used for)
// we don't really care about the value type
// There are no same keys

var Hash1 = require('hash');
var Hash2 = require('hash2');
var Hash3 = require('hash3');
var Hash4 = require('hash4');

var hash1 = new Hash1();
var hash2 = new Hash2();
var hash3 = new Hash3();
var hash4 = new Hash4();

var results1 = [];
var results2 = [];
var results3 = [];
var results4 = [];
var sample = 5;
var dataSizes, perf;

// Initialization
// get 10 data points
for (var i = 1; i <= 10; i++) {
  dataSizes.push(i*100);
}

//////////////////////////
// Fill with Data First //
//////////////////////////

// this is wrong, you should have individual hashes per size
// so 10 in total per has type multiply by 4 = 40
for (i = 0; i < dataSizes.length; i++) {
  for (var j = 0; j < dataSizes[i]; j++) {
    var val = generateRandVal();
    var key = generateRandKey();

    hash1.add_key_value_pair(key, val);
    hash2.add_key_value_pair(key, val);
    hash3.add_key_value_pair(key, val);
    hash4.add_key_value_pair(key, val);
  }
}


/////////////////
// Perform get //
/////////////////


// First hash implementation
for (i = 0; i < sample; i++) {
  results1.push();
}

// Second hash implementation
// Third hash implementation
// Fourth hash implementation


/////////////////
// Perform set //
/////////////////


// First hash implementation
// Second hash implementation
// Third hash implementation
// Fourth hash implementation


////////////////////
// Perform delete //
////////////////////


// First hash implementation
// Second hash implementation
// Third hash implementation
// Fourth hash implementation





///////////////////////////////
///////////////////////////////
///////////////////////////////

function timePerf(sample, fn) {
  var start = Date.now();
  fn(sample);
  var end = Date.now();
  return Math.round((end-start)/1000);
}

// key can be alpha
function generateRandKey() {
  // body...
}

// this is gonna prolly puke on us
// let's test variable hoisting
var generateRandVal = generateRandKey;
