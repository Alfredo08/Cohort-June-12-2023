names = ['Alex', 'Julie', 'Martha', 'Roger', 'Alan']


for i in range(len(names)):
    print(names[i], i)
print('-----')
for item in names:
    print(item)
print('-----')
i = 0
while i < len(names):
    print(names[i])
    i += 1


"""
for num in range(11): # num = 0, num < 11, num += 1
    print(num)

print('-----')

for num in range(3, 11): # num = 3, num < 11, num += 1
    print(num)

print('-----')

for num in range(1, 21, 2): # num = 1, num < 21, num += 2
    print(num)

print('-----')

for num in range(10, 0, -1): # num = 10, num > 0, num -= 1
    print(num)
"""