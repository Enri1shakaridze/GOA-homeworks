# 1) 'Chemistry' key-ს მნიშვნელობის შეცვლა
student_grades = {
    'Math': 'A',
    'Biology': 'C',
    'Chemistry': 'B',
    'English': 'A',
}

# შეცვლა
student_grades['Chemistry'] = 'A'
print("After updating Chemistry:", student_grades)

# 2) ახალი key & value დამატება და 'Biology'-ის წაშლა
student_grades.update({'Physics': 'A'})
student_grades.pop('Biology')
print("After adding Physics and removing Biology:", student_grades)

# 3) ახალი Dict და List Comprehension value-ებისთვის
my_dict = {
    'name': 'Alice',
    'age': 25,
    'city': 'Tbilisi',
    'language': 'Python'
}

values_list = [value for value in my_dict.values()]
print("All values from my_dict:", values_list)
