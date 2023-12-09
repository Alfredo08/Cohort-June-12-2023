=begin

CHALLENGE 6

Implement the incomplete wrap_array_items method

=end

class ArrayFormatter
  # Takes in an array and two args for left and right side wrapping
  # Returns a new array with string containing the "wrapped" version of each element
  # Example arguments: [1,2,3,4,5], "<<" , ">>"
  # Returns array: ["<<1>>","<<2>>","<<3>>","<<4>>","<<5>>"]
  def wrap_array_items items, left, right
    items.map do |item|
      "#{left}#{item}#{right}"
    end
  end
end

formatter = ArrayFormatter.new

puts formatter.wrap_array_items ["I", "love", "Programming"], "<", "/>"