n = int(input())
arr = list(map(int, input().split()))
maxi = max(arr)
ss = -101
for i in range(n):
    if ss < arr[i] and arr[i] != maxi:
        ss = arr[i]
print(ss)