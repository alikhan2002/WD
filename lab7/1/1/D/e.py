n = int(input())
ans = 0
l = list(map(int, input().split()))
for i in range(n - 1):
    if ((l[i + 1] >= 0 and  l[i] >= 0) or (l[i + 1] <= 0 and l[i] <= 0)):
        ans += 1
print("YES" if ans > 0 else "NO")