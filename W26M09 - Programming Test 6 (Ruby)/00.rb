=begin

CHALLENGE 0

At the bottom of this file, create a Calculator class.

Calculator sum should have one instance method called sum.

It should take in two arguments and return their sum, plain and simple.

=end

class Calculator
    def sum num1, num2
        num1 + num2
    end
end

calculator = Calculator.new

puts calculator.sum 15, 20
