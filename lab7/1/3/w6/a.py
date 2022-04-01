def make_bricks(small, big, goal):
  if goal > small + (big * 5):
    return False
  
  if goal % 10 < 5 and small <  goal %10:
    return False
  elif goal %10 > 5 and small + 5 < goal % 10:
    return False
  return True