=begin

CHALLENGE 4

There exists a Person class in this file. It has a full_name method which can 
return the person's full name based on their provided first and last names. 
Mind blowing, eh?

We need to support doctors... Create a Doctor class which inherits the Person 
class. It should have the same constructor, but when full_name is called, it 
should return their full name prepended with "Dr. "

Example:
  p = Person.new("Joy", "Halliday")
  p.full_name # ==> "Joy Halliday"

  d = Doctor.new("Joy Halliday")
  d.full_name # ==> "Dr. Joy Halliday"

Do not modify the Person class at all.

=end

class Person
    def initialize(first_name, last_name)
      @first_name = first_name
      @last_name = last_name
    end
  
    def full_name
      "#{@first_name} #{@last_name}"
    end
end

class Doctor < Person
  def full_name
    "Dr. #{super}"
  end
end

person = Person.new "Alex", "Miller"
puts person.full_name

doctor = Doctor.new "Martha", "Smith"
puts doctor.full_name