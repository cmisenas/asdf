require './stack'

class StackQueue
  def initialize
    @data = Stack.new
    @temp = Stack.new
  end

  def add item
    while a = @data.pop
      @temp.push a
    end
    @data.push item
    while b = @temp.pop
      @data.push b
    end
  end

  def remove
    @data.pop
  end

  def peek
    @data.peek
  end

  def is_empty?
    @data.is_empty?
  end
end
