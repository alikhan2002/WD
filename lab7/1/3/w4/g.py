def max_end3(nums):
  if nums[0] >= nums[2]:
    nums = [nums[0] for i in nums]
    return nums
  else:
    nums = [nums[2] for i in nums]
    return nums