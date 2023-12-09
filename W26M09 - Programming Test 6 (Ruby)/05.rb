=begin

CHALLENGE 5

Given the existing Employee class.

Define a class School (at the bottom of this file) which has a method `train`.
This train method should take in an employee as an argument, and upskill them.

=end
class Employee
  attr_reader :skill_level
  
  def initialize
    @skill_level = 1
  end
  
  def upskill
    @skill_level += 1
  end
end

class School
  def train employee
    employee.upskill
  end
end


employee_1 = Employee.new
school = School.new

puts employee_1.skill_level
school.train employee_1
school.train employee_1
school.train employee_1
puts employee_1.skill_level
