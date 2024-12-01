function findSum(arr, weight) {
  for (let i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == weight) {
        return [i, j];
      }
    }
    return -1;
  }
}

console.log(findSum([1, 2, 3, 4, 5], 9));