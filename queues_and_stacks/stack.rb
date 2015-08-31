class Stack
  def initialize
    @data = []
  end

  def push(el)
    @data.push(el)
  end

  def pop
    @data.pop
  end

  def peek
    @data.last
  end

  def is_empty?
    @data.empty?
  end
end

