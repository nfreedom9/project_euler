
---------------------------------------------------------------------
divisors n = 1 : filter ((==0) . rem n) [2 .. n `div` 2]

sumDivisors n = sum $ divisors n

gChain n =
   pushChain n [n] where
      pushChain a arr =
         let d = sumDivisors a; arr' = d:arr in
         if (n == d)
            then arr
            else if (d < 1000001 && d `notElem` arr) then pushChain d arr' else []

-- chains = filter (\c -> length c > 0) $ map gChain [12496..15000]
chains = filter (\c -> length c > 0) $ map gChain [14000..15000]
----------------------------------------------------------------------
