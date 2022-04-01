x = int(input())
y = int(input())
res = 0
for i in range( len(str(x))):
    if int((x /10**i)%10) == y:
        res += 1
print(res)