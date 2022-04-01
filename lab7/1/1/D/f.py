n = int(input())
ans = 0
l = list(map(int, input().split()))
for i in range(1, n - 1):
    if ((l[i + 1] < l[i] and  l[i] >= l[i - 1])):
        ans += 1
print(ans)