arr = []
mini = 10000.0
for _ in range(int(input())):
    a = []
    name = input()
    score = float(input())
    if score < mini: mini = score
    a.append(name)
    a.append(score)
    arr.append(a)
t = 10000.0
for b in arr:
    if t > b[1] and b[1] != mini:
        t = b[1]
ans = []
for i in arr:
    if i[1] == t:
        ans.append(i[0])
ans.sort()
for i in ans:
    print(i)