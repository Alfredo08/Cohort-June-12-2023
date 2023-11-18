
student = {
    "first_name" : "Alex",
    "last_name" : "Miller",
    "age" : 25,
    "programming_languages":{
        "python" : "mastery",
        "javascript" : "mastery",
        "ruby" : "intermediate"
    }
}

print(student)

student["first_name"] = "Alexander"
student["hobbies"] = ['Programming', 'Swimming', 'Reading', 'Video games']

print(student['programming_languages']['javascript'])

# del student['age']
returned_item = student.pop('programming_languages')
print(student)
# print(returned_item)

print('-----')
for key in student:
    print(key, student[key])

print('-----')
for key,value in student.items():
    print(key, value)

print(student.items())