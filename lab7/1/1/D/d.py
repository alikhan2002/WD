n = int(input())
ans = 0
l = list(map(int, input().split()))
for i in range(n - 1):
    if l[i + 1] > l[i]:
        ans += 1
print(ans)