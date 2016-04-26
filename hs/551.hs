-- 1, 1, 2, 4, 8, 16, 23, 28, 38, 49, ...

sum_i i = h i 0 where
    h a b = if a < 10 then a + b else h (div a 10) (mod a 10 + b)

-- a :: Int -> Int
-- a 0 = 1
-- a 1 = 1
-- a 1000000 = 31054319
-- a 2000000 = 65514710
-- a 4000000 = 135577601
-- a 6000000 = 209435171
-- a 8000000 = 281983439
-- a n = a' + sum_i a' where a' = a (n-1)

a n = a' n 1

a' 0 s = s
a' 1 s = s
a' n s = a' (n-1) (s + sum_i(s))

b :: Int -> Int
b n = sum $ fmap (\x -> sum_i $ a x) [0..(n - 1)]

-- def a(n: Long, s: Long = 1L): Long = {
-- 	if (n < 2L) s
-- 	else a(n - 1, s + sum_j(s))
-- }

-- fmap (\n -> a' n 1) [0..10]
-- a 1000000 = 31054319
-- a 2000000 = 65514710
-- a 4000000 = 135577601
-- a 6000000 = 209435171
-- a 8000000 = 281983439
-- a 1000000000000000 = ?
