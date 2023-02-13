function missingNum(arr, n) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  const total = (n * (n + 1)) / 2 - sum;
  console.log(total);
}
missingNum([6, 1, 2, 8, 3, 4, 7, 10, 5], 10);
