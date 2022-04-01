from hashlib import new


x = int(input())
y = int(input())
z = int(input())
n = int(input())

newList = [[i,j,k] for i in range(x + 1) for j in range(y + 1) for k in range(z + 1) if i + j + k != n ]

arr = []
for i in range(x +1):
    for j in range(y +1 ):
        for k in range(z + 1):
            arr.append([i, j, k])
print(arr)
print(newList)