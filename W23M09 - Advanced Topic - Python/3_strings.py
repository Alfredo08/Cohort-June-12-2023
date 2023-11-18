
first_name = "Alex"
age = 25

message = "Hey there my name is " + first_name + " and my age is " + str(age)
message_interpolated = f"Hey there my name is {first_name} and my age is {age}"
message_interpolated_two = "Hey there my name is {} and my age is {}".format(first_name, age)
message_interpolated_three = "Hey there my name is %s and my age is %d" % (first_name, age)

length = len(message)

print(message, length)
print(message_interpolated)
print(message_interpolated_two)
print(message_interpolated_three)
