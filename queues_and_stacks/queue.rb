class Queue
  def initialize
    @data = []
  end

  def add item
    @data.unshift item
  end

  def remove
    @data.pop
  end

  def peek
    @data.last
  end

  def is_empty?
    @data.empty?
  end
end

