def mini(a, b, c, d):
    return minn(minn(a,b), minn(c,d))

    
def minn(a, b):
    if a <= b:
        return a
    else:
        return b    

a,b,c,d = map(int, input().split())
# b = int(input())
# c = int(input())
# d = int(input())
print(mini(a,b,c,d))

