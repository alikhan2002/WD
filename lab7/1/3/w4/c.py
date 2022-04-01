def reverse3(nums):
  new = [None]* len(nums)
  for i in range(len(nums) - 1, -1 , -1):
    new[len(nums) - i - 1] = nums[i]
  return new
