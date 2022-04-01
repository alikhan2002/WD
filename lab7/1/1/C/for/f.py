x = int(input())
res = 0
for i in range(len(str(x))):
    y = int((x /10**i)%10)
    res *= 10
    res += y
print(res)