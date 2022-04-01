n = int(input())
ans = 0
l = list(map(int, input().split()))
for i in range(n):
    if l[i] > 0:
        ans += 1
print(ans)