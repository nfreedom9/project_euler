import Data.List

getLs :: Int -> [Int]
getLs maxl = pushNs (3,4,5) 1 [] where
  pushNs seed n arr =
    if (seedLength <= maxl) then pushNs seed (n+1) (seedLength:arr)
    else pushF3 $ pushF2 $ pushF1 arr where
      (a,b,c) = seed
      leng (a,b,c) = a + b + c
      seedLength = n * leng seed
      t1 = ( a - 2*b + 2*c,  2*a - b + 2*c,  2*a - 2*b + 3*c)
      t2 = ( a + 2*b + 2*c,  2*a + b + 2*c,  2*a + 2*b + 3*c)
      t3 = (-a + 2*b + 2*c, -2*a + b + 2*c, -2*a + 2*b + 3*c)
      pushF1 arrNs = if (leng t1 < maxl) then pushNs t1 1 arrNs else arrNs
      pushF2 arrNs = if (leng t2 < maxl) then pushNs t2 1 arrNs else arrNs
      pushF3 arrNs = if (leng t3 < maxl) then pushNs t3 1 arrNs else arrNs

frequency list = map (\l -> (head l,length l)) (group $ sort list)

result = length $ filter (\(_,c) -> c == 1) $ frequency $ getLs 1500000