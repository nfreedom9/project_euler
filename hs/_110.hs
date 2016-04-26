import Data.List
-- 자연수 x,y,n에 대하여 1/x + 1/y = 1/n, (x<=y) 를 만족하는 자연수 (x,y) 쌍의 수 구하기.
-- n의 소인수분해 표현식이 P1^M1 * P2^M2 * P3^M3 * .. * Pn^Mn 인 경우
-- [{(2*M1+1)(2*M2+1)(2*M3+1)..(2*Mn+1)} + 1] / 2

primes = f [2..] where f (p : ns) = p : f [n | n <- ns, n `mod` p /= 0]

series _ 1 = [[0]]
series xs n = [ x:ps | x <- xs, ps <- series [0..x] (n-1) ]

distinct = product . map (+1)

sumpri xs = product $ zipWith (^) primes xs

resu msSeed msCnt xyCnt = 
   [ (sumpri ms, ms) | ms <- series [1..msSeed] msCnt, (>(2*xyCnt)) $ distinct $ map (*2) ms]

resu' msSeed msCnt xyCnt = 
   [ (r, (ms, (cnt))) | ms <- series [1..msSeed] msCnt, let r = sumpri ms; cnt = distinct $ map (*2) ms, (>(2*xyCnt)) $ cnt]

resu'' msSeed msCnt xyCnt = 
   [ (r, (ms, (cnt, getXY r))) | ms <- series [1..msSeed] msCnt, let r = sumpri ms; cnt = distinct $ map (*2) ms, (>(2*xyCnt)) $ cnt]

prob msSeed msCnt xyCnt = minimum $ resu msSeed msCnt xyCnt

result = fst $ prob 3 13 4000000
-------------------------------------------------------------------------------
getY n x = if (p `mod` s == 0) then p `div` s else 0 where p = n * x; s = x - n

getXY n = map (\y -> (y*n `div` (y-n),y)) $ filter (>0) $ map (getY n) [(n+1)..(2*n)]

factors m = f m (head primes) (tail primes) where
  f m n ns
    | m < 2 = []
    | m `mod` n == 0 = n : f (m `div` n) n ns
    | otherwise = f m (head ns) (tail ns)

frequency list = map (\l -> (head l,length l)) (group (sort list))

factorsWC m = frequency $ factors m
