import Data.List

ints = "0123456789"
squreSets = ["01", "04", "0k", "1k", "25", "3k", "4k", "k4", "81"]

intSets = [[a,b,c,d,e,f] | a<-ints,b<-ints,c<-ints,d<-ints,e<-ints,f<-ints,a<b,b<c,c<d,d<e,e<f]

k69 n = if (n == '6' || n == '9') then 'k' else n

combi :: [Char] -> [Char] -> [String]
combi setA setB = union [ k69 a:[k69 b] | a <- setA, b <- setB] [ k69 b:[k69 a] | a <- setA, b <- setB]

include setA setB = length (setB \\ setA) == 0

canMakeAllSqures setA setB = combi setA setB `include` squreSets

canMakeAllSquresSets = [(setA,setB)| setA <- intSets, setB <- intSets, canMakeAllSqures setA setB]

result' = length canMakeAllSquresSets

-- all lists consisting of n elements from the given list
choose 0 _  = [[]]
choose _ [] = []
choose n (x:xs) =
    ( map ( x : ) ( choose ( n - 1 ) xs ) ) ++ ( choose n xs )
 
-- cross product helper function
cross f xs ys = [ f x y | x <- xs, y <- ys ]
 
-- all dice combinations
-- substitute 'k' for both '6' and '9' to make comparisons easier
dice = cross (,) ( choose 6 "012345k78k" ) ( choose 6 "012345k78k" )
 
-- can we make all square numbers from the two dice
-- again, substitute 'k' for '6' and '9'
makeSquares dice =
    all ( makeSquare dice ) [ "01", "04", "0k", "1k", "25", "3k", "4k", "k4", "81" ]
 
-- can we make this square from the two dice
makeSquare ( xs, ys ) [ d1,  d2 ] =
    ( ( ( d1 `elem` xs ) && ( d2 `elem` ys ) ) || ( ( d2 `elem` xs ) && ( d1 `elem` ys ) ) )
 
result =
    ( `div` 2 ) . -- because each die combinations will appear twice
    length .
    filter makeSquares
    $ dice