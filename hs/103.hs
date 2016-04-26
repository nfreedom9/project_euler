import Data.List

getNotype :: Integral a => a -> Int
getNotype x = if ((sort d) == d) then 1 else if ((reverse (sort d)) == d) then -1 else 0 where d = getDigits x

getNotype' :: Integral a => a -> Int
getNotype' x = if (increasing' d) then 1 else if (decreasing' d) then -1 else 0 where d = getDigits x

increasing' (f:s:t) = (f <= s) && increasing' (s:t)
increasing' (f:[]) = True

decreasing' (f:s:t) = (f >= s) && decreasing' (s:t)
decreasing' (f:[]) = True

getDigits :: Integral a => a -> [a]
getDigits x = h x [] where h n arr = if n >= 10 then h (n `div` 10) (n `mod` 10:arr) else n:arr

-- 1,000,000 미만의 수 중 12,951개, 1010 미만에서는 277,032개

r0 = length $ filter (\n -> getNotype n /= 0) [1..10^6-1] -- 12951
r1 = length $ filter (\n -> getNotype n /= 0) [1..10^10-1] -- 277032
result = length $ filter (\n -> getNotype n /= 0) [1..10^100-1]

r0' = length $ filter (\n -> getNotype' n /= 0) [1..10^6-1] -- 12951
r1' = length $ filter (\n -> getNotype' n /= 0) [1..10^10-1] -- 277032
result' = length $ filter (\n -> getNotype' n /= 0) [1..10^100-1]