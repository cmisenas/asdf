require './stack'

class StackWithMin < Stack
  def push(el)
    if is_empty?
      @min = 0
    else
      if el < min
        @min = @data.length
      end
    end
    @data.push el
  end

  def min
    return if @min.nil?
    @data[@min]
  end
end
