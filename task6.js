function maxNumber(...nums) {
  var maxNum = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > maxNum) {
      maxNum = nums[i];
    }
  }
  return maxNum;
}
