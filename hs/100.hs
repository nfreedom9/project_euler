
---------------------------------------------------------------------
intSqrt :: Integer -> Integer
intSqrt n = bsearch 1 n
    where
      bsearch l u = let m = (l+u) `div` 2
                        m2 = m^2
                    in if l >= u
                       then m
                       else if m2 < n
                            then bsearch (m+1) u
                            else bsearch l m

b_t b = intSqrt $ b*(b-1)*2

t_b t = intSqrt $ t*(t-1)`div`2

ok_b b = isOK (b_t b) b

isOK t b = b*(b-1)*2 == t*(t-1)

resultB = head $ filter ok_b [(t_b 1000000000000)..]

nextAB a b 
    |a+b>10^12 =[a,b]
    |otherwise=nextAB (3*a+2*b+2) (4*a+3*b+3)

result = (+1) $ head $ nextAB 14 20
--  756872327473
-- 1000000000000

nextab (a,b) = (3*a+2*b+2,4*a+3*b+3)
isOK' (a,b) = 2*a*(a+1) == b*(b+1)

getR n = pushN (14,20) [] where 
   pushN a arr = 
      if length arr == n 
         then reverse arr 
         else pushN (nextab a) (a:arr)

result' = 
   let pushN (a,b) arr = 
         if a+b > 1000000000000
            then ((a,b):arr)
            else pushN (nextab (a,b)) ((a,b):arr)
       (bl,tt) = head $ pushN (14,20) []
   in bl+1