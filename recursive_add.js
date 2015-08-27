function sumArr(arr) {
  if (!!arr.length) {
    return arr[0] + sumArr(arr.slice(1));
  } else {
    return 0;
  }
}
