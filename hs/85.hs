import Data.List

cnt a b = sum $ (*) <$> [1..a] <*> [sum [1..b]]

abs' a b = abs $ cnt a b - 2000000

maxBof a = head $ dropWhile (\x -> abs' a (x+1) <= abs' a x) [1..]

result = let (_,a,b) = head $ sort $ map (\(a,b) -> (abs' a b, a, b)) $ takeWhile (\(a,b) -> a <= b) $ map (\a -> (a,maxBof a)) [1..] in a*b