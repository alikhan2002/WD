n = int(input())

l = list(map(int, input().split()))
for i in range(0, len(l), 2):
    print(l[i], end = " ")