def crazy_sum(numbers)
  sum = 0
  for i in 0..numbers.count-1 do 
    sum += (i * numbers[i])
  end
  return sum
end


def square_nums(max)
  sum = 0
  for i in 1..max-1 do 
    sum=sum+1 if (i * i) < max
  end
  return sum 
end


def crazy_nums(max)
  arr = []
  for i in 1..max-1 do 
    isboth = (i%3==0 && i%5==0)
    arr << i if ( !isboth && (i%3==0 || i%5==0))
  end
  return arr
end