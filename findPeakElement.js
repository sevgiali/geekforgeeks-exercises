function findPeakElement(arr) {
  let currentPeak = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > currentPeak) {
      currentPeak = arr[i];
    }
  }
  console.log(currentPeak);
}
findPeakElement([1, 15, 25, 45, 42, 21, 17, 12, 11]);
