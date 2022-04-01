def xyz_there(str):
  res = False
  for i in range(len(str)- 2):
    if str[i : i + 3] == "xyz":
      if i > 0 and str[i - 1] != ".":
        res = True
        break
      elif i > 0 and str[i - 1] == ".":
        res = False
      else:
        res = True
  return res
