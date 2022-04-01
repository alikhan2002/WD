import math
a = int(input())
b = int(input())
j = 1
for i in range(a, b+1):
    if j**2 >= a and j ** 2 <= b:
        print(j**2)
    j += 1