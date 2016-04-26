import Data.List
import Data.Char (digitToInt)
 
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

r a = show $ intSqrt $ a * 10^202

r' a = sum . take 100 . map digitToInt $ r a

result = sum [f r | a <- [1..100], let x = a * e, let r = intSqrt x, r*r /= x] where
  e = 10^202; f = sum . take 100 . map digitToInt . show

result' = sum [r' a | a <- filter (\i -> not $ elem i (map (\n -> n^2) [1..10])) [1..100]]

------------------------------------------------------------------------------------ 

infos arr = foldl (\acc (a,b) -> acc ++ a ++ ": " ++ show b ++ " / ") " / " arr
 
intSqrt' :: Integer -> (Integer,[String])
intSqrt' n = bsearch 1 n [" / n: " ++ show n]
    where
      bsearch l u strs = let m = (l+u) `div` 2
                             m2 = m^2
                             info = infos [("l",l),("u",u),("m",m),("m2",m2)]
                    in if l >= u
                       then (m,reverse $ show m:(info ++ "[ l >= u ] return m"):strs)
                       else if m2 < n
                            then bsearch (m+1) u ((info ++ "[ l < u && m2 < n] return bsearch (m+1) u"):strs)
                            else bsearch l m ((info ++ "[ l < u && m2 >= n ] return bsearch l m"):strs)

showArr [] = return ()
showArr (h:t) = do putStrLn h; showArr t
-- showArr $ snd $ intSqrt' 30