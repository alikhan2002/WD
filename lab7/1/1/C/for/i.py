import math
a = int(input())
cnt = 0
for i in range(1,int(math.sqrt(a)) + 1):
    if a % i == 0:
        cnt += 2

if (math.ceil(math.sqrt(a)) == math.floor(math.sqrt(a))):
    cnt -=1
print(cnt)