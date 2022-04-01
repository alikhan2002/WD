x = int(input())
res = 0
for i in range( len(str(x))):
    res += int((x /10**i)%10)
print(res)