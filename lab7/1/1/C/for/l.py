n = int(input())
res = 0
s = str(n)
for i in range(len(s)):
    res += int(s[i])* (2 ** (len(s) - i - 1))

print(res)