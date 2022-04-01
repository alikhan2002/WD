def make_chocolate(small, big, goal):
    if goal >= 5 * big:
        res = goal - 5 * big
    else:
        res = goal % 5
        
    if res <= small:
        return res
        
    return -1