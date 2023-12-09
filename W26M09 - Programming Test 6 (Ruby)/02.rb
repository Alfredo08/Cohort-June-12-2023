=begin

CHALLENGE 2

Copy the same Superhero class from the previous question.

For this challenge, make a Superhero's name updatable after it is created:

    s.name = "Arm-Fall-Off Boy"

=end

class Superhero
    # attr_reader :name
    # attr_writer :name
    attr_accessor :name
    def initialize name
        @name = name
    end
end

thor = Superhero.new "Thor"
puts thor.name
thor.name = "Locky"
puts thor.name