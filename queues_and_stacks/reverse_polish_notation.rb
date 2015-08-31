require './stack'

class RPNStack < Stack
  OPERATORS = ['+', '-', '/', '*']

  def push(el)
    if OPERATORS.include? el
      b = pop
      a = pop
      case el
      when '+'
        result = a+b
      when '-'
        result = a-b
      when '/'
        result = a/b
      when '*'
        result = a*b
      end
      @data.push result
    else
      @data.push el.to_i
    end
  end
end
