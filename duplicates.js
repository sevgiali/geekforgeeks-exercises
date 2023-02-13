function duplicates(arr) {
  let length = arr.length;
  let newArr = [];
  let index = 0;
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] === arr[j]) {
        newArr[index] = arr[i];
        index++;
      }
    }
  }
  return newArr;
}
duplicates([2, 3, 1, 2, 3]);
