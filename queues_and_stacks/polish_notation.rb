require './stack'

class PNStack < Stack
  OPERATORS = ['+', '-', '/', '*']

  def push(el)
    if not OPERATORS.include? el and peek.is_a? Integer
      b = el.to_i
      a = pop.to_i
      op = pop
      case op
      when '+'
        result = a+b
      when '-'
        result = a-b
      when '/'
        result = a/b
      when '*'
        result = a*b
      end
      push result
    else
      if OPERATORS.include? el
        @data.push el
      else
        @data.push el.to_i
      end
    end
  end
end
