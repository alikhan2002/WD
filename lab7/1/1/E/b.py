def power(a, n):
    t = a
    if n == 0:
        return 1
    for i in range(int(n - 1)):
        a *= t
    return a

a, n = map(float, input().split())
print(power(a,n))