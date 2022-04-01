def sum67(nums):
    res = 0
    flag = False
    for i in range(len(nums)):
      if nums[i] == 6:
        flag = True
      if nums[i] == 7 and flag:
        flag = False
        continue
      if flag == False:
        res += nums[i]
    
    return res


# l = list(map(int, input().split()))

# print(sum67(l))