def sum13(nums):
  res = 0
  flag = False
  for i in nums:
    if i == 13:
      flag = True
      continue
    if flag:
      flag = False
      continue
    res += i
  return res
