n = int(input())
ans = 0
l = list(map(int, input().split()))
for i in range(n//2):
    a = l[i]
    l[i] = l[n - i - 1]
    # print(l[i])
    l[n - i - 1] = a

for i in l:
    print(i, end = " ")